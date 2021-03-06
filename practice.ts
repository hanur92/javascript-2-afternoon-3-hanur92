/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  In this repo your job is to write functions to make each function call work properly.

  Here's an example of code that will be given to you:

  sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay);
  });

  It would be your job to create the sayHi function:

  var sayHi = function(str, cb){
    cb(str);
  }
*/

////////// PROBLEM 1 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/
// Code Here

type callBack = (params: string) => void;

let FirstCallBack: callBack = (firstName) => {
  console.log("The first name in names is " + firstName);
};

const first = (arr: string[], callback) => {
  callback(arr[0]);
};
// Do not edit the code below.
var names = ["Tyler", "Cahlan", "Ryan", "Colt", "Tyler", "Blaine", "Cahlan"];

first(names, FirstCallBack);

// Do not edit the code above.

////////// PROBLEM 2 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

//Code Here
let LastCallBack: callBack = (lastName) => {
  console.log("The last name in names is " + lastName);
  return lastName;
};

const last = (arr: string[], cb) => {
  cb(arr[arr.length - 1]);
};
// Do not edit the code below.
last(names, LastCallBack);
// Do not edit the code above.

////////// PROBLEM 3 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

type callBack2 = (params: number) => void;

//Code
let MultiplyCallBack: callBack2 = (answer) => {
  console.log("The answer is " + answer);
};

const multiply = (numb1: number, numb2: number, cb) => {
  return cb(numb1 * numb2);
};
// Do not edit the code below.
multiply(4, 3, MultiplyCallBack);
// Do not edit the code above.

////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

//Code Here
const contains = (
  arr: string[],
  str: string,
  cb: { (result: boolean): void }
) => {
  cb(arr.includes(str));
};
// Do not edit the code below.
contains(names, "Colt", function (result) {
  if (result === true) {
    console.log("Colt is in the array");
  } else {
    console.log("Colt is not in the array");
  }
});
// Do not edit the code above.

////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/
//Code Here
// cb = () => {
//   let res = [];
//   let rec = () => {
//     for (let i = 0; i < arr.length; i++) {
//       for (let n = arr.length; arr.length > n; n--) {
//         if (arr[i] !== arr[n]) {
//           res.splice(i, i + 1);
//         }
//         res.push;
//         if (arr[i] !== arr[n]) {
//           rec();
//         }
//       }
//     }
//     return res;
//   };
// };
// return cb();

// ! 배열 전체 순회.
// ! 인수의 배열의 각각의 요소와 겹치는 요소가 없어야 함.
// ! let res = [];
// ! for(let i =0; i<arr.length; i++){
// !   for(let n = arr.length; arr.length<n; n--){
// !     if(arr[i]!==arr[n]){
// !       res.splice(i,i+1)
// !     }
// !   }
// ! return res;
// ! };
// const uniq = (arr, cb) => {
//   const newArr = () => {
//     return Array.from(new Set(arr));
//   };
//   cb = newArr;
//   return cb();
// };
const uniq = (arr: string[], cb: { (uniqArr: string[]): void }) => {
  // let newArr = arr.reduce(
  //   (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
  //   []
  // );
  let newArr: string[] = Array.from(new Set(arr));
  return cb(newArr);
};

// Do not edit the code below.
uniq(names, function (uniqArr) {
  console.log(
    "The new names array with all the duplicate items removed is ",
    uniqArr
  );
});
// Do not edit the code above.

////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

//Code Here
const each = (
  arr: string[],
  cb: {
    (item: string, indice: number): void;
  }
) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

// Do not edit the code below.
each(names, function (item, indice) {
  console.log("The item in the " + indice + " position is " + item);
});
// Do not edit the code above.

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here
const getUserById = (users, id: string, cb: { (users: any): void }) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      cb(users[i]);
    }
  }
};
// Do not edit the code below.
interface Users {
  [index: number]: { id: string; email: string; name: string; address: string };
}
var users: Users = [
  {
    id: "12d",
    email: "tyler@gmail.com",
    name: "Tyler",
    address: "167 East 500 North",
  },
  {
    id: "15a",
    email: "cahlan@gmail.com",
    name: "Cahlan",
    address: "135 East 320 North",
  },
  {
    id: "16t",
    email: "ryan@gmail.com",
    name: "Ryan",
    address: "192 East 32 North",
  },
];

getUserById(users, "16t", function (user) {
  console.log(
    "The user with the id 16t has the email of " +
      user.email +
      " the name of " +
      user.name +
      " and the address of " +
      user.address
  );
});
// Do not edit the code above.
