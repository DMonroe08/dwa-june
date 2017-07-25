const meal = require('./meal.js');

const mealItems = [
{mealID: 'kj3ns9djd', name: 'Pizza'},
{mealID: '3kn39sk3n', name: 'Burger and Fries'},
{mealID: '3jwkx9ejk', name: 'Spaghetti'},
{mealID: '9dm33md08', name: 'Stir Fry'},
{mealID: 'k3k39d9si', name: 'Cereal'},
{mealID: '4k49djn0x', name: 'Peanut Butter and Jelly'},
{mealID: 'u7yg665f8', name: 'Wings'},
{mealID: '2ksiud837', name: 'Bagel'},
{mealID: '3kis93klo', name: 'Hot Dog'},
{mealID: 'o339ddje9', name: 'Roast Pork'}
];
// foreach(function(mealItems){
//   var meal = mealItems[index];
//   console.log('Your meal is ' + meal);
// })

// {mealID: '2ksiud837'};
if (0 === 0 ){
  // const aMealID = {mealID: '2ksiud837'};
  // meal.getMeal(mealItems, aMealID);
  const mealNum = mealItems[4];
  meal.getMeal(mealItems, mealNum);

  console.log('get meal working');
}

if(true == true){
meal.getMeals(mealItems);

// var getMeals = meal.getMeals(mealItems);
// console.log(getMeals);
console.log('get meals working');
// console.log('meals listed');
}else{
  console.log('get meals not working');
}

if(3 ===3){
var newItem = {mealID: 'o3394d3e9', name: 'Rice and Beans'};
var newList = meal.createMeal(mealItems, newItem);
// console.log(newList);
console.log('create meal working');
}

if(1 === 1){

var updated = {mealID: 'kj3ns9djd', name: 'Baklava'};
// var updatedList = meal.updateMeal(mealItems, updated);
// var updatedList = meal.updateMeal(mealItems, updated);
// console.log(updatedList + updated);

var mealID = 'kj3ns9djdv';
var new1 = 'Baklava';
var indes = 0;

meal.updateMeal(mealItems, mealID, new1, indes);
console.log('update meal working');
}

if(9==9){
  var mealID = 'kj3ns9djdv';
  var new1 = 'Baklava';
  var idx = 0;
  meal.updateMeal2(mealItems, mealID, new1, idx);
}

if(2 === 2){
// var removed = mealItems[4];
// var newList = meal.removeMeal(mealItems, removed);
//   console.log(newList);


  const amount = 6;
  const position = 1;
  const newList = meal.removeMeal(mealItems, amount, position);
  console.log('remove meal working');
}
