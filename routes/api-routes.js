// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // Get all plants
    app.get("/api/all", function(req, res) {
        db.fruit.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    // Get plants of a specific search criteria
    app.get("/api/:search?", function(req, res) {
        db.fruit.findAll({
            where: {
                $or: [
                    { common_name: req.params.search },
                    { cultivar: req.params.search },
                    { botanical_name: req.params.search }
                ]
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    // Add a plant
    app.post("/api/add", function(req, res) {
        console.log("Plant Data:");
        console.log(req.body);
        db.fruit.create(req.body).then(function(results) {
            res.json(results);
        });
    });

    // Delete a plant
    app.delete("/api/search/:id", function(req, res) {
        db.fruit.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

};
