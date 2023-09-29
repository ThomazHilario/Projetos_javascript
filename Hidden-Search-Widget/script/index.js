"use strict";
// Capturando a tag input
const input = document.getElementById('texto');
// Capturando a tag button
const button = document.getElementById('click');
// Adicionando evento ao button
button.addEventListener('click', function () {
    // Condição para display
    if (input.style.display == 'none') {
        // input receber uma largura
        input.style.width = '300px';
        // Input recebe um display block
        input.style.display = 'block';
        // Input recebe uma animação
        input.style.animationName = 'animation';
    }
    else {
        // Input recebe 0px
        input.style.width = '0px';
        // Input recebe uma animção
        input.style.animationName = 'animationminus';
        // Input recebe none depois de um tempo
        setTimeout(function () {
            input.style.display = 'none';
        }, 600);
    }
});
