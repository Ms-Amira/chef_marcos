const express = require("express"); // Import express
const app = express(); //Instantiate a new instance of express


const menu = [
 {
   id: 1,
   dish: "Baked Shrimp Scampi",
   price: 20
 },
 {
   id: 2,
   dish: "Chicken Parmigiana",
   price: 14
 },
 {
   id: 3,
   dish: "Margherita Pizza",
   price: 17
 },
 {
   id: 4,
   dish: "Penne with Vodka Sauce",
   price: 18
 }
]

//Create a new endpoint on the root route
app.get("/", function (request, response) {

// Send back to the client "Hello world"
response.send("Welcome to Chef Marco's Italian Bistro!").end();
});

app.get('/menu', function (request, response) {

const { price } = request.query;

if(!price) {
  return response.json(menu);
}

   const filteredPrices = menu.filter(item => item.price <= price);
   response.json(filteredPrices);
});

app.get('/menu/1', function (request, response) {
const item1 = request.params.item1;

response.send(menu[0])
});

app.get('/menu/2', function (request, response) {
const item2 = request.params.item2;

response.send(menu[1])
});

app.get('/menu/3', function (request, response) {
const item3 = request.params.item3;

response.send(menu[2])
});

app.get('/menu/4', function (request, response) {
const item4 = request.params.item4;

response.send(menu[3])
});


app.get("/reservations", function (request, response) {

response.status(501).json({
  'error': "Route exists but isn't implemented yet!"
});
});



//Tell the express app that you want it to listen on port 8080 of your computer
app.listen(8080, function () {

    //This function gets executed when the app starts listening
    console.log("Server is listening on 8080");
});