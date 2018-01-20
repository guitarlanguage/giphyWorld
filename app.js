// variables
//==========================================
//my key to the giphy api
var authKey = "7bBdC4gBmRiNNZ24sbtPXdTF2P5OByBI";
//variable named topics that contains an array of strings
var topics = ["animals, comedy"];
var searchTerm = "";
var queryTerm = "";
var arr = [];


// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=";
// add functions
//==========================================

// methods
//==========================================
$("#addAnimal").on("click", function(event) {
    // alert("test");
    event.preventDefault();
    queryTerm = $("#animal-input").val().trim();
    alert(queryTerm);
    var topicButton = $("<button>" + queryTerm + "</button>");
    topicButton.attr("data-animal", queryTerm);
    $("#buttons").append(topicButton);



$("button").on("click", function() {
    var x = $(this).data("animal");
    console.log(x);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        x + "&api_key=7bBdC4gBmRiNNZ24sbtPXdTF2P5OByBI&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + response.data[i].rating);
            var animalImg = $("<img>");
            animalImg.attr("src", response.data[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImg);
            $("#gifsGoHere").prepend(animalDiv);
        }
    })
})
})
