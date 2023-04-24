//buttons
const click = document.getElementById('click')
const fechar = document.getElementById('fechar')
//Modal
let modal = document.getElementById('modal')
//body
const body = document.querySelector('body')

//function

click.addEventListener('click',function(){
    click.style.display = 'none'
    modal.style.display = 'block'
    body.style.background = 'rgba(3, 3, 3, 0.950)'
    body.style.transition ='0.3s'
})
fechar.addEventListener('click', function(){
    modal.style.display = 'none'
    click.style.display = 'block'
    body.style.background = 'rgb(36,36,36)'
    body.style.transition ='0.3s'
})