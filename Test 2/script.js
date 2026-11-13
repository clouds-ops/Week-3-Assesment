
let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];


console.log("1. Full Shopping List:", shoppingList);
console.log("2. First item:", shoppingList[0]);
console.log("3. Last item:", shoppingList[shoppingList.length - 1]);

shoppingList.push("Cooking Oil");
console.log("4. After adding Cooking Oil:", shoppingList);

shoppingList.shift();
console.log("5. After removing first item:", shoppingList);

let sugarIndex = shoppingList.indexOf("Sugar");
shoppingList[sugarIndex] = "Tea Leaves";
console.log("6. After changing Sugar to Tea Leaves:", shoppingList);

console.log("7. Total number of items:", shoppingList.length);