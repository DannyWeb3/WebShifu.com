$(document).ready(function() {
	// Записуемо відповіді вікторини 
let a = []
$('.trigerClick').on('click' , (e) => { 
	$(e.currentTarget).parent().children().off('click')
	a.push(e.target.innerText)
})

let b = []
let u = 0;
// Записуемо які бокси обрав користувач 
$('.try').on('click' , (e) => { 
	setTimeout(() => {
  $('.boxes .try.abierta > .caja_tapa').on('animationend' ,(e) =>{

		b.push(parseInt($(e.currentTarget).parent().attr('id'))+1)
	} )
})
	
})
// Виводимо при натисканні OK
$('#p_modal_button3').on('click' , (e) => { 
   const uniqueArray = [...new Set(b)];
   a.forEach(function(item, index) {
   	console.log('Відповідь на' + ' ' + (index + 1) + ' ' + 'Запитання - ' + ' ' + item )
   })
   uniqueArray.forEach(function(item, index) {
   	console.log('Спроба' + ' ' + (index + 1) + ' ' + 'Була по боксу під номером  - ' + ' ' + item )
   })
   console.log('Подарунок занходиться у боксі під номером' + ' ' + uniqueArray[uniqueArray.length - 1])
})
let comment = $('.comments-wrap > .comments:first-child')
let textAreaVal = '';
let counter = 0;
$('#sendButton').on('click' , (e) => { 
	textAreaVal = $('#commentText').val()
	if($('#commentText').val() == ''){
		alert('Напишіть щось')
	}
	else{
		
		
		if(counter > 2){
			alert('зачекайте 10 секунд')
			setTimeout(() => {
				counter=0;
			},10000 )
		}
		else{
			$('.comments-wrap').prepend(` <div class="comments" style="display:block"><div class="profile" style='background: #000; height: 60px;'></div><div class="comment-content"><p class="name"><span><span>Anonymous</span></span></p><p><span><span>${textAreaVal}</span></span></p></div><div class="clr"></div><div class="comment-status"><span><span"><span> Curte·comente </span></span><img src="assets/img/like.png" width="15px" height="15px"><span><span> 0 </span></span></span><small><span><span> · </span></span><u><span><span>0 segundos antes</span></span></u></span></div></div>`)
			counter++
		}

	}
	

})

})

