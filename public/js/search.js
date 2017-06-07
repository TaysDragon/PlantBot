// Variable to hold returned data
var plantSearched;
var results;
var common_name;
var botanical_name;
var cultivar;
var water_needs;
var sun;
var soil_type;

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

$(document).ready(function() {
    //The results section starts hidden and will toggle to show
    $("#resultsDIV").hide();
    // When user hits the search-btn
    $("#search").on("click", function(event) {
        event.preventDefault();


        // Save the plant they typed into the earch input
        plantSearched = $("#commonName").val() || $("#botanicalName").val() ||
            $("#cultivar").val() ||
            $("#water").val() ||
            $("#sun").val() ||
            $("#soil").val();

        console.log("search.js plantSearched " + plantSearched);

        toProperCase();


        if ($("#commonName").val().trim() !== null) {
            searchCommonName();
        } else if ($("#botanicalName").val().trim() !== null) {
            searchBotanicalName();
        } else if ($("#cultivar").val().trim() !== null) {
            searchCultivar();
        } else if ($("#water").val().trim() !== null) {
            searchWater();
        } else if ($("#sun").val().trim() !== null) {
            searchSun();
        } else if ($("#soil").val().trim() !== null) {
            searchSoil();
        };


        function searchCommonName() {
            // Make an AJAX get request to our api, including the user's book in the url
            $.get("/api/" + plantSearched, function(data) {
                console.log("search.js searchCommonName " + data);
                $.post("/api/" + plantSearched, data);
                // render function to send search results data to the page
                renderPlants(data);
            });
        };


        function searchBotanicalName() {
            // Make an AJAX get request to our api, including the user's book in the url
            $.get("/api/" + str, function(data) {
                console.log("search.js searchBotanicalName " + data);
                $.post("/api/" + str, data);
                // render function to send search results data to the page
                renderPlants(data);
            });
        };

        function searchCultivar() {
            // Make an AJAX get request to our api, including the user's book in the url
            $.get("/api/" + str, function(data) {
                console.log("search.js function searchCultivar " + data);
                $.post("/api/" + str, data);
                // render function to send search results data to the page
                renderPlants(data);
            });
        };

        function searchWater() {
            // Make an AJAX get request to our api, including the user's book in the url
            $.get("/api/" + str, function(data) {
                console.log("search.js searchWater " + data);
                $.post("/api/" + str, data);
                // render function to send search results data to the page
                renderPlants(data);
            });
        };

        function searchSun() {
            // Make an AJAX get request to our api, including the user's book in the url
            $.get("/api/" + str, function(data) {
                console.log("search.js searchSun " + data);
                $.post("/api/" + str, data);
                // render function to send search results data to the page
                renderPlants(data);
            });
        };

        function searchSoil() {
            // Make an AJAX get request to our api, including the user's book in the url
            $.get("/api/" + str, function(data) {
                console.log("search.js searchSoil " + data);
                $.post("/api/" + str, data);
                // render function to send search results data to the page
                renderPlants(data);
            });
        };



        $("#searchDIV, #resultsDIV").toggle();
    });
});




function toProperCase() {
    temp_arr = plantSearched.split('.');
    for (i = 0; i < temp_arr.length; i++) {
        temp_arr[i] = temp_arr[i].trim()
        temp_arr[i] = temp_arr[i].charAt(0).toUpperCase() + temp_arr[i].substr(1).toLowerCase();
    }
    plantSearched = temp_arr.join('. ');
    return plantSearched;
    console.log("toProperCase " + plantSearched);
}


function renderPlants(data) {
    if (data.length !== 0) {
        $("#results").empty();
        $("#results").show();
        $.post("/api/plantSearched", data);
        console.log("search.js renderPlants " + data)


        for (var i = 0; i < data.length; i++) {
            var div = $("<div>");

                for (var j = 0; j < fields.length; j++) {
                    var field = fields[j].field;
                    var label = fields[j].label;
                    var value = data[i][field];

                    if (value) {
                        div.append("<p><h2>" + label + ":  </h2> " + value + "</p>");
                    }

                }
                div.append("<hr>");

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
    $('html, body').animate({ scrollTop: 0 }, 'fast');
};
