//                                                             TASK NO 1

// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
// Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. This demonstrates looping through an array and appending custom messages to each item.

let pizzas: string[] = ["peproni pizaa", "chicken tikka ", "chicken fajita"];
pizzas.forEach((pizzas) => {
  console.log(`i like ${pizzas} pizza .`);
});
console.log("i really like pizza");

//                                                             TASK NO 2

// Question 35: Animals: Highlight animals with a common trait.
// Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.

let wildanimals: string[] = ["Tiger", "Lion", "Elephant", "Deer"];
wildanimals.forEach((wildanimals) => {
  console.log(`${wildanimals} is a wild animal`);
});
console.log("any one of these is a wild animal");

//                                                           TASK NO 3

// Question 36: T-Shirt: Create a function for customizing t-shirts.
// Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently. This introduces you to function parameters and printing dynamic content based on those parameters.

function makingshirt(size: string, messages: string) {
  console.log(`making a ${size} size t-shirt with the messages ${messages} printed on it`);
}
makingshirt("large", "i love typescript");
