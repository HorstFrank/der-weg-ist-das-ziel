export const getRand = (min: Number, max: Number) =>
  parseInt(Math.random() * (max - min) + min);

// export function lastArrayItem () { return this[this.length - 1];}
// export function randArrayItem () { return this[Math.floor(Math.random() * this.length)];}
// export function getObjectValueByKey (value: any) { return Object.keys(this).find((key) => this[key] === value);}
// export function countArrayValue (val: any) { return this.reduce((a, v) => (v === val ? a + 1 : a), 0);}

// if (!Array.prototype.getObjectArrAttrMax) {
//   Array.prototype.getObjectArrAttrMax = function (a) {
//     return this.reduce( (max, data) => (data[a] > max ? data[a] : max), this[0][a] );
//   };
// }

/*
  
  //---------------------------------------------------------------------------
if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
}
//---------------------------------------------------------------------------
if (!Array.prototype.getRandItem) {
  /* liefert ein zufälliges element eines arrays */
//   Array.prototype.getRandItem = function () {
//     return this[Math.floor(Math.random() * this.length)];
//   };
// }
//---------------------------------------------------------------------------
// if (!Array.prototype.getKeyByValue) {
/* liefert den schlüssel eines arrayelementes */
//   Array.prototype.getKeyByValue = function (value) {
//     return Object.keys(this).find((key) => this[key] === value);
//   };
// }
//---------------------------------------------------------------------------
// if (!Array.prototype.countOccurrences) {
// This snippet counts the occurrences of a value in an array.
//   Array.prototype.countOccurrences = function (val) {
//     return this.reduce((a, v) => (v === val ? a + 1 : a), 0);
//   };
// }
//---------------------------------------------------------------------------

// if (!Array.prototype.getObjectArrAttrMax) {

//   Array.prototype.getObjectArrAttrMax = function (a) {
//     return this.reduce( (max, data) => (data[a] > max ? data[a] : max), this[0][a] );
//   };
// }

/*
SUM
console.log(
  [1, 2, 3, 4].reduce((a, b) => a + b, 0)
)
console.log(
  [].reduce((a, b) => a + b, 0)
)


*/

//const arrayToCount = [1, 2, 3, 5, 2, 8, 9, 2];
//const result = arrayToCount.filter(i => i === 2).length;
//console.log('number of the found elements: ' + result);

//Append an array to another array
// var array1 = [12 , "foo" , {name "Joe"} , -2458];
// var array2 = ["Doe" , 555 , 100];
// Array.prototype.push.apply(array1, array2);

// Transform the arguments object into an array
// var argArray = Array.prototype.slice.call(arguments);

// This snippet converts a non-array value into array.
// const castArray = val => (Array.isArray(val) ? val : [val]);
// castArray('foo'); // ['foo']
// castArray([1]); // [1]

// This snippet removes false values from an array.
// const compact = arr => arr.filter(Boolean);
// compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
// // [ 1, 2, 3, 'a', 's', 34 ]

//This snippet flattens an array recursively.
// const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
// deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

//---------------------------------------------------------------------------

//Verify that a given argument is a number
// function isNumber(n){
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

//Get the max or the min in an array of numbers
// var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
// var maxInNumbers = Math.max.apply(Math, numbers);
// var minInNumbers = Math.min.apply(Math, numbers);

//Empty an array
// var myArray = [12 , 222 , 1000 ];
// myArray.length = 0; // myArray will be equal to [].

//An HTML escaper function
// function escapeHTML(text) {
//   var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", """: "&quot;"};
//   return text.replace(/[<>&"]/g, function(character) {
//       return replacements[character];
//   });
// }

//This snippet checks whether all elements of the array are equal
// const allEqual = arr => arr.every(val => val === arr[0]);
// allEqual([1, 2, 3, 4, 5, 6]); // false
// allEqual([1, 1, 1, 1]); // true

// arrayToCSV
// const arrayToCSV = (arr, delimiter = ',') =>
//   arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
// arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
// arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'

//This snippet converts the elements of an array into <li> tags and appends them to the list of the given ID.
// const arrayToHtmlList = (arr, listID) =>
//   (el => (
//     (el = document.querySelector('#' + listID)),
//     (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
//   ))();
// arrayToHtmlList(['item 1', 'item 2'], 'myListID');

//This snippet returns the average of two or more numerical values.
// const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
// average(...[1, 2, 3]); // 2
// average(1, 2, 3); // 2

// This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function.
// const averageBy = (arr, fn) =>
//   arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
//   arr.length;
// averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
// averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5

// This snippet checks whether the bottom of a page is visible.
// const bottomVisible = () =>
//   document.documentElement.clientHeight + window.scrollY >=
//   (document.documentElement.scrollHeight || document.documentElement.clientHeight);
// bottomVisible(); // true

//This snippet returns the length of a string in bytes.
// const byteSize = str => new Blob([str]).size;
// byteSize('😀'); // 4
// byteSize('Hello World'); // 11

// This snippet capitalizes the first letter of a string.
// const capitalize = ([first, ...rest]) =>
//   first.toUpperCase() + rest.join('');
// capitalize('fooBar'); // 'FooBar'
// capitalize('fooBar', true); // 'FooBar'

// This snippet capitalizes the first letter of every word in a given string.
// const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
// capitalizeEveryWord('hello world!'); // 'Hello World!'

// This snippet returns the current URL.
// const currentURL = () => window.location.href;
// currentURL(); // 'https://medium.com/@fatosmorina'

//This snippet gets the day of the year from a Date object.
// const dayOfYear = date =>
//   Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// dayOfYear(new Date()); // 272

//This snippet turns the first letter of a string into lowercase.
// const decapitalize = ([first, ...rest]) =>
//   first.toLowerCase() + rest.join('')
// decapitalize('FooBar'); // 'fooBar'
// decapitalize('FooBar'); // 'fooBar'

//This snippet assigns default values for all properties in an object that are undefined.
// const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);
// defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }

//This code snippet can be used to convert a value from degrees to radians.
// const degreesToRads = deg => (deg * Math.PI) / 180.0;
// degreesToRads(90.0); // ~1.5708

//This snippet finds the difference between two arrays.
// const difference = (a, b) => {
//   const s = new Set(b);
//   return a.filter(x => !s.has(x));
// };
// difference([1, 2, 3], [1, 2, 4]); // [3]

// This snippet gets a number as input and returns an array of its digits.
// const digitize = n => [...`${n}`].map(i => parseInt(i));
// digitize(431); // [4, 3, 1]

//This snippet returns the distance between two points by calculating the Euclidean distance.
// const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
// distance(1, 1, 2, 3); // 2.23606797749979

// This snippet returns a new array with n elements removed from the left.
// const drop = (arr, n = 1) => arr.slice(n);
// drop([1, 2, 3]); // [2,3]
// drop([1, 2, 3], 2); // [3]
// drop([1, 2, 3], 42); // []

// This snippet returns a new array with n elements removed from the right.
// const dropRight = (arr, n = 1) => arr.slice(0, -n);
// dropRight([1, 2, 3]); // [1,2]
// dropRight([1, 2, 3], 2); // [1]
// dropRight([1, 2, 3], 42); // []

//This snippet removes elements from the right side of an array until the passed function returns true.
// const dropRightWhile = (arr, func) => {
//   while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
//   return arr;
// };
// dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

// This snippet removes duplicate values in an array.
// const filterNonUnique = arr => [ …new Set(arr)];
// filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

// This snippet iterates on each property of an object and iterates a callback for each one respectively.
// const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
// forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1

// This snippet can be used to get the time from a Date object as a string.
// const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
// getColonTimeFromDate(new Date()); // "08:38:00"

// This snippet can be used to find the difference in days between two dates.
// const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
//   (dateFinal - dateInitial) / (1000 * 3600 * 24);
// getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2

// This snippet can be used to get an array with elements that are included in two other arrays.
// const intersection = (a, b) => {
//   const s = new Set(b);
//   return a.filter(x => s.has(x));
// };
// intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

// This snippet can be used to check whether a particular string is an anagram with another string.
// const isAnagram = (str1, str2) => {
//   const normalize = str =>
//     str
//       .toLowerCase()
//       .replace(/[^a-z0-9]/gi, '')
//       .split('')
//       .sort()
//       .join('');
//   return normalize(str1) === normalize(str2);
// };
// isAnagram('iceman', 'cinema'); // true

// This snippet can be used to check if a provided argument is iterable like an array.
// const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
// isArrayLike(document.querySelectorAll('.className')); // true
// isArrayLike('abc'); // true
// isArrayLike(null); // false

// This snippet can be used to check whether an argument is a boolean.
// const isBoolean = val => typeof val === 'boolean';
// isBoolean(null); // false
// isBoolean(false); // true

// If you have ever written a plugin, you have almost certainly faced the problem of merging two or more objects. This often happens when you have some default settings and want the user to be able to replace some of the default values. If you were using jQuery, you could use extend(), but since we’re talking about raw JavaScript, the bad news is that there’s no native function. Luckily, you can easily build it yourself. The following example will show you how to create code that works the same way as the jQuery method. I add our extend() method to the Object prototype so that all objects can share the same method.
// Object.prototype.extend = function() {
//   if (arguments.length === 0)
//     return this;

//   for (var i = 0; i < arguments.length; i++) {
//     for (var property in arguments[i]) {
//       if (arguments[i].hasOwnProperty(property))
//         this[property] = arguments[i][property];
//     }
//   }
//   return this;
// };

// inArray()
// Array.prototype.inArray = function (value) {
//   for (var i = 0; i < this.length; i++) {
//     if (this[i] === value)
//       return true;
//   }
//   return false;
// };

//---------------------------------------------------------------------------
