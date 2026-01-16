window.addEventListener('DOMContentLoaded', () => {
    // fields
    const chatContentList1 = document.querySelector('.chat-content-list-1');
    const chatContentList2 = document.querySelector('.chat-content-list-2');
    const chatContentList3 = document.querySelector('.chat-content-list-3');
    const chatContentList4 = document.querySelector('.chat-content-list-4');

    // define form inputs
    const userNameRow = document.querySelector('.user--name');
    const userEmailRow = document.querySelector('.user--email');
    const userPhoneRow = document.querySelector('.user--phone');
    const formButton = document.querySelector('.form--button');

    const messageList = [
        "Hello! I am the smart InvestBot from ChatGPT.<br>Today I can help you earn at least $300 using configured trading algorithms.",
        "How should I address you?",
        "Do you have any experience trading on the stock market with artificial intelligence or trading bots?",
        "Please specify your citizenship. InvestBot is not available in all regions, so it’s important to ensure that your InvestBot will function properly.",
        "How long have you lived in the country you mentioned earlier?",
        "Since our company adheres to the law, we are required to send you a receipt for your profits and a report on the program’s performance. Please provide your email (e.g., example@gmail.com)",
        "Almost done! You’ve successfully reserved your copy of InvestBot with a personal manager from ChatGPT.<br><br>If you are ready to start earning today, please provide your phone number. This is needed to confirm your registration and quickly activate your account.",
    ];

    const userChoise = [];
    const answers = [];

    const questionList = [{
            item: ["Yes, I have tried it before", "No, I have never tried it", "I use it every day"]
        },
        {
            item: ["EU countries", "USA", "Canada", "Other"]
        },
        {
            item: ["Up to 2 years", "2-5 years", "More than 5 years"]
        },
    ];

    function getCurrentTime() {
        const currentDate = new Date();
        let minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
        let hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours();
        const currentTime = `${hours}:${minutes}`;
        return currentTime;
    }

    let currentIndex = 0;
    let answerIterator = 0;
    const MAX_INDEX = messageList.length;

    function checkShowContains(element) {
        if (!userNameRow.classList.contains('show') &&
            !userEmailRow.classList.contains('show') &&
            !userPhoneRow.classList.contains('show')) {
            chatContentList1.insertAdjacentHTML('beforeend', element);
        }

        if (userNameRow.classList.contains('show') &&
            !userEmailRow.classList.contains('show') &&
            !userPhoneRow.classList.contains('show')) {
            chatContentList2.insertAdjacentHTML('beforeend', element);
        }

        if (userNameRow.classList.contains('show') &&
            userEmailRow.classList.contains('show') &&
            !userPhoneRow.classList.contains('show')) {
            chatContentList3.insertAdjacentHTML('beforeend', element);
        }

        if (userNameRow.classList.contains('show') &&
            userEmailRow.classList.contains('show') &&
            userPhoneRow.classList.contains('show')) {
            chatContentList4.insertAdjacentHTML('beforeend', element);
        }
    }

    function createLoader() {
        const loader = `
            <div class="message-loader" data-loader>
                <p style="color: #F0F0F0; font-style: italic; font-size: 18px; color: rgba(227, 227, 227, 1.0);">InvestBot is typing…</p>
            </div>
        `;
        checkShowContains(loader);
    }

    function removeLoader() {
        const loader = document.querySelector('[data-loader]');
        if (loader) loader.remove();
    }

    function createBotTemplateMessage(message) {
        const template =
            `<div class="chat-flex">
                <img src="./chat/images/gpt-main-logo.svg" alt="" style="max-height: 35px; max-weight:35px">
                <div class="chat-content-item manager">
                    <div class="chat-content-desc">
                        <div class="chat-content-desc-item manager">
                            <p class="text">${message}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        checkShowContains(template);
        return template;
    }

    function createBotMessage(messageList) {
        const values = Object.values(messageList);
        createBotTemplateMessage(values[currentIndex]);
        currentIndex++;
    }

    function userMessageTemplate(messageText) {
        const template = `
            <div class="chat-content-item user item-active">
                <div class="chat-content-desc">
                    <div class="chat-content-desc-item user">
                        <p class="text">${messageText}</p>
                    </div>
                </div>
            </div>`;
        checkShowContains(template);
        return template;
    }

    function createAnswerButtonsTemplate(answers) {
        const values = Object.values(answers[answerIterator]);
        const template = document.createElement('div');
        template.classList.add('user-answer_list');

        for (let value of values[0]) {
            const button = document.createElement('div');
            button.classList.add('user--answer', 'chat-content-buttons-gender-block');
            button.innerHTML = value;
            template.appendChild(button);
        }

        answerIterator++;
        return template;
    }

    function renderQuestion() {
        chatContentList2.append(createAnswerButtonsTemplate(questionList));
    }

    function handleUserChoise() {
        const buttons = document.querySelectorAll('.user--answer');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', (e) => {
                const selectedAnswer = e.target.textContent;

                userMessageTemplate(selectedAnswer);
                e.target.parentElement.remove();
                userChoise.push(selectedAnswer);
                answers.push(selectedAnswer);

                // Check if the answer is "Up to 2 years"
                if (selectedAnswer === "Up to 2 years") {
                    addStatusParameter('lessThan2years');
                }

                if (answers.length === questionList.length) {
                    var answersString = answers.join(';');
                    // setAnswersCookie('user_answers', answersString, 1);
                    // setLocalStorage('user_answers', answersString);
                }

                startChat();
            });
        }

        return false;
    }

    function addStatusParameter(status) {
        let url = new URL(window.location.href);
        url.searchParams.set('status', status);
        history.replaceState(null, '', url.toString());
    }

    // Name
    function enterName() {
        userNameRow.classList.add('show');
    }

    function checkNameInputValue() {
        const firstName = document.querySelector('input[name=first_name]');
        const lastName = document.querySelector('input[name=last_name]');
        const buttonName = document.querySelector('[data-btn-name]');

        buttonName.addEventListener('click', (e) => {
            if (!firstName.value) {
                firstName.classList.add('error');
                firstName.placeholder = 'Enter your first name';
                return;
            } else {
                firstName.classList.add('valid');
            }

            if (!lastName.value) {
                lastName.classList.add('error');
                lastName.placeholder = 'Enter your last name';
                return;
            } else {
                lastName.classList.add('valid');
            }

            firstName.classList.remove('error');
            lastName.classList.remove('error');
            userMessageTemplate(`${firstName.value} ${lastName.value}`);
            e.target.remove();
            startChat();
        });

        return false;
    }

    // Email
    function enterEmail() {
        userEmailRow.classList.add('show');
    }

    function validateEmail(email) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(email).toLowerCase());
    }

    function checkEmailInputValue() {
        const email = document.querySelector('input[name=email]');
        const btnNext = document.querySelector('[data-btn-email]');

        btnNext.addEventListener('click', (e) => {
            if (validateEmail(email.value) === false) {
                email.classList.add('error');
                email.value = '';
                email.placeholder = 'Enter your email address';
            } else {
                email.classList.remove('error');
                email.classList.add('valid');
                userMessageTemplate(email.value);
                e.target.remove();
                startChat();
            }
        });

        return false;
    }

    // Phone
    function enterPhone() {
        userPhoneRow.classList.add('show');
    }

    function checkPhoneValue() {
        const phone = document.querySelector('input[name=phone]');
        const buttonPhone = document.querySelector('[data-btn-phone]');

        buttonPhone.addEventListener('click', (e) => {
            if (!phone.value) {
                phone.classList.add('error');
                phone.placeholder = 'Enter your phone number';
            } else {
                phone.classList.remove('error');
                userMessageTemplate(phone.value);
                e.target.remove();
                startChat();
            }
        });

        showRegisterButton();
        return false;
    }

    function showRegisterButton() {
        formButton.classList.remove('hide');
        formButton.classList.add('show');
    }

    function checkCurrentIndex(index) {
        if (index >= MAX_INDEX) {
            enterPhone();
            checkPhoneValue();
            userPhoneRow.scrollIntoView({
                behavior: "smooth"
            });

            showRegisterButton();
            formButton.scrollIntoView({
                behavior: "smooth"
            });
            return;
        }

        if (index === 2) {
            enterName();
            checkNameInputValue();
            userNameRow.scrollIntoView({
                behavior: "smooth"
            });
            return;
        }

        if (index === 3) {
            renderQuestion();
            handleUserChoise();
            chatContentList2.scrollIntoView({
                behavior: "smooth"
            });
            return;
        }

        if (index === 4) {
            renderQuestion();
            handleUserChoise();
            chatContentList3.scrollIntoView({
                behavior: "smooth"
            });
            return;
        }

        if (index === 5) {
            renderQuestion();
            handleUserChoise();
            chatContentList4.scrollIntoView({
                behavior: "smooth"
            });
            return;
        }

        if (index === 6) {
            enterEmail();
            checkEmailInputValue();
            userEmailRow.scrollIntoView({
                behavior: "smooth"
            });
            return;
        }

        startChat();
    }

    function startChat() {
        createLoader();
        setTimeout(() => {
            removeLoader();
            createBotMessage(messageList);
            checkCurrentIndex(currentIndex);
        }, 2000);
    }

    startChat();

    function showTime() {
        const currentTime = document.querySelector('.message-time');
        currentTime.innerHTML = getCurrentTime();
    }

    function showAccordion() {
        const accordBtn = document.querySelector('.main__sup-btn');
        const accordContent = document.querySelector('.meta__sup-text');

        accordBtn.addEventListener('click', () => {
            accordBtn.classList.toggle('active');
            accordContent.classList.toggle('active');
        });
    }

    function showModal() {
        const modalBtn = document.querySelector('[data-modal]');
        const modalClose = document.querySelector('[data-modal-close]');
        const modalContent = document.querySelector('.header__modal');

        modalBtn.addEventListener('click', () => {
            modalContent.classList.toggle('active');
        });
        modalClose.addEventListener('click', () => {
            modalContent.classList.remove('active');
        });
    }

    showModal();
    showAccordion();
    showTime();
});
