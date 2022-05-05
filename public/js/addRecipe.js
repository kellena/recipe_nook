const searchTerm = $("#keyword").val;
const recipeAPI = async function (searchTerm) {

  // const submitBtn = document.getElementById("submitBtn");
  const searchResults = document.getElementById("recipeResults");
   
  const response = await fetch(`/api/edamam/:${searchTerm}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.ok) {
    document.location.replace('/pageRoutes');
  } else {
    console.log(err);
  }
}

document.querySelector("#submitBtn").addEventListener("submit", recipeAPI(searchTerm))
// submitBtn.on("click", recipeAPI(searchTerm))

