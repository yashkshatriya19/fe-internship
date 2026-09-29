export function showLoading(loadingElement) {

    loadingElement.style.display = "block";

}


export function hideLoading(loadingElement) {

    loadingElement.style.display = "none";

}


export function showError(
    errorElement,
    message
) {

    errorElement.textContent = message;

}


export function clearError(errorElement) {

    errorElement.textContent = "";

}


export function showNoResults(element) {

    element.style.display = "block";

}


export function hideNoResults(element) {

    element.style.display = "none";

}


export function displayMovies(
    movies,
    moviesContainer
) {

    moviesContainer.innerHTML = "";


    movies.forEach(movie => {

        const card =
            document.createElement("article");

        card.classList.add("movie-card");


        const image =
            document.createElement("img");

        image.src = movie.Poster;
        image.alt = movie.Title;


        const info =
            document.createElement("div");

        info.classList.add("movie-info");


        const title =
            document.createElement("h2");

        title.textContent =
            movie.Title;


        const year =
            document.createElement("p");

        year.textContent =
            `Year: ${movie.Year}`;


        const type =
            document.createElement("p");

        type.textContent =
            `Type: ${movie.Type}`;


        info.append(
            title,
            year,
            type
        );


        card.append(
            image,
            info
        );


        moviesContainer.append(card);

    });

}