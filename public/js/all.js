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
        $("#book-well-" + i).append("<h2>" + data[i].id + "</h2>");
        // $("#book-well-" + i).append("<h2>" + data[i].keys + "</h2>");
        $("#book-well-" + i).append("<p><h2>Common name: </h2>" + data[i].common_name + "</p>");
        $("#book-well-" + i).append("<p><h2>Cultivar:  </h2>" + data[i].cultivar + "</p>");
        $("#book-well-" + i).append("<p><h2>Botanical name:  </h2>" + data[i].botanical_name + "</p>");
        $("#book-well-" + i).append("<p><h2>Ripening season:  </h2>" + data[i].ripening_season + "</p>");
        $("#book-well-" + i).append("<p><h2>Chill min:  </h2>" + data[i].chill_min + "</p>");
        $("#book-well-" + i).append("<p><h2>Chill max:  </h2>" + data[i].chill_max + "</p>");
        $("#book-well-" + i).append("<p><h2>Cold Hardiness:  </h2>" + data[i].cold_hardiness + "</p>");
        $("#book-well-" + i).append("<p><h2>Fruit:  </h2>" + data[i].fruit + "</p>");
        $("#book-well-" + i).append("<p><h2>Water needs:  </h2>" + data[i].water_needs + "</p>");
        $("#book-well-" + i).append("<p><h2>Sun:  </h2>" + data[i].sun + "</p>");
        $("#book-well-" + i).append("<p><h2>Soil type:  </h2>" + data[i].soil_type + "</p>");
        $("#book-well-" + i).append("<p><h2>PH low:  </h2>" + data[i].ph_low + "</p>");
        $("#book-well-" + i).append("<p><h2>PH high:  </h2>" + data[i].ph_high + "</p>");
        $("#book-well-" + i).append("<p><h2>Fertilizer:  </h2>" + data[i].fertilizer + "</p>");
        $("#book-well-" + i).append("<p><h2>Originating region:  </h2>" + data[i].originating_region + "</p>");
        $("#book-well-" + i).append("<p><h2>Description:  </h2>" + data[i].description + "</p>");
        $("#book-well-" + i).append("<p><h2>Parentage:  </h2>" + data[i].parentage + "</p><hr>");
    }
});
