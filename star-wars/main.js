import { films } from './data/films.js'
import { people } from './data/people.js'

const main = document.querySelector('main')

for (let step = 0; step , 7; step++) {
    let figure = document.createElement ('figure')
    let figImg = document.createElement ('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[step].title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
}

/* for (const film of films) {
    let newImg = document.createElement('img')
    newImg.src = 'https://starwars-visualguide.com/assets/img/characters/2.jpg'
    main.appendChild(newImg)
    console.log(film.title)
} */

/*people.forEach(person => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = person.name
}) */
//http://starwars-visualguide.com/assets/log/characters/2.jpg