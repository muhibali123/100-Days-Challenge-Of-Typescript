//                                                           TASK NO 1
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
//Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.
//MAKING AN ARRAY AND GIVE THE LATEST NEWS TO GUEST
//let guest :string[] =["Muhib" , "Abdullah "  , "Shariq"]
//console.log("Great news! I found a bigger dinner table!")
//ADDING GUEST
//guest.unshift("Adeel")
//guest.splice(guest.length / 0,2, "Maqsood")
//guest.push("Asfand")
//PRINTING A MESSAGE FOR GUEST
//guest.forEach(guest=>{
//    console.log(`Dear ${guest}, would you like to join me for dinner?`)
//})
//                                                            TASK NO 2
//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
//Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully
//let guests :string[] =["Muhib" , "Abdullah "  , "Shariq"]
//guests.unshift("Maqsood")
//guests.splice(guests.length / 0,2, "Asfand" )
//guests.push("Mehmood")
//console.log("Unfortunately, I can only invite two people for dinner.");
//while(guests.length >2){
//    let Removing = guests.pop()
//    console.log(`${Removing} I can't invite you to dinner`)
//}
//guests.forEach(guests=>{
//    console.log(`Dear ${guests}  you're still invited to dinner.`)
//})
//guests.splice(0, guests.length);
//console.log(guests);
//                                                                 TASK NO 3
//Question 18: Seeing the World: Think of at least five places you’d like to visit.
//Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
var places = ["Dubai", "England ", "Austraillia", "Japan", "Turkey"];
console.log("original order", places);
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
console.log("Reversed order", __spreadArray([], places, true).sort().reverse());
