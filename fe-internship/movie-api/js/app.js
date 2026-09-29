import {
    searchMovies
} from "./api.js";


import {
    showLoading,
    hideLoading,
    showError,
    clearError,
    showNoResults,
    hideNoResults,
    displayMovies
} from "./ui.js";



const searchForm =
    document.querySelector("#search-form");


const searchInput =
    document.querySelector("#search-input");


const moviesContainer =
    document.querySelector("#movies");


const loading =
    document.querySelector("#loading");


const errorMessage =
    document.querySelector("#error-message");


const noResults =
    document.querySelector("#no-results");



searchForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const movieName =
            searchInput.value.trim();


        if (movieName === "") {

            showError(
                errorMessage,
                "Please enter a movie name."
            );

            return;
        }


        clearError(errorMessage);

        hideNoResults(noResults);

        moviesContainer.innerHTML = "";


        showLoading(loading);


        try {

            const movies =
                await searchMovies(movieName);


            if (
                !movies ||
                movies.length === 0
            ) {

                showNoResults(noResults);

                return;
            }


            displayMovies(
                movies,
                moviesContainer
            );


        } catch (error) {

            console.log(error);

            showError(
                errorMessage,
                error.message
            );


        } finally {

            hideLoading(loading);

        }

    }
);