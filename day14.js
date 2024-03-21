//                                                              TASK NO 1
// Question 40: Album: Create objects for music albums.
// Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.
// function make_album(artist: string, title: string, tracks?: number) {
//   let albums = { artist, title };
//   if (tracks) {
//     albums["tracks"] = tracks;
//   }
//   return albums;
// }
// console.log(make_album("artist one", "the first album"));
// console.log(make_album("artist two", "the second album"));
// console.log(make_album("artist three", "the third album", 15));
//                                                              TASK NO 2
// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
// let magiciannames: string[] = ["Teller", "dynamo", "Criss Angel"];
// function magician(magiciannames: string[]) {
//   magiciannames.forEach((magiciannames) => {
//     console.log(magiciannames);
//   });
// }
// magician(magiciannames);
//                                                           TASK NO 3
// Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
var magician = ["Teller", "Dynamo", "CrissAngel"];
function show_magician(magicians) {
    magicians.forEach(function (magician) {
        console.log("".concat(magician));
    });
}
// show_magician(magician)
function great_magician(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The great";
    }
}
great_magician(magician);
show_magician(magician);
