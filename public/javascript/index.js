$(document).ready(function() {
  // Getting references to the name inout and plant container, as well as the table body
  // var nameInput = $("#plant-name");
  // var plantList = $("tbody");
  // var plantContainer = $(".plant-container");

 var commonName = $("#commonName");
  var botanicalName = $("botanicalName");
  var cultivar = $("cultivar");
  var water = $("water");
  var sun = $("sun");
  var soil = $("soil");


var queryURL="";
$(document).ready(function(){
  $("#form").empty();

$("#clear").on("click", function(){
  $("#commonName").empty();
  $("#botanicalName").empty('');
  $("#cultivar").empty();
  $("#water").empty('');
  $("#sun").val('');
  $("#soil").empty();
});

    // Adding click event listen listener to all buttons
$("#search").on("click", function(){

 // Grabbing and storing the data-animal property value from the button
      var commonName = $("#commonName").val().trim()toLowerCase();
      var botanicalName = $("botanicalName").val().trim()toLowerCase();
      var cultivar = $("cultivar").val().trim().toLowerCase();
      var water = $("water").val().trim().toLowerCase();
      var sun = $("sun").val().toLowerCase();
      var soil = $("soil").val().toLowerCase();
     
if (commonName) {
  findCommonName();
} else if (botanicalName) {
  findBotanicalName();
} else if (cultivar) {
 findCultivar();
} esle if (water) {
  (findWater);
}else if (sun){
findSun();
}else if (soil) {
  findSoil();
}
};
      
function findCommonName () {
  Plant.findOne ({
    where: {common_name: 'commonName'
    }
  }).then()
}


  // Adding event listeners to the form to create a new object, and the button to delete
  // an plant
  $(document).on("submit", "#plant-form", handlePlantFormSubmit);
  $(document).on("click", ".delete-plant", handleDeleteButtonPress);

  // Getting the intiial list of plants
  getPlants();

  // A function to handle what happens when the form is submitted to create a new Plant
  function handlePlantFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertPlant function and passing in the value of the name input
    upsertPlant({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an plant. Calls getPlants upon completion
  function upsertPlant(plantData) {
    $.post("/api/plants", plantData)
      .then(getPlants);
  }

  // Function for creating a new list row for plants
  function createPlantRow(plantData) {
    var newTr = $("<tr>");
    newTr.data("plant", plantData);
    newTr.append("<td>" + plantData.name + "</td>");
    newTr.append("<td> " + plantData.fruit_trees.length + "</td>");
    newTr.append("<td>" + plantData.id + "'>Go to Posts</a></td>");
    newTr.append("<td>" + plantData.id + "'>Create a Post</a></td>");
    return newTr;
  }

  // Function for retrieving plants and getting them ready to be rendered to the page
  function getPlants() {
    $.get("/api/plants", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createPlantRow(data[i]));
      }
      renderPlantList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderPlantList(rows) {
    plantList.children().not(":last").remove();
    plantContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      plantList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  // function renderEmpty() {
  //   var alertDiv = $("<div>");
  //   alertDiv.addClass("alert alert-danger");
  //   alertDiv.html("You must create an Author before you can create a Post.");
  //   authorContainer.append(alertDiv);
  // }

  // Function for handling what happens when the delete button is pressed
//   function handleDeleteButtonPress() {
//     var listItemData = $(this).parent("td").parent("tr").data("author");
//     var id = listItemData.id;
//     $.ajax({
//       method: "DELETE",
//       url: "/api/authors/" + id
//     })
//     .done(getAuthors);
//   }
 });
