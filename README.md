# task-one

## Prerequisites

1) Yarn / NPM 
2) nodejs

## Description
 * This is the first task for the Nodejs REST API creation for movies
 * There are two APIs mainly for getting the movie details and creating a new movie
 * THere is also an authentication mechanism and only if a user is logged in then they are able to access the movie data
 * We have not configured any new database like SQL/Mongo as that would require a very sophisticated configuration so for the scope of the task we have only used in memory data that mimics like database and remember that it will get reset if the server is refreshed.

## Dev Environment setup

 * Clone the repository
 * Go to project directory terminal 
```
cd task-one
```
 * Install the dependencies:
```
yarn OR npm install
```

 * Start the server in dev mode
```
yarn dev OR npm run dev
```

## Utilising the REST APIs
 * Start the dev environment as explained above. Ther server would be running on localhost:3000
 * Now to access the APIs, we need to login else it will show unauthenticated. For logging in, hit via postman: 
  `[POST] localhost:3000/login` with the following body:
```
{
    "email": "lim@gmail.com",
    "password": "q1w2e3r4"
}
```
 * After hitting the valid post request from above for login, the authentication cookies/headers would be set automatically. We dont need to set the token manually somewhere
 * To access the movies list, we can hit a get request with following details:
  `[GET] localhost:3000/movies?id=2&cast=akshay&title=kesari`
  Note that query params `id`, `cast` and `title` are optional and if one dont provide them all the movies will be returned
 * To create a movie, we need to have a POST request as explained below:
  `[POST] localhost:3000/movie` with the following body somthing like:
```
{
    "title": "Bareilly Ki Barfi",
    "cast": [ "Ayshmann Khurana", "Kriti Sanon"],
    "description": "Explain what movie is about",
    "imdbRating": 9
}
```
 * If the user want to logout, they can simply have a get request as: 
 `[GET] localhost:3000/logout`
 This will ensure that the authentication and cookies are cleaned from the headers and the user remains no longer authenticated.



