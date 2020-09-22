# Kaffa - Pre-qualification test (v1.5)

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Developed by Rennan Ribas.

## Tech Stack

The following tools were used in the construction of the project:

### Website (React 16 the one with Hooks)
- React Router Dom
- React Icons
- Axios
- Bootstrap

### Server (NodeJs)
- Express
- Sequelize
- PostgreSQL
- Nodemon
- Dotenv
- Axios


## Demo
### This project is uploaded on Heroku
[This frontend project](https://app-kaffa-test.herokuapp.com/)

And

[Rest API server](https://api-kaffa-test.herokuapp.com/)


## Installation

Pre-requisits:
- Node.js

If you do not have, follow the instructions on [this link](https://nodejs.org/en/download/).

Then, clone this repository

```bash
git clone https://github.com/rennanrr/api-kaffa-qualification-test.git

```
You have to compile and install node modules of this project into your machine:
```
npm install 
```
Finally, to run in your machine:
```
npm start
```

## Exercises

### First
The first exercise use a simple conditional if and regex to verify if the mask ("00.000.000/0000-00" or "00000000000000") is correct.

### Seccond
The seccond exercise use a simple logic provided by Receita Federal, and coded by me. I had a logical support too on this classical [Macoratti Example](http://www.macoratti.net/11/09/c_val1.htm).

### Third
The Third exercise has the core on function intersects(), that basicaly take the 2 rectangles axes X and Y, sort and compare if the extreme points of retangles match, kowing in this way, if intersect or not.

Note that: In this exercise, the algorithm is enable to compare not only 2 asked intersect rectangle in the exercise, but many rectangles the user input on the list.

### Fourth
The Fourth exercise is based on function areaOfIntersection(), that basicaly gets the rectangles sorted by axes X and Y, and with a sum and multiplication, gets the area.

Note that: in this exercise, the algorith can calculate the intersection area of many rectangles user want.

### Fifth
The Fifth exercise has a half in the [backend](https://github.com/rennanrr/api-kaffa-qualification-test), that is a CRUD with NodeJS, Express, ORM Sequelize and PostgreSQL. 
With design pattern Route->Controler->Repositorie(DAO)->Model->Database.

And another half of this exercise is in the screen [Todo List](https://app-kaffa-test.herokuapp.com/#/todolist), that has a table with one input to delete and one input and one button to add item.

Note that: You can edit the items too, and in the same time, will save changes in the server.

### Sixth
The Sixth exercise uses a web [REST API](https://worldtimeapi.org/api/) to get information DateTime in UTC and LOCAL.
This exercise is in the screen [World Clock](https://app-kaffa-test.herokuapp.com/#/worldclock), where update time each 1 minute.

### Seventh
The Seventh exercise is on the [backend](https://github.com/rennanrr/api-kaffa-qualification-test) project and you can test in [this link](https://api-kaffa-test.herokuapp.com/api/v1/date/localserver) that get the local server DateTime on UTC format, or you can use [this path](https://api-kaffa-test.herokuapp.com/api/v1/date/externalapi) to get the datetime that queries the same [REST API](https://worldtimeapi.org/api/) of exercise sixth, but, in this time, give back with a json by backend.

Local server time: /api/v1/date/localserver
and
UTC time: /api/v1/date/externalapi

### Eighth
The Eighth exercise is a database made and tested in MySql database. The SQL query is [here](https://github.com/rennanrr/app-kaffa-qualification-test/blob/master/src/Assets/OMS-KAFFA.sql) and in the screen [Entity Relationship Diagram](https://app-kaffa-test.herokuapp.com/#/entitydiagram).
Is a simple database, has some insert examples in the SQL and the solution to list ORDERS with number of items using inner join is on the page screen and on the SQL Query.

To test, you have to run [MySql Server](https://dev.mysql.com/downloads/mysql/) on your computer and just paste [this](https://github.com/rennanrr/app-kaffa-qualification-test/blob/master/src/Assets/OMS-KAFFA.sql) SQL Query.


## License
[MIT](https://choosealicense.com/licenses/mit/)