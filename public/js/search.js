// Variable to hold returned data
var plantSearched;
var results;
var str;

$(document).ready(function() {
    //The results section starts hidden and will toggle to show
    $("#resultsDIV").hide();
    // When user hits the search-btn
    $("#search").on("click", function(event) {
        event.preventDefault();


        // Save the plant they typed into the earch input
        var plantSearched = $("#commonName").val().trim() || $("#botanicalName").val().trim() ||
        $("#cultivar").val().trim() ||
        $("#water").val().trim() ||
        $("#sun").val().trim() ||
        $("#soil").val().trim();
        plantSearched = plantSearched;
        str = plantSearched;
        console.log("search.js 14 plantSearched = " + plantSearched);
        toProperCase();



        // Make an AJAX get request to our api, including the user's book in the url
        $.get("/api/" + plantSearched, function(data) {
            console.log("search.js 19" + data);
            $.post("/api/" + plantSearched, data);
            // render function to send search results data to the page
            renderPlants(data);
            $("#searchDIV, #resultsDIV").toggle();
        });
    });
});



function toProperCase(){
temp_arr = str.split('.');
for (i = 0; i < temp_arr.length; i++) {
temp_arr[i]=temp_arr[i].trim()
temp_arr[i] = temp_arr[i].charAt(0).toUpperCase() + temp_arr[i].substr(1).toLowerCase();
}
str=temp_arr.join('. ') + '.';
console.log("toProperCase "+str);
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
            if (data[i].common_name === undefined || null) {
                console.log("No data.");
            } else {

                div.append("<p> " + data[i].common_name + "</p>");

            }
            div.append("<p><h2>Cultivar:  </h2> " + data[i].cultivar + "</p>");
            div.append("<p><h2>Botanical name:  </h2> " + data[i].botanical_name + "</p>");
            div.append("<p> <h2>Ripening season:  </h2>" + data[i].ripening_season + "</p>");
            div.append("<p><h2>Chill min:  </h2> " + data[i].chill_min + "</p>");
            div.append("<p><h2>Chill max:  </h2> " + data[i].chill_max + "</p>");
            div.append("<p><h2>Cold Hardiness:  </h2> " + data[i].cold_hardiness + "</p>");
            div.append("<p> <h2>Fruit:  </h2>" + data[i].fruit + "</p>");
            div.append("<p><h2>Water needs:  </h2> " + data[i].water_needs + "</p>");
            div.append("<p><h2>Sun:  </h2> " + data[i].sun + "</p>");
            div.append("<p><h2>Soil type:  </h2> " + data[i].soil_type + "</p>");
            div.append("<p><h2>PH low:  </h2> " + data[i].ph_low + "</p>");
            div.append("<p><h2>PH high:  </h2> " + data[i].ph_high + "</p>");
            div.append("<p> <h2>Fertilizer:  </h2>" + data[i].fertilizer + "</p>");
            div.append("<p><h2>Originating region:  </h2> " + data[i].originating_region + "</p>");
            div.append("<p> <h2>Description:  </h2>" + data[i].description + "</p>");
            div.append("<p> <h2>Parentage:  </h2>" + data[i].parentage + "</p><hr>");

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
};
