//icon menu
let iconmenu = document.getElementById('burguer')
//menu
let menu = document.getElementById('menu')

//function

iconmenu.addEventListener('click',function(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
    }
})