// Variable to hold returned data
var plantSearched;
var results;



// When user hits the search-btn
$("#search").on("click", function(event) {
    event.preventDefault();
    $("searchDIV").toggle();

    // Save the plant they typed into the earch input
    var plantSearched = $("#commonName").val().trim();
    plantSearched = plantSearched;
    console.log("search.js 14 plantSearched = " + plantSearched);

    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/" + plantSearched, function(data) {
        console.log("search.js 19" + data);
        $.post("/api/" + plantSearched, data);
        // render function to send search results data to the page
        renderPlants(data);
        toggleSearch();
    });
});


//The element will not take up any space when the display property set to "none".
function toggleSearch() {
    var x = document.getElementById('searchDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function toggleResults() {
    var x = document.getElementById('resultsDIV');
    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

// When user hits the author-search-btn
// $("#author-search-btn").on("click", function() {

//   // Save the authorthey typed into the author-search input
//   var authorSearched = $("#author-search").val().trim();

//   // Make an AJAX get request to our api, including the user's author in the url
//   $.get("/api/author/" + authorSearched, function(data) {

//     // Log the data to the console
//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });
// });

// When user hits the genre-search-btn
// $("#genre-search-btn").on("click", function() {

//   // Save the book they typed into the genre-search input
//   var genreSearched = $("#genre-search").val().trim();

//   // Make an AJAX get request to our api, including the user's genre in the url
//   $.get("/api/genre/" + genreSearched, function(data) {

//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });

// });

function renderPlants(data) {
    if (data.length !== 0) {
      $("#results").empty();
      $("#results").show();
      $.post("/api/plantSearched", data);
      console.log("search.js 89 " + data)

      for (var i = 0; i < data.length; i++) {
        var div = $("<div>");
          div.append("<p> " + data[i].common_name + "</p>");
          div.append("<p> " + data[i].cultivar + "</p>");
          div.append("<p> " + data[i].botanical_name + "</p>");
          div.append("<p> " + data[i].ripening_season + "</p>");
          div.append("<p> " + data[i].chill_min + "</p>");
          div.append("<p> " + data[i].chill_max + "</p>");
          div.append("<p> " + data[i].cold_hardiness + "</p>");
          div.append("<p> " + data[i].fruit + "</p>");
          div.append("<p> " + data[i].water_needs + "</p>");
          div.append("<p> " + data[i].sun + "</p>");
          div.append("<p> " + data[i].soil_type + "</p>");
          div.append("<p> " + data[i].ph_low + "</p>");
          div.append("<p> " + data[i].ph_high + "</p>");
          div.append("<p> " + data[i].fertilizer + "</p>");
          div.append("<p> " + data[i].originating_region + "</p>");
          div.append("<p> " + data[i].description + "</p>");
          div.append("<p> " + data[i].parentage + "</p>");

          $("#results").append(div);
        }

        $(".delete").click(function() {

            var info = {
                id: $(this).attr("data-id")
            };

            $.post("/api/delete", info)
                // On success, run the following code
                .done(function(deldata) {
                  // Log the data we found
                  console.log(deldata);
                  console.log("Deleted Successfully!");
                });

            $(this).closest("div").remove();

        });

    }
    toggleResults();
}
