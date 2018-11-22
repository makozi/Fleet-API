# Fleet-API


An API to keep track of Fleet of a transport company 


[![Maintainability](https://api.codeclimate.com/v1/badges/fe404902c713e110830d/maintainability)](https://codeclimate.com/github/makozi/Fleet-API/maintainability)


## Getting Started
Instructions to get the project running successfully.

## Prerequisites
You need to have these installed before cloning the project
* NodeJS (At least v8.11.2) - https://nodejs.org/en/download/



## Technologies Used
- [Eslint](https://eslint.org/)
- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Code-Climate](https://codeclimate.com/)
- [Babel](https://babeljs.io/)


## Installation

```bash
git clone https://github.com/makozi/Fleet-API.git
```

```bash
cd Fleet-API
```

```bash
npm install
```

```bash
npm start
```

## Test

Testing is used at key checkpoints in the overall process to determine whether objectives are being met. It also speed up software development process

## Test Tool
- [Mocha](https://mochajs.org/)



## Test Tool
- [Mocha](https://mochajs.org/)


##### Server side tests

```bash
npm run test
```


<h3>END POINTS</h3>
<hr>
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/fleets</td>
      <td>Create a new fleet</td>
  </tr>

  <tr>
      <td>GET</td>
      <td>/api/v1/fleets</td>
      <td>Get all fleets</td>
  </tr>
  <tr>
        <td>GET</td>
        <td>/api/v1/fleets/:id</td>
        <td>Get a fleet by fleetid</td>
  </tr>
   <tr>
      <td>PUT</td>
      <td>/api/v1/fleets/:id</td>
      <td>Update a fleet by fleetid</td>
  </tr>
 
  <tr>
        <td>DELETE</td>
        <td>/api/v1/fleets/:id</td>
        <td>Delete fleet by fleetid</td>
  </tr>

   
  
  

</table>
<br>

##### Testing Endpoints in POSTMAN

## Create A Fleet

![screencast](src/assets/images/create.PNG)

## Get All Fleets

![screencast](src/assets/images/get-all.PNG)

## Get A  Fleet
![screencast](src/assets/images/get.PNG)

## Update A  Fleet

![screencast](src/assets/images/update.PNG)


## Author
[Marizu-Ibewiro Makozi](https://makozi.netlify.com)

