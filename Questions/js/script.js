let iconadd = document.querySelectorAll('.add')
let iconremove = document.querySelectorAll('.remove')
let textoresposta = document.getElementsByClassName('resposta')[0]
let textoresposta1 = document.getElementsByClassName('resposta')[1]
let textoresposta2 = document.getElementsByClassName('resposta')[2]

for(let i = 0;i < iconadd.length;i++){
    // pergunta 1
    iconadd[0].addEventListener('click',function(){
        textoresposta.style.display = 'block'
        textoresposta1.style.display = 'none'
        textoresposta2.style.display = 'none'
        //request 0
        iconadd[0].style.display = 'none'
        iconremove[0].style.display = 'inline'
        //request 1
        iconadd[1].style.display = 'inline'
        iconremove[1].style.display = 'none'
        //request 2
        iconadd[2].style.display = 'inline'
        iconremove[2].style.display = 'none'
    })
    //pergunta 2
    iconadd[1].addEventListener('click',function(){
        textoresposta1.style.display = 'block'
        textoresposta.style.display = 'none'
        textoresposta2.style.display = 'none'
        //request 2
        iconadd[1].style.display = 'none'
        iconremove[1].style.display = 'inline'
        //request 0
        iconadd[0].style.display = 'inline'
        iconremove[0].style.display = 'none'
        //request 3
        iconadd[2].style.display = 'inline'
        iconremove[2].style.display = 'none'

    })
    //pergunta 3
    iconadd[2].addEventListener('click',function(){
        textoresposta2.style.display = 'block'
        textoresposta.style.display = 'none'
        textoresposta1.style.display = 'none'
        //request 2
        iconadd[2].style.display = 'none'
        iconremove[2].style.display = 'inline'
        //request 0
        iconadd[0].style.display = 'inline'
        iconremove[0].style.display = 'none'
        //request 1
        iconadd[1].style.display = 'inline'
        iconremove[1].style.display = 'none'
    })
}

for(let i = 0;i < iconremove.length;i++){
    iconremove[0].addEventListener('click',function(){
        textoresposta.style.display = 'none'
        iconremove[0].style.display = 'none'
        iconadd[0].style.display = 'inline'
    })
    iconremove[1].addEventListener('click',function(){
        textoresposta1.style.display = 'none'
        iconremove[1].style.display = 'none'
        iconadd[1].style.display = 'inline'
    })
    iconremove[2].addEventListener('click',function(){
        textoresposta2.style.display = 'none'
        iconremove[2].style.display = 'none'
        iconadd[2].style.display = 'inline'
    })
}