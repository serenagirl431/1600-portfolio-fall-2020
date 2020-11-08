import { people } from '../data/people.js'
 
const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.appendChild(mainHeader)

const maleButton = document.createElement('button')
maleButton.textContent = 'Guys'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Gals'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Non-Binary Pals'
mainHeader.appendChild(otherButton)