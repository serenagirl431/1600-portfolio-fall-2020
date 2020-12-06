//resuable async function to fetch data from the provided url
import { removeChildren } from '../utils/index.js'

async function getAPIData(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error){
        console.error(error)
    }
}

// use the getAPIData
function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=30`).then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                populatePokeCard(pokeData)
            })
        }
   })
}

const pokemonGrid = document.querySelector('.pokemonGrid')
const makeNewButton = document.querySelector('button')
const theGoodGodButton = document.querySelector('.theGoodGodButton')
const theBadGodButton = document.querySelector('.theBadGodButton')

theGoodGodButton.addEventListener('click', () => {
loadPage()
theGoodGodButton.disabled = true
})
theBadGodButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/750`)
    console.log(pokemon.name)
})
   // removeChildren(pokeScene)
    //theBadGodButton.disabled = true
   // })
    
    
/*makeNewButton.addEventListener('click', () => {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/750`)
    console.log(pokemon.name)
})*/

function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    
   
    
    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)

}
function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = `card__face card__face--front`
    let frontLabel = document.createElement('p')
    let frontImage = document.createElement('img')
    frontLabel.textContent = pokemon.name
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    cardFront.appendChild(frontImage)
    cardFront.appendChild(frontLabel)
    return cardFront
}

function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = `card__face card__face--back`
    let backLabel = document.createElement('p')
    backLabel.textContent = `I'm the back of the card`
    cardBack.appendChild(backLabel)
    return cardBack
}
function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 99) {
        return `0${pokemon.id}`
    }
}