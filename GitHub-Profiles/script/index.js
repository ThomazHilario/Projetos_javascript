"use strict";
// input text
const input = document.getElementById('users');
// tag Body
let body = document.querySelector('body');
// Tag card
let card = document.getElementById('card');
// url api
const url = 'https://api.github.com/users/';
//window Event
window.addEventListener('keydown', function (e) {
    if (e.key == 'Enter' && input.value !== '') {
        // Cancelando o envio do formulário
        e.preventDefault();
        // Chamano a function getResponse, passando o valor do input
        getResponse(input.value);
    }
});
//  Request for api
async function getResponse(nameProfile) {
    try {
        let response = await fetch(`${url}${nameProfile}`);
        let data = await response.json();
        // Chamando function createCard()
        createCard(data);
    }
    catch (e) {
        console.log(e);
    }
}
function createCard(dados) {
    // Armazenando os dados em uma variável
    let user = dados;
    // Estrutura do card
    let cardbody = `
    <img src="${user.avatar_url}" class="rounded-full border-2 border-black w-40">
    <p id="nameUsers">${user.name}</p>
    <div class="flex justify-around gap-5 p-1">
            <span>${user.followers} Followers</span>
            <span>${user.following} Following</span>
            <span>${user.public_repos} Repositories</span>
    </div>
    <p class="text-justify p-5">${user.bio}</p>`;
    // jogando o cardBody dentro do card
    card.innerHTML = cardbody;
    // mudando o display do card para flex
    card.style.display = 'flex';
}
