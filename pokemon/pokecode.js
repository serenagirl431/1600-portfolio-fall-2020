//resuable async function to fetch data from the provided url
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
    getAPIData(`https://pokeapi.co/api/v2/pokemon`).then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                console.log(pokeData)
                populatePokeCard(pokeData)
            })
        }
   })
}

const pokemonGrid = document.querySelector('.pokemonGrid')

function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let cardFront = document.createElement('div')
    let frontLabel = document.createElement('p')
    let cardBack = document.createElement('div')
    let backLabel = document.createElement('p')

    frontLabel.textContent = pokemon.name
    cardFront.appendChild(frontLabel)
    pokemonGrid.appendChild(cardFront)

}
loadPage()