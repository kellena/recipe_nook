var submitBtn = $("#search-btn");
var searchTerm = $("#keyword");

var searchResults = $("#recipeResults");


submitBtn.on("click", function (event) {
    event.preventDefault();
   
   searchTerm = searchTerm.val();
    //stringify method
    console.log(searchTerm);
    //set value to something
    //call search term
    //call api and do post method then give search term

    //.then((res) => res.json())
    //.then((data) => {
})
.catch((error) => {
  console.error('Error:', error);

 //add fetch on '/api/edamam/:searchterm
 //    recipeAPI(searchTerm)
})


//var userSearchTerm = searchTerm.val();

// function recipeAPI(searchTerm){

//     var queryURL = "https://api.edamam.com/search?q=" & searchTerm & app_id & APIKey & "imageSize=thumbnail" & "to=10";
//     call it and put search term in to it
//     fetch(queryURL)
//        .then(function (response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data)
//           })

// }

