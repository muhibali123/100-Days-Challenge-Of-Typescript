//                                                           TASK NO 1
//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
//Explain & TIP: Comments are notes in your code that the computer ignores. They help people understand what your code does. It's like leaving a note for yourself or someone else who might read your code later.
//let Name :string = "HASEEB";
//console.log(`Hello ${Name}, How are you ?`)
//                                                           TASK NO 2
//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
//Explain & TIP: An array is like a list of items. You can store multiple items, like your friends' names, in one variable and access them one by one
//let Name : string[] = ["Muhib" , "Adeel " , "Usman" ,"Shariq" ,"Haseeb"]
//for (let name of Name){
//    console.log(`hi how are you ${name}`)
//} 
//                                                           TASK NO 3
//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
//Explain & TIP: This builds on the previous exercise. Now, you’re not just listing names, you’re using them in a sentence to make a personalized message for each friend
var fName = ["MUHIB", "ADEEL", "USMAN"];
for (var _i = 0, fName_1 = fName; _i < fName_1.length; _i++) {
    var name_1 = fName_1[_i];
    console.log("would you like ".concat(name_1, " , to learn some python today"));
}
