/* inputs e o form */
const form = document.querySelector('form')
const cidade_input = document.getElementById('icidade')
const seach = document.getElementById('seach')

/* informações */
const bandeira = document.getElementById('bandeira')
const cidade = document.getElementById('cidade')
const temp = document.getElementById('temperatura')
const weather_layout = document.getElementById('weather')
const weather_descrition = document.getElementById('descrição')
const weatherIcon = document.getElementById('weatherIcon')

// Cancelando o envio do formulário
form.addEventListener('submit',function(e){
    e.preventDefault()
})
// button event 
seach.addEventListener('click',function(){
    // Função para pegar a bandeira do pais
    getFlag(cidade_input.value)

    // função para pegar o nome da cidade
    getNameCity(cidade_input.value)

    // Função para pegar a temperatura da cidade
    getTemperatureCity(cidade_input.value)
    
    // Função para pegar o a previsão do tempo da cidade
    getWeatherIcon(cidade_input.value)
})

// window Event
window.addEventListener('keydown',function(e){
    if(e.key == 'Enter'){
        // Função para pegar a bandeira do pais
        getFlag(cidade_input.value)

        // função para pegar o nome da cidade
        getNameCity(cidade_input.value)

        // Função para pegar a temperatura da cidade
        getTemperatureCity(cidade_input.value)
        
        // Função para pegar o a previsão do tempo da cidade
        getWeatherIcon(cidade_input.value)
    }
})
/* api */

function infoApi(city){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=89b2d3b26f0d56eefdbe3bff82b60332&lang=pt_br`)
        .then(Response => Response.json())
        .catch(erro => console.log(erro))
}

async function getFlag(city){

    const apiInfo = await infoApi(city)

    /* bandeira do pais */
    try{
            bandeira.style.display = 'block'
            bandeira.src = `https://flagsapi.com/${apiInfo.sys.country}/flat/64.png`
    }catch(e){
        console.log(e)
    }

}

async function getNameCity(city){
    try{
        const apiInfo = await infoApi(city)

        /* nome da cidade */
        cidade.textContent = `Cidade: ${apiInfo.name}`
    }catch(e){
        console.log(e)
    }
}

async function getTemperatureCity(city){
    try{
        const apiInfo = await infoApi(city)

        /* Temperatura da cidade */
        const temperatura = Math.floor(apiInfo.main.temp)
        temp.innerHTML = `${temperatura}°`
    }catch(e){
        console.log(e)
    }
}

async function getWeatherIcon(city){
    try{
        const apiInfo = await infoApi(city)

        /* weather icon e description */
        weather_layout.style.display = 'flex'
        weather_descrition.innerHTML = apiInfo.weather[0].description
        weatherIcon.src = `https://openweathermap.org/img/wn/${apiInfo.weather[0].icon}.png`
    }catch(e){
        console.log(e)
    }
}

getFlag('fortaleza')
getNameCity('fortaleza')
getTemperatureCity('fortaleza')
getWeatherIcon('fortaleza')