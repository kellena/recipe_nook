// // elements to capture
// const saveBtn = $('#');
// const savedBtndiv = $('#');
// const savedRecipeList = getList();


// saveBtn.text('Add to My Favorites');
// saveBtn.attr('data-num', i);
// btnDiv.append(saveBtn);
    
// //event listener for buttons
// saveBtn.on('click', function(event) {
  
//   if (event.target.matches('button')) {
//     let targetBtn = $(event.target);
//     let dishNum = targetBtn.attr('data-num');
//     addToList(dishNum);
//    ;
//   }

// });

// function getList() {
//   if (localStorage.savedRecipeList === undefined) {
//     return JSON.parse('[]');
//   } else {
//     return JSON.parse(localStorage.savedRecipeList);
//   }
// }

// function addToList(i) {
//   let newDish = {
//     label : hits[i].recipe.label,
//   }
//   savedRecipeList.push(newDish);
//   localStorage.setItem('My Favorites', JSON.stringify(savedRecipeList));
// }

