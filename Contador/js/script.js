//buttons
const decrement = document.getElementById('decrementar')
const reset = document.getElementById('resetar')
const increment = document.getElementById('incrementar')
//painel
const number = document.getElementById('numero')
//contador
let cont = 0

increment.addEventListener('click', function(){
    number.innerHTML = cont += 1
    if(cont > 0){
        number.style.color = 'green'
    } else if(cont == 0){
        number.style.color = 'white'
    }
})
reset.addEventListener('click',function(){
    number.innerHTML = cont = 0
    if(cont == 0){
        number.style.color = 'white'
    }
})
decrement.addEventListener('click', function(){
    number.innerHTML = cont -= 1

    if(cont < 0){
        number.style.color = 'red'
    }else if(cont == 0){
        number.style.color = 'white'
    }
})