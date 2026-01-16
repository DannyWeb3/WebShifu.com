<?php
// sendpulse.php
declare(strict_types=1);

header('Content-Type: text/html; charset=utf-8');

function json_response(array $data, int $code = 200): never {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function is_ajax(): bool {
    return !empty($_SERVER['HTTP_X_REQUESTED_WITH'])
        && strtolower((string)$_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
}

function curl_json(string $url, array $payload, array $headers = [], string $method = 'POST'): array {
    $ch = curl_init($url);

    $defaultHeaders = [
        'Content-Type: application/json',
        'Accept: application/json',
    ];

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST  => $method,
        CURLOPT_HTTPHEADER     => array_merge($defaultHeaders, $headers),
        CURLOPT_POSTFIELDS     => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        CURLOPT_TIMEOUT        => 20,
    ]);

    $raw = curl_exec($ch);
    $err = curl_error($ch);
    $httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($raw === false) {
        throw new RuntimeException("cURL error: " . $err);
    }

    $data = json_decode($raw, true);
    if (!is_array($data)) {
        throw new RuntimeException("Bad JSON response (HTTP $httpCode): " . $raw);
    }

    return [$httpCode, $data];
}

function get_sendpulse_token(string $clientId, string $clientSecret): string {
    [$code, $data] = curl_json(
        'https://api.sendpulse.com/oauth/access_token',
        [
            'grant_type'    => 'client_credentials',
            'client_id'     => $clientId,
            'client_secret' => $clientSecret,
        ]
    );

    if ($code < 200 || $code >= 300 || empty($data['access_token'])) {
        throw new RuntimeException('Failed to get access token: ' . json_encode($data, JSON_UNESCAPED_UNICODE));
    }

    return (string)$data['access_token'];
}

// Разрешаем только POST
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo 'Method Not Allowed';
    exit;
}

// ====== НАСТРОЙКИ ======
$SENDPULSE_LIST_ID = 539848;

$SENDPULSE_API_ID     = (string)(getenv('SENDPULSE_API_ID') ?: '');
$SENDPULSE_API_SECRET = (string)(getenv('SENDPULSE_API_SECRET') ?: '');

if ($SENDPULSE_API_ID === '' || $SENDPULSE_API_SECRET === '') {
    if (is_ajax()) json_response(['ok' => false, 'error' => 'Server is not configured'], 500);
    http_response_code(500);
    echo 'Server is not configured';
    exit;
}

// ====== ВАЛИДАЦИЯ ВХОДА ======
$name  = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));

// ФИКС: пробуем несколько имён поля телефона
$phone = trim((string)($_POST['phone-1'] ?? $_POST['phone'] ?? $_POST['tel'] ?? $_POST['phone_1'] ?? ''));

$agree = isset($_POST['agreement']);

if ($SENDPULSE_LIST_ID <= 0) {
    json_response(['ok' => false, 'error' => 'SENDPULSE_LIST_ID is not set'], 500);
}

if (!$agree) {
    json_response(['ok' => false, 'error' => 'Потрібна згода на обробку персональних даних'], 400);
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(['ok' => false, 'error' => 'Некорректный email'], 400);
}

if ($phone === '') {
    json_response(['ok' => false, 'error' => 'Телефон обязателен'], 400);
}

// Нормализация телефона (оставляем + и цифры)
$phoneNorm = preg_replace('/[^\d+]/', '', $phone);
if ($phoneNorm === null || $phoneNorm === '') {
    $phoneNorm = $phone;
}

try {
    $token = get_sendpulse_token($SENDPULSE_API_ID, $SENDPULSE_API_SECRET);

    // 1) Добавляем контакт (структура как в документации).
    $url = "https://api.sendpulse.com/addressbooks/{$SENDPULSE_LIST_ID}/emails";

    $payload = [
        'emails' => [
            [
                'email' => $email,
                'variables' => array_filter([
                    'name'   => ($name !== '' ? $name : null),
                    'Phone'  => $phoneNorm,
                    'paid'   => 'pending', // Статус оплаты по умолчанию
                    // NEW: передача product_name из формы
                    'product_name' => $_POST['product_name'] ?? 'Unknown Product',
                ], fn($v) => $v !== null && $v !== ''),
            ],
        ],
    ];

    [$code, $resp] = curl_json($url, $payload, [
        "Authorization: Bearer {$token}",
    ]);

    if ($code < 200 || $code >= 300 || empty($resp['result'])) {
        json_response(['ok' => false, 'error' => 'SendPulse error', 'details' => $resp], 502);
    }

    // Успех: если хочешь редирект (не AJAX) — раскомментируй:
    // if (!is_ajax()) { header('Location: /thanks.html', true, 302); exit; }

    json_response(['ok' => true, 'message' => 'Підписка успішна']);

} catch (Throwable $e) {
    json_response(['ok' => false, 'error' => $e->getMessage()], 500);
}
