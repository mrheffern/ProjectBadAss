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
    porkEnchiladas : {
      name : "Pork Enchiladas",
      img : "pork enchiladas.jpg"
    },

    hamburgers : {
      name : "Hamburgers",
      healthy : false,
      ingredients : {
        ingredient1 : {
          name : "hamburger",
          amount : 0.333,
          units : "pound(s)"
        }
      }
    },

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
      name : "Cereal",

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

// converts all volume units in recipes to teaspoons for ease of adding
function convertToTeaspoons(recipes) {
  var currentIngredientAmount = 0;
  var currentIngredientUnits = "";

  for (var item in recipes) {
    for (var key in recipes[item].ingredients) {
      currentIngredientAmount = recipes[item].ingredients[key].amount;
      currentIngredientUnits = recipes[item].ingredients[key].units;
      console.log(currentIngredientAmount);
      console.log(currentIngredientUnits + "\n\n\n");

      switch (currentIngredientUnits) {
        case 'gallon(s)':
        case 'quart(s)':
        case 'pint(s)':
        case 'cup(s)':
        case 'fluid ounce(s)':
        case 'tablespoon(s)':
          switch (currentIngredientUnits) {
            case 'gallon(s)':
              currentIngredientAmount *= 768;
              break;
            case 'quart(s)':
              currentIngredientAmount *= 192;
              break;
            case 'pint(s)':
              currentIngredientAmount *= 96;
            case 'cup(s)':
              currentIngredientAmount *= 48;
              break;
            case 'fluid ounce(s)':
              currentIngredientAmount *= 6;
              break;
            case 'tablespoon(s)':
              currentIngredientAmount *= 3;
          }
        recipes[item].ingredients[key].amount = currentIngredientAmount;
        recipes[item].ingredients[key].units = "teaspoon(s)";
      }
    }
  }
  return recipes;
}

// converts pounds in recipes to ounces for ease of adding
function convertToOunces(recipes) {
  console.log(`\n\n\nstarted ounce conversion`);
  // loop through recipes
  for (var item in recipes) {
    // loop through ingredients
    for (var key in recipes[item].ingredients) {
      console.log(`ingredient name: ${recipes[item].ingredients[key].name}`);
      if (recipes[item].ingredients[key].units == "pound(s)") {
        console.log(`we found pounds bitch!`);
        recipes[item].ingredients[key].units = "ounce(s)";
        recipes[item].ingredients[key].amount *= 16;
      }
    }
  }
  return recipes;
}

function convertToLargestWholeUnit(shoppingList) {
  var currentIngredientAmount = 0;
  var currentIngredientUnits = "";

  for (var item in shoppingList) {
      currentIngredientAmount = shoppingList[item].amount;
      console.log(`\ncurrent item: ${shoppingList[item].name}`);
      console.log(`current units: ${shoppingList[item].units}`);
      console.log(`current amount: ${currentIngredientAmount}`);
      switch (true){
        case (shoppingList[item].units == 'teaspoon(s)'):
        console.log(`yup, its teaspoon(s)`);
          switch (true) {
            case (currentIngredientAmount / 768 >= 1):
              console.log(`yup, its gallon(s)`);
              currentIngredientAmount /= 768;
              currentIngredientUnits = "gallon(s)";
              console.log(`currentIngredientAmount: ${currentIngredientAmount}`);
              break;
            case (currentIngredientAmount / 192 >= 1):
              currentIngredientAmount /= 192;
              currentIngredientUnits = "quart(s)";
              break;
            case (currentIngredientAmount / 96 >= 1):
              currentIngredientAmount /= 96;
              currentIngredientUnits = "pint(s)";
              break;
            case (currentIngredientAmount / 48 >= 1):
              currentIngredientAmount /= 48;
              currentIngredientUnits = "cup(s)";
              break;
            case (currentIngredientAmount / 6 >= 1):
              currentIngredientAmount /= 6;
              currentIngredientUnits = "fluid ounce(s)";
              break;
            case (currentIngredientAmount / 3 >= 1):
              currentIngredientAmount /= 3;
              currentIngredientUnits = "tablespoon(s)";
            default:
              console.log(`switch defaulted`);
          }
          break;
        case (shoppingList[item].units == 'ounce(s)' && currentIngredientAmount / 16 >= 1):
          currentIngredientAmount /= 16;
          currentIngredientUnits = "pound(s)";
          break;
        default:
          currentIngredientUnits = shoppingList[item].units;
    }
    switch (shoppingList[item].units) {
      case 'teaspoon(s)':
      case 'ounce(s)':
        shoppingList[item].amount = currentIngredientAmount;
        shoppingList[item].units = currentIngredientUnits;
  }
  }
  console.log("\n\n\n\n\n\n" + JSON.stringify(shoppingList));
  return shoppingList;
}

function convertToLargerUnit(targetUnit, currentAmount) {

  let newAmount = 0;
  switch (targetUnit) {
    case 'tablespoon(s)':
      newAmount = currentAmount / 3;
      break;
    case 'fluid ounce(s)':
      newAmount = currentAmount / 6;
      break;
    case 'cup(s)':
      newAmount = currentAmount / 48;
      break;
    case 'pint(s)':
      newAmount = currentAmount / 96;
      break;
    case 'quart(s)':
      newAmount = currentAmount / 192;
      break;
    case 'gallon(s)':
      newAmount = currentAmount / 768;
  }
  console.log(newAmount);
  return newAmount;
}

function displayRecipeChoices() {
  let recipes = createRecipes();

  for (let item in recipes) {
    $(".meals").append(`<article class="recipe">
      <h1>${recipes[item].name}</h1>
      <img src="#">
      <input type="number" id="${item}" class="peopleNumb" min="0" placeholder="Times served per period" style="text-align:center"/>
    </article>`);
  }

}

function getSelectedRecipes() {

  $("#recipes").change(function() {
    let recipesList = [];
    $("#recipes option:selected").each(function() {
      recipesList.push($(this).text());
    });
    console.log(JSON.stringify(recipesList));
    return recipesList;
  });
}

function displayShoppingList() {
  $("#submit").click(function() {
    $(".peopleNumb").each(function() {

    });
  });
}

$(document).ready(function() {
  console.log(JSON.stringify(getSelectedRecipes()));
  displayRecipeChoices();
  displayShoppingList();

});


// increase recipes wanted to above 0
// click create shopping list
// loop through each recipe number input
// if number is greater than 0, create entry on shopping list

//convertToLargestWholeUnit(createShoppingList(convertToOunces(convertToTeaspoons(multiplyByHouseholdSize(createRecipes(), 1)))));
