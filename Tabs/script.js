//buttons
let his = document.getElementById('his')
let goal = document.getElementById('gol')
let notice = document.getElementById('notices')

//textos
let phistory = document.getElementById('History')
let pgoal = document.getElementById('goal')
let pnotice = document.getElementById('notice')

//Function

his.addEventListener('click', function(){
    //histori
    his.style.background = 'white'
    his.style.transition = '0.7s'
    his.style.color = 'rgb(33, 146, 203)'
    //outros
    notice.style.background = 'rgba(119, 119, 119, 0.452)'
    goal.style.background = 'rgba(119, 119, 119, 0.452)'
    notice.style.color = 'black'
    goal.style.color = 'black'
    phistory.style.display = 'block'
    pgoal.style.display = 'none'
    pnotice.style.display = 'none'
})
goal.addEventListener('click', function(){
    his.style.background = 'rgba(119, 119, 119, 0.452)'
    notice.style.background = 'rgba(119, 119, 119, 0.452)'
    goal.style.background = 'white'
    goal.style.transition = '0.7s'
    goal.style.color = 'rgb(33, 146, 203)'
    notice.style.color = 'black'
    his.style.color = 'black'
    pgoal.style.display = 'block'
    phistory.style.display = 'none'
    pnotice.style.display = 'none'
})
notice.addEventListener('click', function(){
    notice.style.background = 'white'
    notice.style.color = 'rgb(33, 146, 203)'
    goal.style.color = 'black'
    his.style.color = 'black'
    notice.style.transition = '0.7s'
    his.style.background = 'rgba(119, 119, 119, 0.452)'
    goal.style.background = 'rgba(119, 119, 119, 0.452)'
    phistory.style.display = 'none'
    pgoal.style.display = 'none'
    pnotice.style.display = 'block'
})