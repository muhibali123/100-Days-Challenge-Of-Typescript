//                                                                 TASKI NO 1
//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//Explain & TIP: Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop.
//let favoritetransport : string[] = [" honday CD70 " , "LEXUS LX570" ,"GREEN LINE TRAIN" , " PIA AIRLINES "]
//for (let name of favoritetransport){
//    console.log(` I LIKE TO GOING ON ${name}`)}
//                                                                TASK NO 2
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Explain & TIP: Just like with transportation, you can use an array to manage a list of guests. Loop through the list to send each one a personal invitation
var guest = ["Abdullah", "Huzaia", "Wasay"];
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var name_1 = guest_1[_i];
    console.log("  ".concat(name_1, " you are invited on dinner at Indus Hotel Hyderabad "));
}
//                                                                TASK NO 3
//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
//Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again for new invitations
//first step : make a guest array
var guests = ["Abdullah", "Haseeb", "Usman"];
// Second step : we write the name of guest which is not invited on dinner
var unabletoattend = "Haseeb";
console.log("\"Sorry ".concat(unabletoattend, " you are not invited on dinner\""));
// Third step : we write the name of guests which are invited on dinner
var newguest = "Adeel";
guests[guests.indexOf(unabletoattend)] = newguest;
// Fourth step : we print a message on those guests which are invited on dinner
guests.forEach(function (guest) {
    console.log("\" Hi ".concat(guest, " you are invited on dinner\""));
});
