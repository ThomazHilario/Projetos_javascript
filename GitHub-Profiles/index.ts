// input text
const input = document.getElementById('users') as HTMLInputElement

// tag Body
let body = document.querySelector('body') as HTMLElement

// Tag card
let card = document.getElementById('card') as HTMLElement

// url api
const url:string = 'https://api.github.com/users/'

//window Event
window.addEventListener('keydown',function(e){
    if(e.key == 'Enter' && input.value !== ''){

        // Cancelando o envio do formulário
        e.preventDefault()

        // Chamano a function getResponse, passando o valor do input
        getResponse(input.value)

    }
})

//  Request for api
async function getResponse(nameProfile:string) {
    try{
        let response = await fetch(`${url}${nameProfile}`)
        let data = await response.json()

        // Chamando function createCard()
        createCard(data)
    }catch(e){
        console.log(e)
    }
}


function createCard(dados:unknown){

    // Armazenando os dados em uma variável
    let user = dados as any
    
    // Condição caso tenha a mensagem
    if(user.message !== 'Not Found'){

        // Estrutura do card
        let cardbody:string = `
        <img src="${user.avatar_url}" class="rounded-full border-8 border-purple-700 w-40">
        <p id="nameUsers">${user.name}</p>
        <div class="flex justify-around gap-5 pl-1">
                <p>${user.followers} Followers</p>
                <p>${user.following} Following</p>
                <p>${user.public_repos} Repositories</p>
        </div>
        <p class="text-justify p-5">${user.bio}</p>`

        // jogando o cardBody dentro do card
        card.innerHTML = cardbody

        // mudando o display do card para flex
        card.style.display = 'flex'
    }else{
        
        // Estrutura do card de erro
        let cardbody:string = `<p>Usuario não existe!</p>`

        // Adicionando a estrutura ao card
        card.innerHTML = cardbody

        // Mudando o display do card para flex
        card.style.display = 'flex'
    }

}
