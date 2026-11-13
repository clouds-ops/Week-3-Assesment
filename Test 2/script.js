
let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];


console.log("Full Shopping List:", shoppingList);
console.log("First item:", shoppingList[0]);
console.log("Last item:", shoppingList[shoppingList.length - 1]);

shoppingList.push("Cooking Oil");
console.log("After adding Cooking Oil:", shoppingList);

shoppingList.shift();
console.log("After removing first item:", shoppingList);

let sugarIndex = shoppingList.indexOf("Sugar");
shoppingList[sugarIndex] = "Tea Leaves";
console.log("After changing Sugar to Tea Leaves:", shoppingList);

console.log("7Total number of items:", shoppingList.length);