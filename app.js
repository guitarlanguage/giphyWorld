// variables
//==========================================
//my key to the giphy api
var authKey = "7bBdC4gBmRiNNZ24sbtPXdTF2P5OByBI";
//variable named topics that contains an array of strings
var topics = [
    "cat",
    "catfish",
    "cow",
    "Mr Crabs",
    "fish",
    "Norm MacDonald",
    "Will Ferrel",
    "Dave Chappelle",
    "Seinfeld"
];
var queryTerm = "";
// variable to piece together the api main link and the api key,
// with the ability to have a query search
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=";
//FUNCTIONS
//==========================================
$(document).ready(function() {
    //==grab the value from form=======
    $("#addAnimal").on("click", function(event) {
        //do the prevent
        event.preventDefault();
        // display buttons when topics are submited to the form
        queryTerm = $("#animal-input").val().trim();
        //push the users submitted topic to the array
        topics.push(queryTerm);
        // variable that holds a button with the queryTerm embedded
        var topicButton = $("<button>" + queryTerm + "</button>");
        // give the new button the data-animal attribute
        topicButton.attr("data-animal", queryTerm);
        // place the new button in the div with #buttons id
        $("#buttons").append(topicButton);
        //==have the buttons coordinate with the giphy api========
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
    });

    for (var i = 0; i < topics.length; i++) {
        console.log("arrayloooooopo: " + topics[i]);
        var preFabBtn = $("<button>" + topics[i] + "</button>");
        preFabBtn.attr("data-animal", topics[i]);
        $("#buttons").append(preFabBtn);
    }

    $("button").on("click", function() {
        var x = $(this).data("animal");
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
        });
    });
});
