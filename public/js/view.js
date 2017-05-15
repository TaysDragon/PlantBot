// When user hits the search-btn
$("#search").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var plantSearched = $("#commonName").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + plantSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderPlants(data);

  });

});

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

    $("#stats").empty();
    $("#stats").show();

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

      $("#stats").append(div);

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
}
