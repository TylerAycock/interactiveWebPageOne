const inputField = document.querySelector(`input`)
const list = document.querySelector(`ul`)
const theForm = document.querySelector(`form`)
const message = document.querySelector(`#message`)

const addMovie = (event) => {
    event.preventDefault()
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value 
    movieTitle.addEventListener(`click`, crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement(`button`)
    deleteBtn.textContent =`X`
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    list.appendChild(movie)
    inputField.value = ` `
}

theForm.addEventListener(`submit`, addMovie)

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.nextElementSibling} deleted`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle(`checked`)
    if (event.target.classList.contains(`checked`)){
        message.textContent = `${event.target.textContent} watched`
    } else{
        message.textContent = `${event.target.textContent} unwatched`
    }
    revealMessage()
}

const revealMessage = ()=>{
    message.classList.remove(`hide`)
    setTimeout(()=>{
        message.classList.add(`hide`)
    }, 2000)
}