# Kaffa - Pre-qualification test (v1.5)

Developed by Rennan Ribas.

## Tech Stack

The following tools were used in the construction of the project:

### Website (React 16 the one with Hooks)
- React Router Dom
- React Icons
- Axios
- Bootstrap

### [Server NodeJs](https://github.com/rennanrr/api-kaffa-qualification-test)
- Express
- Sequelize
- PostgreSQL
- Nodemon
- Dotenv
- Axios


## Demo
### This project is uploaded on Heroku
[Preview online here!!](https://app-kaffa-test.herokuapp.com/)

And

[Preview Rest API server](https://api-kaffa-test.herokuapp.com/)
(try get /todo)


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
1) Validate CNPJ format (Mask)
Given a string, check if it looks like a CNPJ, considering two formats: Formatted:
"00.000.000/0000-00"
Number only:
"00000000000000"


The first exercise use a simple conditional if and regex to verify if the mask ("00.000.000/0000-00" or "00000000000000") is correct.

### Seccond
2) Validate CNPJ digits
Given a string validate if it’s a well-formed CNPJ, considering the “check digits” as defined by Receita Federal.
Important: Don’t use a library. You should write the validation code.


The seccond exercise use a simple logic provided by Receita Federal, and coded by me. I had a logical support too on this classical [Macoratti Example](http://www.macoratti.net/11/09/c_val1.htm).

### Third
3) Test if two rectangles intersect
Considering two rectangles in a discrete grid (like pixels in a display), each defined by two points, return true if they intersect, false otherwise.
Note: the points are included in the rectangle and have a dimension of 1 unit; the rectangle (0, 0; 1, 1) have an area of 4 units.
A=(3,5;11,11) 
B=(7,2;13,7) 
C=(11,11;15,13) 
intersects(A,B)=>true 
intersects(A,C)=>true 
intersects(B,C)=>false


The Third exercise has the core on function intersects(), that basicaly take the 2 rectangles axes X and Y, sort and compare if the extreme points of retangles match, kowing in this way, if intersect or not.

Note that: In this exercise, the algorithm is enable to compare not only 2 asked intersect rectangle in the exercise, but many rectangles the user input on the list.

### Fourth
4) Compute area of intersection between two rectangles
Considering two rectangles in a discrete grid (like pixels in a display), each defined by two points, compute the area of intersection between the two.
Note: the points are included in the rectangle and have a dimension of 1 unit; the rectangle (0, 0; 1, 1) have an area of 4 units.
A=(3,5;11,11) B=(7,2;13,7) C=(11,11;15,13)
areaOfIntersection(A,B)=15 
areaOfIntersection(A,C)=1


The Fourth exercise is based on function areaOfIntersection(), that basicaly gets the rectangles sorted by axes X and Y, and with a sum and multiplication, gets the area.

Note that: in this exercise, the algorith can calculate the intersection area of many rectangles user want.

### Fifth
5) Simple Todo List
Todo list application that permits the creation and deletion of tasks (texts).
The application must persist the tasks between executions;
Use any storage you want: database, files, PaaS backends (Firebase, etc.);


The Fifth exercise has a half in the [backend](https://github.com/rennanrr/api-kaffa-qualification-test), that is a CRUD with NodeJS, Express, ORM Sequelize and PostgreSQL. 
With design pattern Route->Controler->Repositorie(DAO)->Model->Database.

And another half of this exercise is in the screen [Todo List](https://app-kaffa-test.herokuapp.com/#/todolist), that has a table with one input to delete and one input and one button to add item.

Note that: You can edit the items too, and in the same time, will save changes in the server.

### Sixth
6) Rest Client - World Clock
Application that queries a server and displays the current date/time hour in local and UTC timezones. 


The Sixth exercise uses a web [REST API](https://worldtimeapi.org/api/) to get information DateTime in UTC and LOCAL.
This exercise is in the screen [World Clock](https://app-kaffa-test.herokuapp.com/#/worldclock), where update time each 1 minute.

### Seventh
7) Rest Server - World Clock
REST server returning a JSON like: { "currentDateTime":"2019­08­12T14:40Z" }

The Seventh exercise is on the [backend](https://github.com/rennanrr/api-kaffa-qualification-test) project and you can test in [this link](https://api-kaffa-test.herokuapp.com/api/v1/date/localserver) that get the local server DateTime on UTC format, or you can use [this path](https://api-kaffa-test.herokuapp.com/api/v1/date/externalapi) to get the datetime that queries the same [REST API](https://worldtimeapi.org/api/) of exercise sixth, but, in this time, give back with a json by backend.

Local server time: /api/v1/date/localserver
and
UTC time: /api/v1/date/externalapi

### Eighth
8) Entity Relationship Diagram - Simple Order Manager
Design the model of a simple Order Manager System. The system consists of:
Clients Products Orders
You can draw, describe, or list the tables as SQL. Extras:
SQL: list ORDERS with number of items
Which indexes should be created in this model?


The Eighth exercise is a database made and tested in MySql database. The SQL query is [here](https://github.com/rennanrr/app-kaffa-qualification-test/blob/master/src/Assets/OMS-KAFFA.sql) and in the screen [Entity Relationship Diagram](https://app-kaffa-test.herokuapp.com/#/entitydiagram).
Is a simple database, has some insert examples in the SQL and the solution to list ORDERS with number of items using inner join is on the page screen and on the SQL Query.

To test, you have to run [MySql Server](https://dev.mysql.com/downloads/mysql/) on your computer and just paste [this](https://github.com/rennanrr/app-kaffa-qualification-test/blob/master/src/Assets/OMS-KAFFA.sql) SQL Query.


## License
[MIT](https://choosealicense.com/licenses/mit/)
