
// const buyBtns = document.querySelectorAll('.js-buy-tickets')
// const modal = document.querySelector('.modal')
// const modalClose = document.querySelector('.js-modal-close')

// function showbuyticket(){
//     modal.classList.add('open')
// }
// function hideticket()
// {
//       modal.classList.remove('open')
// }
// for (const buyBtn of buyBtns){
//     buyBtn.addEventListener('click',showbuyticket)
// }

// modalClose.addEventListener('click',hideticket)
const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.modal-container')
function showbuyticket(){
    modal.classList.add('open')
}
function hideticket()
{
     modal.classList.remove('open')
}
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showbuyticket)
}

modalClose.addEventListener('click',hideticket)
modal.addEventListener('click',hideticket)
modalContainer.addEventListener('click',function(even)
{
    even.stopImmediatePropagation()
}
)