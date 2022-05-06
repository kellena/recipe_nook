const searchTerm = document.getElementById("keyword").val;
const recipeAPI = async function (searchTerm) {

  // const submitBtn = document.getElementById("submitBtn");
  const searchResults = document.getElementById("recipeResults");
  //var searchTerm = search.val();
   
  const response = await fetch(`/api/edamam/:${searchTerm}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.ok) {
    document.location.replace('/pageRoutes');

    // function Recommendations(data) {
    //   var recipeTitle = $("<h5 card-title>");
    //   var ingredientLines = $("#li class1");
    //   var dishType = $("li class2");
    //   var cuisineType = $("li class3");
    //   var uri = $("card-link");

  } else {
    console.log(err);
  }
}

document.querySelector("#submitBtn").addEventListener("submit", recipeAPI(searchTerm))
// submitBtn.on("click", recipeAPI(searchTerm))