/* inputs do form */
const inputTexto = document.getElementById('itexto')
const button = document.getElementById('seach')

/* informações a serem mostradas */
const imgdiv = document.getElementById('img')
const imgPoke = document.getElementById('imgPokemon')
const namePoke = document.getElementById('namePokemon')
const tipodiv = document.getElementById('tipo_info')
const typePoke = document.getElementById('typePokemon')
const pesoPoke = document.getElementById('pesoPoke')
const alturaPoke = document.getElementById('alturaPoke')
const corpoPoke = document.getElementById('corpo')

/* url */
const url = 'https://pokeapi.co/api/v2/pokemon/'

/* requisições com axios */

function getInfoPokemon(pokemon){
    return axios.get(`${url}${pokemon}`)
    .then(response => response.data)
    .catch(erro => console.log(erro))
}

/* função imagem do pokemon */

async function getImgPoke(pokemon){
    const api_info = await getInfoPokemon(pokemon)
    img.style.display = 'block'
    imgPoke.src = api_info.sprites.front_default
}

/* função nome do pokemon */

async function getNamePokemon(pokemon){
    const api_info = await getInfoPokemon(pokemon)
    const name = api_info.name
    namePoke.innerHTML = name[0].toUpperCase() + name.substring(1)
}

/* função pegando peso e altura do pokemon */

async function getWightAndHeight(pokemon){
    const api_info = await getInfoPokemon(pokemon)
    corpoPoke.style.display = 'flex'
    pesoPoke.innerHTML = `${(api_info.weight / 10).toFixed(1)} kg`
    alturaPoke.innerHTML = `${(api_info.height / 10).toFixed(1)} m`
}

/* função pegando o tipo do pokemon */

async function getType(pokemon){
    const api_info = await getInfoPokemon(pokemon)
    tipodiv.style.display = 'flex'
    typePoke.innerHTML = api_info.types.map(result => result.type.name[0].toUpperCase() + result.type.name.substring(1)).join('/')
}

/* button event */
button.addEventListener('click',function(){
    if(inputTexto.value != ''){
        getImgPoke(inputTexto.value)
        getNamePokemon(inputTexto.value)
        getWightAndHeight(inputTexto.value)
        getType(inputTexto.value)
    }
})