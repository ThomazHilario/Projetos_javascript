//hexadecimal

//position red
let redposition1 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let redposition2 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
//position green

let greenposition1 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let greenposition2 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
//position Blue

let blueposition1 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let blueposition2 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

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

    //red
    let randomposition1 = Math.floor(Math.random() * redposition1.length)
    let randomposition2 = Math.floor(Math.random() * redposition2.length)

    let red = redposition1[randomposition1] + redposition2[randomposition2]
    //green
    let greenrandomposition1 = Math.floor(Math.random() * greenposition1.length)
    let greenrandomposition2 = Math.floor(Math.random() * greenposition2.length)
    
    let green = greenposition1[greenrandomposition1] + greenposition2[greenrandomposition2]
    //blue
    let bluerandomposition1 = Math.floor(Math.random() * blueposition1.length)
    let bluerandomposition2 = Math.floor(Math.random() * blueposition2.length)

    let blue = blueposition1[bluerandomposition1] + blueposition2[bluerandomposition2]

    //variável hexadecimal

    let hex = '#' + red + green + blue

    //Sorteando o rgb e o hexadecimal

    rgbAndHexa = []
    rgbAndHexa.push(rgb,hex)

    randomRgbOrHexa = Math.floor(Math.random() * rgbAndHexa.length)

    //resultados
    body.style.background = rgbAndHexa[randomRgbOrHexa]
    texto.innerHTML = 'Background-color: ' + rgbAndHexa[randomRgbOrHexa]
})