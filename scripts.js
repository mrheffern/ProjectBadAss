var recipes = {
  cheesyChicken : {
    name : "Cheesy Chicken",

    healthy : false,

    ingredients : {

      ingredient1 : {
        name : "rice",
        amount : 0.25,
        units : "cup(s)"
      },

      ingredient2 : {
        name : "chicken",
        amount : 1,
        units : "breast(s)"
      },

      ingredient3 : {
        name : "cheese soup",
        amount : 0.5,
        units : "can(s)"
      },

      ingredient4 : {
        name : "milk",
        amount : 0.25,
        units : "cup(s)"
      },

      ingredient5 : {
        name : "pepper",
        amount : "to taste"
      },

      ingredient6 : {
        name : "salt",
        amount : "to taste"
      }
    }
  }
};

var testLog = "Woops";
var amountWithUnits = "";
// loops through each ingredient in cheesyChicken
for (var key in recipes.cheesyChicken.ingredients) {
  // prints name of ingredient to console
  testLog = "Name: " + recipes.cheesyChicken.ingredients[key]["name"];
  console.log(testLog);
  // saves amount of ingredient needed
  testLog = "Amount: " + recipes.cheesyChicken.ingredients[key]["amount"];
  // checks if ingredient has "units" property. if so units is appened to "testLog"
  if (recipes.cheesyChicken.ingredients[key].hasOwnProperty("units")) {
    testLog = testLog + " " + recipes.cheesyChicken.ingredients[key]["units"];
  }
  // prints amount of ingredient and units
  console.log(testLog);
};
console.log("damn dog");
//loop through recipe --> loop ingrients --> loop ingredientX
//store name --> if there is units conc with amount --> display
