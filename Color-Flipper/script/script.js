//Base hexadecimal

let base16 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

//Váriáveis do DOM

//Body
const body = document.querySelector('body')
//button
const button = document.getElementById('click')
//texto
const texto = document.getElementById('texto')


//Função

button.addEventListener('click',function(){
    //RGB

    let rgb = 'rgb' + '(' + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ')'

    //Hexadecimal

    let hex = '#' + base16[Math.floor(Math.random() * base16.length)] + base16[Math.floor(Math.random() * base16.length)] + base16[Math.floor(Math.random() * base16.length)] + base16[Math.floor(Math.random() * base16.length)] + base16[Math.floor(Math.random() * base16.length)] + base16[Math.floor(Math.random() * base16.length)]

    //Sorteando o rgb e o hexadecimal

    rgbAndHexa = []
    rgbAndHexa.push(rgb,hex)

    randomRgbOrHexa = Math.floor(Math.random() * rgbAndHexa.length)

    //resultados
    body.style.background = rgbAndHexa[randomRgbOrHexa]
    body.style.transition = '0.5s'
    texto.innerHTML = 'Background-color: ' + rgbAndHexa[randomRgbOrHexa]
})