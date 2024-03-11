//                                                              TASK NO 1
//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
//Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with this helps you understand array boundaries
//let box : string[] = ["tofees", "chips" , "nimco" , "waffer"]
//console.log(box[4])
//box[2]="nimco"
//                                                              TASK NO 2
//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
//Explain & TIP: Conditional tests check if something is true or false. Writing different tests helps you understand how conditions work in programming.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//let car = 'suzuki';
//console.log("Is car == 'suzuki'? I predict True.");
//console.log(car == 'suzuki'); // True
//console.log("Is car == 'nissan'? I predict False.");
//console.log(car == 'nissan'); // False
//let box = "tofees"
//console.log(`is box == "tofees" ? I predict true.`)
//console.log(box == "tofees");
//console.log("is box == 'chips' ? i predict false ")
//console.log(box == 'chips' );
//let mysterybox ="watch"
//console.log('is mysterybox == "watch" ? i predict true')
//console.log(mysterybox == "watch")
//console.log('is mysterybox == toys ? i predict false')
//console.log(mysterybox == "toys")
//let CpuParts = 'Ram'
//console.log('is Cpuparts == Ram ? i predict true')
//console.log(CpuParts == "Ram")
//console.log('is CpuParts == mouse ? i predict false')
//console.log(CpuParts == "mouse")
//let bikeparts = "indicators"
//console.log('is bikeparts == indicators ? i predict true')
//console.log(bikeparts == "indicators")
//console.log('is bikeparts == "windscreen" ? i predict false ')
//console.log(bikeparts == "windscreen")
//                                                                  TASK NO 3
//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
//Explain & TIP: Experiment with different types of conditions to see how they work. This builds a deeper understanding of logic in programming.
// CLEARING CONCEPTS OF CONDITIONS
//    FIRST CONDITION
//console.log("Testing equality with strings:");
//console.log("checking by equality string")
//console.log("apple" == "apple");
//console.log("apple"== "Apple");//false
//console.log("using lower case function")
//console.log("Apple".toLowerCase()== "apple" )
//    SECOND NUMERICAL CONDITION
//console.log("testing condition by numerical value")
//console.log(10>2)
//console.log(10<2)
//    THIRD CONDITION
//console.log("testing condition by using 'and' or 'or'")
//console.log(true &&false)
//console.log(true  false)
//   FOURTH CONDITION
//  testing when an item is an array
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log("checking apple is in fruits");
console.log(fruits.includes("apple"));
// another way to check
console.log(fruits.indexOf("strawberry") !== -1);
console.log("Is 'mango'  in fruits?");
console.log(fruits.includes("mango"));
