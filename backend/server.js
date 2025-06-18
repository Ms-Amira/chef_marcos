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

const { maxPrice } = request.query;
const maxPrices = menu.filter(item => item.price <= maxPrice);

if(maxPrices.length === 0) {
  return response.json(menu);
}

response.json(maxPrices)
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


app.use("/reservations", function (request, response) {

response.json({
  "name": "Person's name",
  "date": "10/22/2025",
  "time": "2pm"
}
);

});



//Tell the express app that you want it to listen on port 8080 of your computer
app.listen(8080, function () {

    //This function gets executed when the app starts listening
    console.log("Server is listening on 8080");
});