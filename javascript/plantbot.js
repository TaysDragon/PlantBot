console.log("You are connected to plantbot.js");

// var axios = require('axios');

// $(document).ready(function() {

// Initial array of musicians
        var musicians = ["Mango", "Banana", "Avocado", "Sapodilla"];


        // displayMovieInfo function re-renders the HTML to display the appropriate content
        function displayMusicianInfo() {

            var plant = $(this).attr("data-name");
            var queryURL = "https://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=" + plant;

            // Creates AJAX call for the specific musician button being clicked
            axios.get({url: queryURL}).then(function(response){


                // Log the queryURL
                console.log(queryURL);

                // Log the resulting object
                console.log(response.results);
                // storing the data from the AJAX request in the results variable
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    // Creating a div to hold musician
                    var musicianDiv = $("<div class='gify'>");

                    

                    // Retrieving the URL for the image
                    var imgURL = response.Poster;

                    // Creating an element to hold the image
                    var image = $("<img>");

                    image.attr("src", results[i].images.fixed_height_still.url).attr("data-still", results[i].images.fixed_height_still.url).attr("data-animate", results[i].images.fixed_height.url).attr("data-state", "still").addClass("gif");

                    // Appending the image
                    musicianDiv.append(image);

                    // Storing the rating data and Creating an element to have the rating displayed
                    var rating = $("<p>").text("Rating: " + results[i].rating);

                    // Displaying the rating
                    musicianDiv.append(rating);

                    // Putting the entire movie above the previous movies
                    $("#musician-view").prepend(musicianDiv);
                }

                        //Pause and play giph

        $(".gif").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });
            });
        };

        // Function for displaying musician data
        function renderButtons() {

            // Deletes the musicians prior to adding new musicians
            // (this is necessary otherwise you will have repeat buttons)
            $("#buttons-view").empty();

            // Loops through the array of musicians
            for (var i = 0; i < musicians.length; i++) {

                // Then dynamicaly generates buttons for each musician in the array
                // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
                var a = $("<button>");
                // Adds a class of musician to our button
                a.addClass("musician");
                // Added a data-attribute
                a.attr("data-name", musicians[i]);
                // Provided the initial button text
                a.text(musicians[i]);
                // Added the button to the buttons-view div
                $("#buttons-view").append(a);
            }
        }

        // This function handles events where the add musician button is clicked
        $("#add-musician").on("click", function(event) {
            event.preventDefault();
            // This line of code will grab the input from the textbox
            var musicianNew = $("#musicianAdd").val().trim();

            // The musician from the textbox is then added to our array
            musicians.push(musicianNew);

            // Calling renderButtons which handles the processing of our musician array
            renderButtons();

        });

        // Adding click event listeners to all elements with a class of "musician"
        $(document).on("click", ".musician", displayMusicianInfo);

        // Calling the renderButtons function to display the intial buttons
        renderButtons();


