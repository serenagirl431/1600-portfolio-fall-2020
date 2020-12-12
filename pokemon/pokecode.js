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

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=34`).then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                populatePokeCard(pokeData)
            })
        }
   })
}

const pokemonGrid = document.querySelector('.pokemonGrid')
const theGoodGodButton = document.querySelector('.theGoodGodButton')
const theBadGodButton = document.querySelector('.theBadGodButton')

theGoodGodButton.addEventListener('click', () => {
loadPage()
})
theBadGodButton.addEventListener('click', () => {
    removeChildren(pokemonGrid)
})

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
    console.log(pokemon.abilities)
    let cardBack = document.createElement('div')
    cardBack.className = `card__face card__face--back`
    let backLabel = document.createElement('h3')
    backLabel.textContent = `Abilities:`
    let abilityList = document.createElement('h4')
    pokemon.abilities.forEach(ability => {
        let abilityName = document.createElement('h4')
        abilityName.textContent = ability.ability.name
        abilityList.appendChild(abilityName)
    })
    
    let movesLabel = document.createElement('h3')
    movesLabel.textContent = 'Best Move:'
    let moveAccuracy = document.createElement('h3')
    moveAccuracy = document.createElement('h4')
    const mostAccurateMove = getBestAccuracy(pokemon.moves)
    moveAccuracy.textContent =`${mostAccurateMove.move.name}`
    cardBack.appendChild(backLabel)
    cardBack.appendChild(abilityList)
    cardBack.appendChild(movesLabel)
    cardBack.appendChild(moveAccuracy)
    return cardBack
}
function getBestAccuracy(pokemoves) {
    return pokemoves.reduce((mostAccurate, move) => {
      return mostAccurate.accuracy > move.accuracy ? mostAccurate : move;  
    }, {});

}
function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 99) {
        return `0${pokemon.id}`
    }
}