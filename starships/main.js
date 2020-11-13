import { starships } from '../data/starships.js'

const shipView = document.querySelector('.main')
const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')

function populateNav(starships) {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            console.log(event)
        })
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}

populateNav(starships)