
// Make a get request to our api route that will return every plant in the database
$.get("/api/results", function(data) {
  // For each plant that our server sends back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold data
    var plantSection = $("<div>");
    // Add a class to this div: 'results'
    plantSection.addClass("results");
    // Add an id to the results to mark which plant it is
    plantSection.attr("id", "plant-results" + i);
    // Append the well to the well section
    $("#allPlants").append(plantSection);

    // Now  we add our data to the div we just placed on the page
    $("#plant-results" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#plant-results" + i).append("<p>Author: " + data[i].common_name + "</p>");
      $("#plant-results" + i).append("<p>Cultivar: " + data[i].cultivar + "</p>");
      $("#plant-results" + i).append("<p>Botanical name: " + data[i].botanical_name + "</p>");
      $("#plant-results" + i).append("<p>Ripening season: " + data[i].ripening_season + "</p>");
      $("#plant-results" + i).append("<p>Chill min: " + data[i].chill_min + "</p>");
      $("#plant-results" + i).append("<p>Chill max: " + data[i].chill_max + "</p>");
      $("#plant-results" + i).append("<p>Cold Hardiness: " + data[i].cold_hardiness + "</p>");
      $("#plant-results" + i).append("<p>Fruit: " + data[i].fruit + "</p>");
      $("#plant-results" + i).append("<p>Water needs: " + data[i].water_needs + "</p>");
      $("#plant-results" + i).append("<p>Sun: " + data[i].sun + "</p>");
      $("#plant-results" + i).append("<p>Soil type: " + data[i].soil_type + "</p>");
      $("#plant-results" + i).append("<p>PH low: " + data[i].ph_low + "</p>");
      $("#plant-results" + i).append("<p>PH high: " + data[i].ph_high + "</p>");
      $("#plant-results" + i).append("<p>Fertilizer: " + data[i].fertilizer + "</p>");
      $("#plant-results" + i).append("<p>Originating region: " + data[i].originating_region + "</p>");
      $("#plant-results" + i).append("<p>Description: " + data[i].description + "</p>");
      $("#plant-results" + i).append("<p>Parentage: " + data[i].parentage + "</p>");
  }
});
