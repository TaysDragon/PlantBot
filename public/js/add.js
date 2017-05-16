// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newPlant = {
    common_name: $("#commonName").val().trim(),
    cultivar: $("#cultivar").val().trim(),
    botanical_name: $("#botanicalName").val().trim(),
    ripening_season: $("#ripe").val().trim()
    chill_min: $("#chillMin").val().trim(),
    chill_max: $("#chillMax").val().trim(),
    cold_hardiness: $("#cold").val().trim(),
    fruit: $("#fruit").val().trim(),
    water_needs: $("#water").val().trim(),
    sun: $("#sun").val().trim(),
    soil_type: $("#soil").val().trim(),
    ph_low: $("#phLow").val().trim(),
    ph_high: $("#phHigh").val().trim(),
    fertilizer: $("#fertilizer").val().trim(),
    originating_region: $("#origin").val().trim(),
    description: $("#description").val().trim(),
    parentage: $("#parentage").val().trim()

  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newPlant)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
 

});
