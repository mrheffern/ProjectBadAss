// accepts recipes object and number of people eating, multiplies amounts, and returns updated recipe object
function multiplyByHouseholdSize(recipes, householdSize) {
  // multiplies recipe amounts by householdSize
  for (var recipe in recipes) {
    for (var ingredient in recipes[recipe].ingredients) {
      if (recipes[recipe].ingredients[ingredient].amount != "to taste") {
        recipes[recipe].ingredients[ingredient].amount *= householdSize;
      }
    }
  }
  return recipes;
}

// creates and returns object with all recipes
function createRecipes() {
  var recipes = {
    scrambledEggs : {
      name : "Scrambled Eggs",
      healthy : true,
      ingredients : {
        ingredient1 : {
          name : "eggs",
          amount : 2
        },

        ingredient2 : {
          name : "milk",
          amount : "to taste"
        }
      }
    },

    chickenRiceBowls : {
      name : "Chicken Rice Bowls",
      healthy : true,
      ingredients : {
        ingredient1 : {
          name : "chicken",
          amount : 1,
          units : "breast(s)"
        },

        ingredient2 : {
          name : "rice",
          amount : 0.25,
          units : "cup(s)"
        },

        ingredient3 : {
          name : "cilantro",
          amount : 0.25,
          units : "bunch(es)"
        },

        ingredient4 : {
          name : "onion",
          amount : 0.125
        },

        ingredient5 : {
          name : "black beans",
          amount : 0.5,
          units : "can(s)"
        },

        ingredient6 : {
          name : "tomato",
          amount : 0.5
        },

        ingredient7 : {
          name : "diced green chilis",
          amount : 0.25,
          units : "can(s)"
        },

        ingredient8 : {
          name : "lime",
          amount : 1
        },

        ingredient9 : {
          name : "salsa",
          amount : 6,
          units : "tablespoon(s)"
        },

        ingredient10 : {
          name : "sour cream",
          amount : 2,
          units : "tablespoon(s)"
        }
      }
    },

    cereal : {
      name : "cereal",

      healthy : false,

      ingredients : {

        ingredient1 : {
          name : "cereal",
          amount: 1,
          units: "bowl(s)"
        },

        ingredient2 : {
          name: "milk",
          amount: 3,
          units: "cup(s)"
        }
      }
    },

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
    },

    salmon : {
      name : "Salmon",

      healthy : true,

      ingredients : {

        ingredient1 : {
          name : "salmon",
          amount : 0.5,
          units : "pound(s)"
        },

        ingredient2 : {
          name : "lemon",
          amount : 1
        }
      }
    }
  };


  //  console.log(JSON.stringify(recipes));
  return recipes;
}

// creates object of ingredient keys and amount values and returns shoppingList object
function createShoppingList(recipes) {
  var currentIngredientName = "";
  var currentIngredientAmount = 0;
  var currentIngredientUnits = "";
  var ingredientCounter = 0;
  var shoppingList = {};
  var ingredientFoundInList = 0;
  // loops through each recipe
  for (var item in recipes){
    console.log("current recipe: " + item + "\n\n");
    // loops through each ingredient in current recipe
    for (var key in recipes[item].ingredients) {
      currentIngredientName = recipes[item].ingredients[key].name;
      console.log("\ncurrentIngredientName: " + currentIngredientName);
      currentIngredientAmount = recipes[item].ingredients[key].amount;
      console.log("currentIngredientAmount: " + currentIngredientAmount);
      currentIngredientUnits = recipes[item].ingredients[key].units;
      console.log("currentIngredientUnits: " + currentIngredientUnits);
      // loops through each item currently in grocery list to check if item is already on list in some amount
      // breaks out of loop if item is found
      for (var shoppingListItem in shoppingList) {
        // if item is on list mark item as found
        console.log("if " + shoppingList[shoppingListItem]["name"] + " == " + currentIngredientName);
        if (shoppingList[shoppingListItem]["name"] == currentIngredientName) {
          console.log("item already in list");
          ingredientFoundInList = 1;
          break;
        }
      }
      // if item has been found on list, move forward to checking for 'to taste' condition
      if (ingredientFoundInList) {
        // if only the item already on list is to taste, replace item data with new values
        console.log("existing amount: " + shoppingList[shoppingListItem].amount);
        if (shoppingList[shoppingListItem].amount == "to taste") {
          if (currentIngredientAmount != "to taste") {
            shoppingList[shoppingListItem] = recipes[item].ingredients[key];
          }
        }
        // if neither the existing or new item is 'to taste', simply add amounts together
        else if (currentIngredientAmount != "to taste") {
          console.log("increased " + currentIngredientName + " amount");
          console.log("previous amount: " + shoppingList[shoppingListItem].amount);
          shoppingList[shoppingListItem]["amount"] += currentIngredientAmount;
          console.log("new amount: " + shoppingList[shoppingListItem]["amount"]);
        }
      }
      // if item is not on list currently, copy ingredient information to grocery list
      else {
        console.log("new item " + currentIngredientName + " added");
        shoppingList["ingredient" + ingredientCounter] = recipes[item].ingredients[key];
        console.log("current " + shoppingList["ingredient" + ingredientCounter].name + " amount: " + shoppingList["ingredient" + ingredientCounter].amount);
      }
      // after adding ingredient or increasing amount, increment ingredient counter
      ingredientCounter++;
      // reset value for next iteration
      ingredientFoundInList = 0;
    }
    console.log("\n\n\n\n\n\n");
  }
  console.log(JSON.stringify(shoppingList));
  return shoppingList;
}

function convertUnits(units1, amount1, units2, amount2) {

}


createShoppingList(multiplyByHouseholdSize(createRecipes(), 5));

// 1. create recipe object
// 2. create object containing needed ingredients, amounts, and units
//  + loop through recipes book
//  + loop through each recipe ingredients
//  + loop through shoppingList
//  - check if currentIngredientName is already in list
//  - if it is, compare units
//  - if units are the same add amounts
//  - if units are not the same feed amounts and units in convertUnits()
//  - take return from convertUnits() and add amounts (update units if needed)
//  - if it is not, add to list as ingredientX
// 3. display groccery list

// grocceryList = {
//  ingredient1 : {
//    name: rice,
//    amount : 1,
//    units : "cups"
//  },
//
//  ingredient2 : {
//    name: chicken,
//    amount : 2,
//    units : "breasts"
//  }
//}
//.......
