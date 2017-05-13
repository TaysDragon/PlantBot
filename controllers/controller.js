// This file uses Sequelize to manage data manipulation
// for all apropos http requests.

//Dependencies
var express = require("express");

var router = express.Router();

var exphbs = require("express-handlebars"); 

// Import the model (plants.js) to use its database functions.
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/PlantBot");
});

// get route, edited to match sequelize
router.get("/PlantBot/All", function(req, res) {
  // replace old function with sequelize function
  db.fruit_trees.findAll({
    // Here we specify we want to return our plants in order by ascending common_name
    order: [
      ["common_name", "ASC"]
    ]
  })
  // use promise method to pass the plants...
  .then(function(dbPlant) {
    // into the main index, updating the page
    var hbsObject = {
      plant: dbPlant
    };
    console.log(hbsObject);
    return res.render("index", hbsObject);
  });
});

// post route to create plants
router.post("/PlantBot/add", function(req, res) {
  // edited plant create to add in a common_name
  db.Plant.create({
    common_name: req.body.common_name
  })
  // pass the result of our call
  .then(function(dbPlant) {
    // log the result to our terminal/bash window
    console.log(dbPlant);
    // redirect
    res.redirect("/");
  });
});

// put route to devour a burger
router.put("/PlantBot/update", function(req, res) {
  // If we are given a customer, create the customer and give them this devoured burger
  if (req.body.fruit_trees) {
    db.Plant.create({
      common_name: req.body.common_name,
      cultivar: req.body.cultivar
    })
    .then(function(dbPlant) {
      res.redirect("/");
    });
  }

});

module.exports = router;