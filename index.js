
const message = document.querySelector(`#message`)

const addMovie = (event) => {

let inputField = document.querySelector('input')

const movie = document.createElement(`li`)

const movieTitle = document.createElement(`span`)

  event.preventDefault()

  let formElement = document.querySelector('ul')

  // stores input field as value saved to movietitle
  movieTitle.textContent = inputField.value
  
  movieTitle.addEventListener(`click`, crossOffMovie)

  // appends movieTitle to Movie object
  movie.appendChild(movieTitle)

  const deleteBtn = document.createElement('button')

  deleteBtn.textContent = 'X';
  
  deleteBtn.addEventListener('click', deleteMovie)

  movie.appendChild(deleteBtn)

  // appends movie obj to ul
  formElement.appendChild(movie)

  inputField.value = ''
  
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `Movie deleted!`
}


const selectForm = document.querySelector('form')

selectForm.addEventListener('submit', event => {

  addMovie(event)

})


const crossOffMovie = event => {
    event.target.classList.toggle(`checked`)
    if (event.target.classList.contains(`checked`)){
        message.textContent = `Movie Watched`
    } else {
        message.textContent = `Movie added back`
    }
}