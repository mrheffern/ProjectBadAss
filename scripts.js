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

  cheese : {
    name : "Scrambled Eggs",
    healthy : true,
    ingredients : {
      ingredient1 : {
        name : "eggs",
        amount : 2
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
  }
};

var x = 1;
var shoppingList = {};
// loops through each recipe
for (var item in recipes){
  // loops through each ingredient in current recipe
  for (var key in recipes[item].ingredients) {
    // checks to see if item already exist on shopping list
    if (shoppingList.hasOwnProperty(recipes[item].ingredients[key].name)) {
//      console.log("Item found on list");
      // doesnt add amount if value is "to taste"
      if (typeof recipes[item].ingredients[key].amount != "string") {
        // if item on grocery list is "to taste" it is replaced with a number value
        if (typeof shoppingList[recipes[item].ingredients[key].name] == "string") {
          shoppingList[recipes[item].ingredients[key].name] = recipes[item].ingredients[key].amount;
        }
        // if both ingredients are numbers then add them
        else {
          shoppingList[recipes[item].ingredients[key].name] += recipes[item].ingredients[key].amount;
        }
      }
//      console.log("if!");
    }
    // if not on list item is added
    else {
      shoppingList[recipes[item].ingredients[key].name] = recipes[item].ingredients[key].amount;
//      console.log("Item NOT found on list");
    }
    x += 1;
  }
}
console.log("\n\n\n");
for (var listItem in shoppingList) {
  console.log(listItem + " " + shoppingList[listItem]);
}

// grocerryList = {
//  item1 : {
//    name
//}
// }
