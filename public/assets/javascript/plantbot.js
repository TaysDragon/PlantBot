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
                    plantDiv.append(botanicalName);

                    // Putting the entire movie above the previous movies
                    $("#plant-view").prepend(plantDiv);                
        }
    }
        });

        // Function for displaying plant data


        // Adding click event listeners to all elements with a class of "plant"
        $(document).on("click", ".plant", displayPlantInfo);

        // Calling the renderButtons function to display the intial buttons
        renderButtons();