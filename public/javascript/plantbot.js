console.log("You are connected to plantbot.js");

var axios = require('axios');

$(document).ready(function() {


        // displayMovieInfo function re-renders the HTML to display the appropriate content
        function displayPlantInfo() {

            var plant = $(this).attr("data-name");
            var queryURL = "https://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=" + "mango";

            // Creates axios call for the specific plant button being clicked
axios.get({url: queryURL})
  .then(function(response){
       console.log(response.data);
  });

                // Log the queryURL
                console.log(queryURL);

                // Log the resulting object
                console.log(response.results[0]);
                // storing the data from the AJAX request in the results variable
                var results = response.results;

                for (var i = 0; i < results.length; i++) {

                    // Creating a div to hold plant
                    var plantDiv = $("<div class='gify'>");                    

                    // Retrieving the URL for the image
                    var imgURL = response.imageurl;

                    // Creating an element to hold the image
                    var image = $("<img>");

                    image.attr("src", results[i].imageurl).addClass("gif");

                    // Appending the image
                    plantDiv.append(image);



                    // Storing the botanicalName data and Creating an element to have the botanicalName displayed
                    var botanicalName = $("<p>").text("Botanical Name: " + results[i].botname);

                    // Displaying the botanicalName
                    botanical.append(botanicalName);


                      // Storing the commonName data and Creating an element to have the commonName displayed
                    var commonName = $("<p>").text("Common Name: " + results[i].tfvname);

                    // Displaying the botanicalName
                    common.append(commonName);



                    // add database call for cultivar name
                    //store and display cultivar
                    var cultivarEntered

               module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      fruit_trees.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      Character.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });



// when user hits the search-btn
$("#searchBtn").on("click", function() {

  // save the character they typed into the character-search input
  var searchedCharacter = $("#characterSearch").val().trim();

  // replace any spaces between that character with no space
  // (effectively deleting the spaces). Make the string lowercase
  searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/" + searchedCharacter, function(data) {
    // log the data to our console
    console.log(data);
    // if the data is false (i.e. not there), then return an error message
    if (data === false) {
      $("#name").text("The force is not strong with this one. Your character was not found. ");
      // don't show the stats section, since there are no stats to show
      $("#stats").hide();
    }
    // otherwise
    else {
      // show the stats section
      $("#stats").show();
      // put the character name in the name tag,
      $("#name").text(data.name);
      // the role in the role tag,
      $("#role").text(data.role);
      // the age in the age tag,
      $("#age").text(data.age);
      // and the force points in the force-points tag
      $("#forcePoints").text(data.forcePoints);
    }
  });
});









                    var commonName = $("<p>").text("Common Name: " + results[i].tfvname);

                    // Displaying the botanicalName
                    common.append(commonName);
        }
    }
        });

        // Function for displaying plant data


        // Adding click event listeners to all elements with a class of "plant"
        $(document).on("click", ".plant", displayPlantInfo);

        // Calling the renderButtons function to display the intial buttons
        renderButtons();