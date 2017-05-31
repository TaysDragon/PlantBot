// Initial array of plants
var plants = ["Tropicals", "Wildflowers", "mango", "banana"];


// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayplantInfo() {

    var plant = $(this).attr("data-name");
    var queryURL = "http://tropicalfruitandveg.com/api/tfvjsonapi.php?search=" + plant;
    // Log the queryURL
    console.log(queryURL)

    function logResults(json) { console.log(json); }

    $.ajax({
        url: queryURL,
        dataType: "jsonp",
        jsonpCallback: "logResults"
    })
}


;


// Creates AJAX call for the specific plant button being clicked
//     $.ajax({
//         url: queryURL,
//         dataType: 'jsonp',
//         method: "GET",
//         success: function(response) {                
//             // Log the resulting object
//             console.log(response)       }
//     })
// };




// storing the data from the AJAX request in the results variable
// var results = response.results;

// for (var i = 0; i < results.length; i++) {

// Creating a div to hold plant
//     var plantDiv = $("<div class='gify'>");



//     // Retrieving the URL for the image
//     var imgURL = response.imageurl;

//     // Creating an element to hold the image
//     var image = $("<img>");

//     image.attr("src", results[i].imageurl).addClass("gif");

//     // Appending the image
//     plantDiv.append(image);

//     // Storing the BotanicalName data and Creating an element to have the BotanicalName displayed
//     var BotanicalName = $("<p>").text("Botanical name: " + results[i].botname);

//     // Displaying the BotanicalName
//     plantDiv.append(BotanicalName);

//     // Putting the new plant above the previous plants
//     $("#plant-view").prepend(plantDiv);
// }

//Pause and play giph

// $(".gif").on("click", function() {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//     } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//     }
// });
// };
// };

// Function for displaying plant data
function renderButtons() {

    // Deletes the plants prior to adding new plants
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Loops through the array of plants
    for (var i = 0; i < plants.length; i++) {

        // Then dynamicaly generates buttons for each plant in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adds a class of plant to our button
        a.addClass("plant");
        // Added a data-attribute
        a.attr("data-name", plants[i]);
        // Provided the initial button text
        a.text(plants[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where the add plant button is clicked
$("#add-plant").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var plantNew = $("#plantAdd").val().trim();

    // The plant from the textbox is then added to our array
    plants.push(plantNew);

    // Calling renderButtons which handles the processing of our plant array
    renderButtons();

});

// Adding click event listeners to all elements with a class of "plant"
$(document).on("click", ".plant", displayplantInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
