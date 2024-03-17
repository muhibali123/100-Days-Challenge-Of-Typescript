//                                                        TASK NO 1

// Question 31: No Users: Ensure your user list isn’t empty.
// Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.

// let user: string[] = [];
// if (user.length === 0) {
//   console.log("we need to find some user");
// } else {
//   console.log("we find some user");
// }

//                                                      TASK NO 2

// Question 32: Checking Usernames: Ensure uniqueness in usernames.
// Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.

// let currentuser :string[] = ["user1", "admin","user3","user4","user5"]
// let newuser     :string[] = ["User1","User6","User7","admin","User9"]

// newuser.forEach(newuser =>{
//     if(currentuser.some(currentuser=> currentuser.toLowerCase()===newuser.toLowerCase())){
//         console.log(`${newuser}will need to enter a username`)
//     }else{
//         console.log(`${newuser}is availiable`)
//     }
// })

//                                                     TASK NO 3

// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
// Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.

// let numbers :number[]=[1,2,3,4,5,6,7,8,9]
// numbers.forEach(numbers=>{
//     let suffix = "th"
//     if(numbers===1){
//         suffix="st"
//     }else if (numbers===2){
//         suffix="nd"
//     }else if(numbers===3){
//         suffix="rd"
//     }
//     console.log(`${numbers}${suffix}`)
// })
