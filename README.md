Hello All!

# Custom URL Shortener

A Berkeley City College final project for Erik Holtz and Sarah Van Wart's MMART 162 class.
The final project is a full stack application of a URL shortener similar to that of bit.ly and goo.gl.

## Getting Started

The client directory has the index.html and an assets folder with the css and javascript.
The server folder contains the app.js which is the mechanics of the url shortener.

The user-entered URLs are stored in: index.js

File structure:

client                                                                                     
.....index.html                                                                        
...../assets                                                                                             
........../js                                                                                                             
........../css                                                                                                                 
server                                                                                           
...../routes                                                                                           
..........index.js                                                                             
.....app.js

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
