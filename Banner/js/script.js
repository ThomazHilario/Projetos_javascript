const bannerImg = document.getElementById('banner')

function slide1(){
    bannerImg.src = "imagens/uma-pintura-de-uma-montanha-com-uma-flor-rosa-em-primeiro-plano.jpg"
    setTimeout('slide2()',7000)
}

function slide2(){
    bannerImg.src = "imagens/imagens-de-parque-de-arte-de-desenho-animado-estilo-jardim-japones-imagem-gerada-por-ia_210643-1008.jpg"
    setTimeout('slide3()',7000)
}
function slide3(){
    bannerImg.src = "imagens/uma-paisagem-com-um-lago-e-nuvens-e-um-por-do-sol.jpg"
    setTimeout('slide1()',7000)
}

slide1()