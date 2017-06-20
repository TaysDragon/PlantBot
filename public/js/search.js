// Variable to hold returned data
var plantSearched;
var results;

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
];

// The code below handles the case where we want to get plant info for a specific plant
// Looks for a query param in the url for common_name
var url = window.location.search;
var commonName;
var botanicalName;
var cultivar;
if (url.indexOf("?common_name=") !== -1) {
    commonName = url.split("=")[1];
    searchPlants(commonName);
    console.log(url);
} // Otherwise if we have a botanical name in our url
else if (url.indexOf("?botanical_name=") !== -1) {
    botanicalName = url.split("=")[1];
    searchPlants(botanicalName);
    console.log(url);
} // Otherwise if we have a cultivar in our url
else if (url.indexOf("?cultivar=") !== -1) {
    cultivar = url.split("=")[1];
    searchPlants(cultivar);
    console.log(url);
}

$(document).ready(function() {
    //The results section starts hidden and will toggle to show
    $("#resultsDIV").hide();
    // When user hits the search-btn
    $("#search").on("click", function(event) {
        event.preventDefault();


        // Save the plant they typed into the search input
        plantSearched = $("#commonName").val() || $("#botanicalName").val() ||
            $("#cultivar").val() ||
            $("#water").val() ||
            $("#sun").val() ||
            $("#soil").val();

        toProperCase();
        console.log("search.js plantSearched " + plantSearched);
        searchPlants();

        $("#searchDIV, #resultsDIV").toggle();
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
    };

    function searchPlants() {
        // Make an AJAX get request to our api, including the searched plant in the url
        $.get("/api/" + plantSearched, function(data) {
            console.log("search.js searchPlants initiated " + data);
            // $.post("/api/" + plantSearched, data);
            // render function to send search results data to the page
            renderPlants(data);
        });
    };

    // This function grabs plants from the database and updates the view
    function renderPlants(data) {
        if (data.length !== 0) {
            $("#results").empty();
            $("#results").show();
            // $.get("/api/" + plantSearched, data);
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
                //             var deleteBtn = $("<button>");
                // deleteBtn.text("Delete");
                // deleteBtn.addClass("delete btn btn-danger");
                var editBtn = $("<button>");
                editBtn.text("EDIT");
                editBtn.addClass("edit buttonAlign");
                div.append("<hr>");

                $("#results").append(div);
            }
        }
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    };

    // $(".delete").click(function() {

    //     var info = {
    //         id: $(this).attr("data-id")
    //     };

    //     $.post("/api/delete", info)
    //         // On success, run the following code
    //         .done(function(deldata) {
    //             // Log the data we found
    //             console.log(deldata);
    //             console.log("Deleted Successfully!");
    //         });

    //     $(this).closest("div").remove();

    // });


}); //goes to document on ready
