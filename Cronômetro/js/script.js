/* numeros */
const milis = document.getElementById('milliseconds')
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hour = document.getElementById('horas')
/* buttons */
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const resume = document.getElementById('resume')
const reset = document.getElementById('reset')

/* criando variável dos números */

let mili = 0
let s = 0
let m = 0
let h = 0
let isplay = true

play.addEventListener('click',function(){
        let time = setInterval(function(){
            if(isplay){
                mili += 1
                milis.innerHTML = mili
                if(mili === 100){
                    s += 1
                    mili = 0
                }

                if(s == 60){
                    s = 0
                    m += 1
                }

                if(m == 60){
                    m = 0
                    h += 1
                }
                /* adicionando o 0 na frente */
                //segundos

                seconds.innerHTML = s < 10 ? '0' + s : s
                //minutos

                minutes.innerHTML = m < 10 ? '0' + m : m
                
                //horas

                hour.innerHTML = h < 10 ? '0' + h : h
            }    
        },10)

    play.style.display = 'none'
    pause.style.display = 'block'

    /* evento do pause */

    pause.addEventListener('click',pauseTime)

    /* evento do resume */

    resume.addEventListener('click',resumeTime)

    /* evento do reset para resetar cronômetro*/

    reset.addEventListener('click',function(){
        clearInterval(time)
        play.style.display = 'block'
        pause.style.display = 'none'
        resume.style.display = 'none'
        mili = 0
        milis.innerHTML = '00'
        s = 0
        seconds.innerHTML = '00'
        m = 0
        minutes.innerHTML = '00'
        h = 0
        hour.innerHTML = '00'
        isplay = true
    })
})
/* função para pausar o cronômetro */
function pauseTime(){
    isplay = false
    resume.style.display = 'block'
    pause.style.display = 'none'
}
/* Função para retornar o cornômetro */
function resumeTime(){
    isplay = true
    resume.style.display = 'none'
    pause.style.display = 'block'
}