class Movie {
    constructor(title, studio, rating = "PG"/*default value for the rating*/) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    } // constructor for the class Movie representing title,studio and rating as string as its argument
getPG(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    }

} 
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG­13");// movies with instance of class Movie
const movie2=new Movie("Spider-Man: No Way Home","Sony Pictures","PG13");
const movie3=new Movie("Judas and the Black Messiah","Warner Bros","R");
const movie4 = new Movie("A Quiet Place Part II", "Paramount Pictures");
const movieInstance = new Movie()
const movies = [movie1, movie2, movie3, movie4];
const pgMovies = movieInstance.getPG(movies);
console.log(pgMovies);