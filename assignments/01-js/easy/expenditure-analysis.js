/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


// to check the tests cd to tests and do npx jest filname 

// creating a map object using new map();

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// console.log(fruits);
// console.log(fruits.get("bananas"))

// Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits);

// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Create an Iterator
// const list = fruits.entries();

// console.log(list);

// The entries() method returns an Iterator object with the key/value pairs from an array:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// Array.from()

// console.log(Array.from('foo'));
// // Expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], (x) => x + x));
// // Expected output: Array [2, 4, 6]



function calculateTotalSpentByCategory(transactions) {
  // Use a Map to efficiently store category and total spent
  const categoryTotals = new Map();

  for (const transaction of transactions) {
    const category = transaction.category;
    const price = transaction.price;

    // Check if category exists in the Map
    if (categoryTotals.has(category)) {
      // Add current price to existing total for that category
      categoryTotals.set(category, categoryTotals.get(category) + price);
      console.log(categoryTotals);
    } else {
      // Initialize the category with the current transaction price
      categoryTotals.set(category, price);
      console.log(categoryTotals);
    }
  }

  // Convert the Map to an array of objects for the desired output format
  return Array.from(categoryTotals.entries()).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;

