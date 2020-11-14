import { starships } from '../data/starships.js'

const shipView = document.querySelector('.main')
const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')

function populateNav(starships) {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let shipName = event.target.textContent
            const foundShip = starships.find(ship => ship.name === shipName)
            populateShipView(foundShip)
        })
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}
function populateShipView(shipData) {
    console.log(shipData)
}

populateNav(starships)