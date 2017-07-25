
const mealArr = [];

exports.getMeal = function(mealArr, mealID){
//   for(var index = 0; index < mealArr.length; index++){
//   // var mealIdNum = mealArr.mealID;
//   var mealIdNum = mealArr[index];
//   console.log('Your single meal is ' + mealIdNum.mealId);
// }
var index = 0; index < mealArr.length;
let name = mealArr[index];
var mes = 'Your single meal is ' +  mealID;
console.log(mealID);
console.log('===========');
console.log('Your single meal is ' + mealID);
console.log('===========');
console.log(mes);

// if(mealID == mealID){
// console.log(mealID);
// console.log('===========');
// console.log(mealArr[0]);
// // var singleMeal = mealID[''];
// console.log('===========');
// console.log('Your single meal is ' + mealID);
// }
}

exports.getMeals = function(mealArr){
for(var index = 0; index < mealArr.length; index++){
  let name = mealArr[index];
  console.log('Your meal is ' + name.name);
}
};
exports.createMeal = (mealArr, newMeal) => {
  var newSet = mealArr.concat(newMeal);
  console.log(newSet);
};

exports.updateMeal = (mealArr, mealID,  newI, indx) => {
mealArr[indx] = newI;
var index = 0; index < mealArr.length; index++;
let name = mealArr[index];
console.log('Your updated meal is ' + name.name);
console.log(mealArr);
  // return newML;
};

exports.updateMeal2 = (mealArr, mealID,  newI, indx) => {
// mealArr[indx] = newI;
// var index = 0; index < mealArr.length; index++;
// let name = mealArr[index];
// console.log('Your updated meal is ' + name.name);
// console.log(mealArr);
var index = 0; index < mealArr.length; index++;
let name = mealArr[index];
// mealArr.update();
};


exports.removeMeal = (mealArr, amt, pos) => {
// var removed = mealArr.delete(mealRemoved);
var deletedList = mealArr.splice(amt, pos);
console.log(mealArr);
console.log('===========')
console.log(deletedList);

console.log('===========')
console.log('Deleted Meal' + deletedList);

}
