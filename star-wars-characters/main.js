import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')
 
const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore (mainHeader, mainContent)

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
console.log(maleCharacters)

maleButton.addEventListener('click', event => {
maleCharacters.forEach((element) => {
   const charFigure = document.createElement('figure')
   const charImg = document.createElement('img')
   charImg.src = `https://starwars-visualguide.com/assets/img/characters/1.jpg`
   const charCaption = document.createElement('figcaption')
   charCaption.textContent = `Yummy, Yummy`

   charFigure.appendChild(charImg)
   charFigure.appendChild(charCaption)

   mainContent.appendChild(charFigure)
} )
} )

let theUrl = "https://swapi.co/api/people/2/"

function getLastNumber(url) {
    console.log(url)
}
getLastNumber(theUrl)