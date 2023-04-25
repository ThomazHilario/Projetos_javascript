//inputs
let texto = document.getElementById('texto')
let submit = document.getElementById('enviar')
//lista
let ul = document.querySelector('ul')

//Function

submit.addEventListener('click',function(){
    if(texto.value != ''){
        // criando e colocando o li
        let li = document.createElement('li')
        li.innerHTML = texto.value
        ul.prepend(li)
         //criando remoção
        let remove = document.createElement('span')
        li.append(remove)
        remove.setAttribute('class','remove')
        //adicionando evento ao remove
        remove.addEventListener('click',function(){
        li.remove(li)
    })
    }
})