const searchTerm = $("#keyword").val;
const recipeAPI = async function (searchTerm) {

const submitBtn = $("#search-btn");
const searchResults = $("#recipeResults");
   
   
   const response = await fetch(`/api/edamam/:${searchTerm}`, {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
     },
   })
   if (response.ok) {
     document.location.replace('/pageroutes');
   } else {
     console.log(err);
   }
}

submitBtn.on("click", recipeAPI(searchTerm))

