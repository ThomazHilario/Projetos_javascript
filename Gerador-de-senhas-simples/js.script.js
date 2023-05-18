/* inputs */
const label_value = document.getElementById('value_input')
const range = document.getElementById('itamanho')
const button = document.getElementById('click')
const painel = document.getElementById('result')

/* caracteres da senha */
let caracteres_minusculos = 'abcdefghijklmnopqrstuvwxyz'
let caracteres_maiusculos = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
let caracteres_numericos = '0123456789'

const allCaracteres = (caracteres_minusculos + caracteres_maiusculos + caracteres_numericos).split('')

/* function da geração do numero */
function randomPassword(number){
    let senha = ''
    for(let i=0;i<number;i++){
        let random = Math.floor(Math.random() * allCaracteres.length)
        senha += allCaracteres[random]
    }
    painel.style.display = 'block'
    painel.textContent = senha
}
/* evento click */

button.addEventListener('click',function(){
    randomPassword(range.value)
})

/* verificar o número no input range */
setInterval(function(){
    label_value.textContent = range.value
},50)