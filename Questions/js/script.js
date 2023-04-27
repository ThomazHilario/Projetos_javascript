let iconadd = document.querySelectorAll('.add')
let iconremove = document.querySelectorAll('.remove')
iconadd.forEach(icon => {
    //Procurando elementos filhos do questions: que são as respostas

    let respostas = icon.parentElement.parentElement.lastElementChild


    //adicionando evento

    icon.addEventListener('click',function(){
        respostas.classList.toggle('resposta')
    })
    
    
})