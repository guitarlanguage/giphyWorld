// variables
//==========================================
//my key to the giphy api
var authKey = "7bBdC4gBmRiNNZ24sbtPXdTF2P5OByBI";
//variable named topics that contains an array of strings
var topics = [
    "cat",
    "dog",
    "fish",
    "bird",
    "monkey",
    "chimp",
    "Norm",
    "Will Ferrel",
];
var searchTerm = "";
var queryTerm = "";
var arr = [];


// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=";

// logic
//==========================================
$(document).ready(function() {
    for(var i = 0; i < topics.length; i++){
        var preFabBtn = $("<button>" + topics[i] + "</button>");
        preFabBtn.attr("data-animal", topics[i]);
        $("#buttons").append(preFabBtn);


        $("button").on("click", function() {
            var x = $(this).data("animal");
            console.log(x);
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                x + "&api_key=7bBdC4gBmRiNNZ24sbtPXdTF2P5OByBI&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                // console.log(response);
                for (var i = 0; i < response.data.length; i++) {
                    var animalDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + response.data[i].rating);
                    var animalImg = $("<img>");
                    animalImg.attr("src", response.data[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImg);
                    $("#gifsGoHere").prepend(animalDiv);
                }
            });
        });
    }

    //==grab the value from form=======
    // $("#addAnimal").on("click", function(event) {
    //     // display buttons when topics are submited to the form
    //     event.preventDefault();
    //     queryTerm = $("#animal-input").val().trim();
    //     var topicButton = $("<button>" + queryTerm + "</button>");
    //     topicButton.attr("data-animal", queryTerm);
    //     $("#buttons").append(topicButton);
    // //==have the buttons coordinate with the giphy api========

    //
    // });


});
