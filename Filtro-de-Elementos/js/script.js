const text = document.getElementById('itext')
/* cards */
const cards = document.querySelectorAll('.cards')
/* função do input */

function filterElement(){
    cards.forEach(element => {
        let titulo = element.firstElementChild
        titulo = titulo.textContent.toLowerCase()
        let input_value = text.value.toLowerCase()
        if(!titulo.includes(input_value)){
            element.style.display = 'none'
        }else{
            element.style.display = 'block'
        }
    })
}

/* adicionando evento ao input */
text.addEventListener('input',filterElement)