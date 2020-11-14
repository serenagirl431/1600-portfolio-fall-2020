import { people } from '../data/people.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const mainContent = document.querySelector('#main')

populateDOM(people)

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const maleButton = document.createElement('button')
maleButton.textContent = 'Guys'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Gals'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Non-Binary Pals'
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')

const otherCharacters = people.filter((thing) => {
    if (
        thing.gender === 'n/a' ||
        thing.gender === 'none' ||
        thing.gender === 'hermaphrodite'
    ) { return thing
    }
    
} )



maleButton.addEventListener('click', () => populateDOM(maleCharacters))

femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

otherButton.addEventListener('click', () => populateDOM(otherCharacters))



function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach((element) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = true)
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name

        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)

        mainContent.appendChild(charFigure)

    })
}

//let theUrl = "https://swapi.co/api/people/2/"
//let theUrl2 = "https://swapi.co/api/people/12/"




 // return url.slice(end - 1, end)
  //getLastNumber(theUrl)