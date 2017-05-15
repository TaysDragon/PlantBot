
// Make a get request to our api route that will return every book
$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var plantSection = $("<div>");
    // Add a class to this div: 'well'
    plantSection.addClass("well");
    // Add an id to the well to mark which well it is
    plantSection.attr("id", "book-well-" + i);
    // Append the well to the well section
    $("#allPlants").append(plantSection);

    // Now  we add our book data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#book-well-" + i).append("<p>Author: " + data[i].common_name + "</p>");
      $("#book-well-" + i).append("<p>Cultivar: " + data[i].cultivar + "</p>");
      $("#book-well-" + i).append("<p>Botanical name: " + data[i].botanical_name + "</p>");
      $("#book-well-" + i).append("<p>Ripening season: " + data[i].ripening_season + "</p>");
      $("#book-well-" + i).append("<p>Chill min: " + data[i].chill_min + "</p>");
      $("#book-well-" + i).append("<p>Chill max: " + data[i].chill_max + "</p>");
      $("#book-well-" + i).append("<p>Cold Hardiness: " + data[i].cold_hardiness + "</p>");
      $("#book-well-" + i).append("<p>Fruit: " + data[i].fruit + "</p>");
      $("#book-well-" + i).append("<p>Water needs: " + data[i].water_needs + "</p>");
      $("#book-well-" + i).append("<p>Sun: " + data[i].sun + "</p>");
      $("#book-well-" + i).append("<p>Soil type: " + data[i].soil_type + "</p>");
      $("#book-well-" + i).append("<p>PH low: " + data[i].ph_low + "</p>");
      $("#book-well-" + i).append("<p>PH high: " + data[i].ph_high + "</p>");
      $("#book-well-" + i).append("<p>Fertilizer: " + data[i].fertilizer + "</p>");
      $("#book-well-" + i).append("<p>Originating region: " + data[i].originating_region + "</p>");
      $("#book-well-" + i).append("<p>Description: " + data[i].description + "</p>");
      $("#book-well-" + i).append("<p>Parentage: " + data[i].parentage + "</p>");
  }
});
