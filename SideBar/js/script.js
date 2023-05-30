const menu_icon = document.getElementById('burguer')
const menu = document.getElementById('menu')

/* menu event */

menu_icon.addEventListener('click',function(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
})