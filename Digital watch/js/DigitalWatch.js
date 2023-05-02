/* relogio */
let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

setInterval(function(){
    let dateatual = new Date()
    let h = dateatual.getHours()
    let m = dateatual.getMinutes()
    let s = dateatual.getSeconds()

    if(h < 10){
        h = '0' + h
    }
    if(m < 10){
        m = '0' + m
    }
    if(s < 10){
        s = '0' + s
    }

    horas.innerHTML = h
    minutos.innerHTML = m
    segundos.innerHTML = s
},1000)