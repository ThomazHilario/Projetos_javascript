/* Formulário */
const form = document.querySelector('form')
/* inputs */
const inputName = document.getElementById('inome')
const inputEmail = document.getElementById('iemail')
const inputPassword = document.getElementById('isenha')
/* Modal */
const modal = document.getElementById('modal')
const alertaText = document.getElementById('alertaModal')
const exitModalButton = document.getElementById('clickModal')

/* formulário validação */

form.addEventListener('submit',function(event){
    /* Cancelar envio do formulário */
    event.preventDefault()

    /* Validações dos campos */
    validPassword(inputPassword)
    validEmail(inputEmail)
    validName(inputName)
    validCamp(inputName,inputEmail,inputPassword)
    /* enviando formulário */
    if(inputName.value != '' && inputEmail.value != '' && inputEmail.value.includes('.com') && inputPassword.value != '' && inputPassword.value.length > 7){
        form.submit()
    }
})

/* funções das validações do formulário */
function validCamp(inputname,inputemail,inputpassword){
    if(inputname.value == '' && inputemail.value == '' && inputpassword.value == ''){
        alertaText.textContent = 'Preencha os campos abaixo'
        modal.style.display = 'block'
    }
}

function validName(inputnome){
    if(inputnome.value == ''){
        alertaText.textContent = 'Nome inválido'
        modal.style.display = 'block'
    }
}

function validEmail(inputemail){
    if(inputemail.value == ''){
        alertaText.textContent = 'Email Inválido'
        modal.style.display = 'block'
    }else if(!inputemail.value.includes('.com')){
        alertaText.textContent = 'Email cadastrado não encontrado'
        modal.style.display = 'block'
    }
}

function validPassword(inputPassword){
    if(inputPassword.value == ''){
        alertaText.textContent = 'Senha inválida'
        modal.style.display = 'block'
    }else if(inputPassword.value.length < 8){
        alertaText.textContent = 'Sua senha deve conter 8 dígitos'
        modal.style.display = 'block'
    }
}

/* evento para sair do modal */

exitModalButton.addEventListener('click',function(){
    modal.style.display = 'none'
})