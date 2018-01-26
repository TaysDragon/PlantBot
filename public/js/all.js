var fields = [
    { field: 'common_name', label: 'Common name' },
    { field: 'cultivar', label: 'Cultivar' },
    { field: 'botanical_name', label: 'Botanical name' },
    { field: 'ripening_season', label: 'Ripening season' },
    { field: 'chill_min', label: 'Chill min' },
    { field: 'chill_max', label: 'Chill max' },
    { field: 'cold_hardiness', label: 'Cold Hardiness' },
    { field: 'fruit', label: 'Fruit' },
    { field: 'water_needs', label: 'Water needs' },
    { field: 'sun', label: 'Sun' },
    { field: 'soil_type', label: 'Soil type' },
    { field: 'ph_low', label: 'PH low' },
    { field: 'ph_high', label: 'PH high' },
    { field: 'fertilizer', label: 'Fertilizer' },
    { field: 'originating_region', label: 'Originating region' },
    { field: 'description', label: 'Description' },
    { field: 'parentage', label: 'Parentage' }
]

// Make a get request to our api route that will return every plant
$.get("/api/all", function(data) {
    // For each plant that our server sends us back
    for (var i = 0; i < data.length; i++) {
        // Create a parent div to hold plant data
        var plantSection = $("<div>");

        $("#allPlants").append(plantSection);

        for (var j = 0; j < fields.length; j++) {
                var field = fields[j].field;
                var label = fields[j].label;
                var value = data[i][field];

                if (value) {
                    plantSection.append("<p><h2>" + label + ":  </h2> " + value + "</p>");
                }

            }
            plantSection.append("<hr>");
    }
});
