//inputs
let texto = document.getElementById('texto')
let submit = document.getElementById('enviar')
//lista
let ul = document.querySelector('ul')

//Function

submit.addEventListener('click',function(){
    if(texto.value != ''){
        // criando e colocando o li
        let div = document.createElement('div')
        ul.append(div)
        let li = document.createElement('li')
        li.innerHTML = texto.value
        div.append(li)
         //Função para removerItens
         deleteItens(div)

         //Função para concluir itens
         checkedItens(li)
    }
})

function deleteItens(div){
    //Criando elemento,adicionando uma class,colocando na página e adicionando evento.
    let deleteItem = document.createElement('button')
    deleteItem.setAttribute('class','delete')
    deleteItem.innerHTML = 'Excluir'
    div.append(deleteItem)
    deleteItem.addEventListener('click',function(){
        div.remove(div)
    })
}

function checkedItens(li){
    li.addEventListener('click',function(){
        if(li.style.textDecoration == 'line-through'){
            li.style.textDecoration = 'none'
        } else{
            li.style.textDecoration = 'line-through'
        }
    })
}