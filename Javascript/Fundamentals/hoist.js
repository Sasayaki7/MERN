// console.log(hello);                                   
// var hello = 'world';                                 


// //1.
// //var hello;
// //prints undefined.

// //var hello;
// //console.log(hello);                                   
// //hello = 'world';



// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// //2.
// //var needle;
// //var test;
// // //test = function(){
// //     var needle;
// //     needle = 'magnet';
// //     console.log(needle) --> prints magnet
// // }


// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);


// // 3.
// // var brendan;
// // var print();
// // brendan = 'super cool'
// // function print(){
// //     brendan='only okay';
// //     console.log(brendan) -> only okay ... never called woops

// // }
// // console.log(brendan) -> super cool


// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// // 4.
// // var food;
// // food='chicken'
// // console.log(food) --> chicken
// // eat(); 
// // function eat(){
// //     var food;
// //     food = 'half-chicken';
// //     console.log(food); -> half-chicken
// //     var food = 'gone';
// // }



// // mean();
// // console.log(food);
// // var mean = function() {
// //     food = "chicken";
// //     console.log(food);
// //     var food = "fish";
// //     console.log(food);
// // }
// // console.log(food);


// // 5.
// // var mean;
// // mean() --> Will error here due to undefined function


// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// // 6.
// // var genre;
// // console.log(genre) //prints out undefined.
// // genre = "disco";
// // rewind();

// // function rewind() {
// //     var genre;
// //     genre = "rock";
// //     console.log(genre); -> rock
// //     var genre = "r&b";
// //     console.log(genre); -> r&b
// // }
// // console.log(genre); -> disco



dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Errors because var dojo is never called.

//OKay I was wrong. 

// var dojo;
// dojo = "san jose";
// console.log(dojo); -> san jose
// learn();
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); -> seattle
//     var dojo = "burbank";
//     console.log(dojo); -> burbank
// }
// console.log(dojo); -> san jose



console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


// 8.

// -> An object showing "Chicago" and 65
// -> closed for now

//Oh I was dead wrong.