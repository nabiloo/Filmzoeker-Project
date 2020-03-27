const movieDatabase = movies['Movies']

const addMoviesToDom = (films) => {
    const cardContainer = document.getElementById("card-container")
    const arr = films.map(function (movie) {
        console.log(movie.imdbID)
        const movieWebpage = "https://www.imdb.com/title/" + movie.imdbID
        return "<li class='list-item'><a href=" + movieWebpage + "><img src=" + movie.Poster + " alt=''></a></li>"
    })

    arr.forEach(function (movie) {
        cardContainer.innerHTML += movie
    })
}

addMoviesToDom(movieDatabase)


const addEventListeners = () => {
    const buttons = document.querySelectorAll("input[name='movie']")
    buttons.forEach(function (button) {
        button.addEventListener('change', function (e) {
            handleOnChangeEvent(e.target.value)
        })
    })
}

addEventListeners()

const handleOnChangeEvent = (movieName) => {
    switch (movieName) {
        case 'newMovies':
            filterLatestMovies()
            break;
        case 'avenger':
            filterMovies("Avenger")
            break;
        case 'xmen':
            filterMovies("X-Men")
            break;
        case 'princess':
            filterMovies("Princess")
            break;
        case 'batman':
            filterMovies("Batman")
            break;
        default:
            console.log('Er is iets fout gegaan!')
    }
}


const filterMovies = (nameMovie) => {
    const result = movieDatabase.filter(function (movie) {
        return movie.Title.includes(nameMovie)
    })
    removeLi();
    addMoviesToDom(result)
}

const filterLatestMovies = () => {
    const resultFilteredMovies = movieDatabase.filter(function (movie) {
        return parseInt(movie.Year) >= 2014
    })
    removeLi();
    addMoviesToDom(resultFilteredMovies)
}

const removeLi = () => {
    const liItems = document.querySelectorAll(".list-item")
    liItems.forEach(item => item.remove())
}

