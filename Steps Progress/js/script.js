/* steps */
const steps = document.querySelectorAll('.steps')

/* buttons */
const previous = document.getElementById('prev')
const next = document.getElementById('next')

/* Progress count */
let progressCount = 0

next.addEventListener('click',function(){
    /* incrementamos o pogressCount*/

    progressCount += 1

    /* progress count receber total de steps,caso seja maior que os steps */

    if(progressCount > steps.length){
        progressCount = steps.length
    }

    /* função para avançar a etapa */
    nextsteps()
})

function nextsteps(){
    steps.forEach((element,idx) => {
        if(progressCount > idx){
            element.style.transition = '0.7s'
            element.style.background = 'blueviolet'
        }
        /* Removendo o disabled do previous */
        if(progressCount > 0){
            previous.removeAttribute('disabled','disabled')
        }
        /* Adicionando o disabled no next */
        if(progressCount > 2){
           next.setAttribute('disabled','disabled')
        }
    })
}

previous.addEventListener('click',function(){
    /* Decrementando o progress count */
    progressCount -= 1

    /* Condição caso o progress count seja menor que 0 */

    if(progressCount < 0){
        progressCount = 0
    }

    previousSteps()
})

function previousSteps(){
    steps.forEach((element,idx) => {
        if(idx == progressCount){
            element.style.background = 'white'
        }
        /* Adicionando o disabled no previous */
        if(progressCount == 0){
            previous.setAttribute('disabled','disabled') 
        }
        /* Removendo o disabled no next */
        if(progressCount < steps.length){
            next.removeAttribute('disabled','disabled')
        }
    })
}