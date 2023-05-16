/* input */
const min = document.getElementById('imin')
const max = document.getElementById('imax')
/* numero */
const numero = document.getElementById('result')
/* button */
const button = document.getElementById('click')



button.addEventListener('click',function(){
    let gerar = Math.floor(Math.random() * (Number(max.value) - Number(min.value)) + Number(min.value)) + 1

    numero.innerHTML = gerar
})