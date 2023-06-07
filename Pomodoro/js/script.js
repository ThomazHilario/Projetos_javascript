/* tempo */
const minuteSpan = document.getElementById('min')
const secondSpan = document.getElementById('sec')
/* button click */
const startButton = document.getElementById('click')
const pauseButton = document.getElementById('pauseClick')
const resumeButton = document.getElementById('resumeClick')

/* variáveis do pomodoro */

let seconds = 0
let minutes = 25

/* Variável responsavel por recomeçar o tempo de 25 minutos */
let pomoCount = 0
/* variável responsável por contar a rotação de descanso e volta do pomodoro */
let pomoStop = 0

/* Varriável para verificar se o pomodoro está startado */

let isStart = true
startButton.addEventListener('click',function(){
     
    let pomodoroTimer = setInterval(function(){
        if(isStart){
            // A cada segundo a variável seconds recebe -1

        seconds -= 1

        /* Condição ao acabar o descanso voltar o tempo de 25 minutos */

        if(minutes == 0 && seconds == 0 && pomoCount == 1){
            pomoCount -= 1
            pomoStop += 1
            minutes = 25
        }

        /* Condição ao tempo do pomodoro acabar,setar 5 min de descanso */

        if(minutes == 0 && seconds == 0){
            pomoCount += 1
            minutes = 5
        }

        /* Condição quando o segundos chegar abaixo de 0, o minutes recebe -1 e seconds recebe 59 */

        if(seconds < 0){
            minutes -= 1
            seconds = 59
        }

        /* Condição quando o pomoStop for igual a 4 parar o pomodoro */

        if(pomoStop == 4){
            clearInterval(pomodoroTimer)
            minuteSpan.innerHTML = '25'
            secondSpan.innerHTML = '00'
            pomoStop = 0
        }

        /* mostrando os valores nos span com a dom */

        minuteSpan.innerHTML = minutes < 10 ? '0' + minutes : minutes
        secondSpan.innerHTML = seconds < 10 ? '0' + seconds : seconds
        }

    },1000)

    startButton.style.display = 'none'
    pauseButton.style.display = 'block'


    /* event Pause Button */
    pauseButton.addEventListener('click',isPause)

    /* event resume button */

    resumeButton.addEventListener('click',isResume)
})


function isPause(){
    isStart = false
    pauseButton.style.display = 'none'
    resumeButton.style.display = 'block'
}

function isResume(){
    isStart = true
    resumeButton.style.display = 'none'
    pauseButton.style.display = 'block'
}