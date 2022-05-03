var submitBtn = $("#search-btn");
var searchTerm = $("#keyword");

var searchResults = $("#recipeResults");


submitBtn.on("click", function (event) {
    event.preventDefault();
   
   searchTerm = searchTerm.val();
//add fetch on '/api/edamam/:searchterm
//    recipeAPI(searchTerm)
}); 


//var userSearchTerm = searchTerm.val();

// function recipeAPI(searchTerm){

//     var queryURL = "https://api.edamam.com/search?q=" & searchTerm & app_id & APIKey & "imageSize=thumbnail" & "to=10";

//     fetch(queryURL)
//        .then(function (response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data)
//           })

// }

