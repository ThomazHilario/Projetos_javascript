/* inputs */
const cidade_input = document.getElementById('icidade')
const seach = document.getElementById('seach')

/* informações */
const bandeira = document.getElementById('bandeira')
const cidade = document.getElementById('cidade')
const temp = document.getElementById('temperatura')
const weather_layout = document.getElementById('weather')
const weather_descrition = document.getElementById('descrição')
const weatherIcon = document.getElementById('weatherIcon')

/* button event */

seach.addEventListener('click',function(){
    infor(cidade_input.value)
})

/* api */

function Api(city){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=89b2d3b26f0d56eefdbe3bff82b60332&lang=pt_br`)
        .then(Response => Response.json())
        .catch(erro => console.log(erro))
}

async function infor(city){

    const api = await Api(city)

    /* nome do pais */
    bandeira.style.display = 'block'
    bandeira.src = `https://flagsapi.com/${api.sys.country}/flat/64.png`

    /* nome da cidade */

    cidade.textContent = `Cidade: ${api.name}`
    
    /* temperatura */

    const temperatura = Math.floor(api.main.temp)
    temp.textContent = `${temperatura}°`

    /* weather icon e description */
    weather_layout.style.display = 'flex'
    weather_descrition.textContent = api.weather[0].description
    weatherIcon.src = `https://openweathermap.org/img/wn/${api.weather[0].icon}.png`
}