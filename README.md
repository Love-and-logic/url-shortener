Hello All!

# Custom URL Shortener

A Berkeley City College final project for Erik Holtz and Sarah Van Wart's MMART 162 class.
The final project is a full stack application of a URL shortener similar to that of bit.ly and goo.gl.

## Getting Started

The client directory contain the structure of the shortener webpage within the index.html and the css. The client-side javascript is shorten.js, which hooks up the button and displays the resulting short URL to the user. It also formats the data received from the user and funnels it into the server.

The server folder contains the app.js, which is the mechanics of the URL shortener. This file creates the database connection and initializes middleware that processes the request and response objects in between routes. It also makes available all the node modules used in the project, including mongo, mongoose, and express.

The models folder creates a format for the data to be saved as entries in the mongoose database and names the structure to be accessed in the routes folder. The routes grabs the short and long URLs from the client side, creates a new short URL if none is given, and sends back the status (success or failure) of the request to the console.

The user-entered URLs are stored in a mongoose database with two columns, one for the long URL and one for short. They also each have automatically generated ids. The entries are accessed via the short URL.

Package-lock describes the npm tree so the same node node modules used in this project can be installed on other systems identically.
Package.json gives information to npm that allows it to identify the project and handle the project's dependencies.

Gitignore tells us which files and directories don't need to be uploaded when we commit the project to github.

File structure:

client                                                                                  
.....index.html                                                                        
...../assets                                                                                             
........../js
...............shorten.js                                                                                                             
........../css   
...............main.css                                                                                                              
server    
...../models                                                                                           
..........index.js                                                                                         
...../routes                                                                                           
..........index.js                                                                             
.....app.js
.....package-lock.JSON                                                                                                                                                                     
.....package.JSON                                                                                                                                                                          
.gitignore                                                                                                                                                                                 
README.md

For QA testing, run locally on a NoSQL database server.

### Prerequisites

Documentation for the following programs are available on their respective websites
* Install [MongoDB](https://www.mongodb.com/)
* Install [NodeJS] (https://nodejs.org/en/)


### Installing

Clone this repository and run package.json in the proper directory

```
npm install
```
Run MongoDB
```
mongod
```
```
mongo
```
On the server directory, run app.js
```
node app.js
```

Demo viewable thru
|++ index.html

## Deployment

Currently in process to deploy via Heroku

## Built With

* [MongoDB](https://www.mongodb.com/)
* [NodeJS](https://nodejs.org/en/)  
* [ExpressJS](http://expressjs.com/) - minimalist web framework  

## Contributing



## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Ehidhin Borbon** [Github](https://github.com/eabg)
* **Ej Cruz** [Github](https://github.com/love-and-logic)
* **Morgan Rain** [Github](https://github.com/rainbyrd)

See also the list of [contributors](https://github.com/Love-and-logic/urlshorty/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Erik Holtz & Sarah Van Wart - unwavering support in code and encouragement
* Our team!🖖
* References: Coligo URL shortener and Azat's EdX course
