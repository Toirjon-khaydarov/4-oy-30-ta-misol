// Easy------------------------------------------
// 1-misol

// function reverseArray(arr) {
//     return arr.reverse();
//   }

//   const teskari = [1, 2, 3, 4, 5];
//   const reversedArray = reverseArray(teskari);

//   console.log(reversedArray);

//   2-misol

// function toUpperCaseString(k) {
//     return k.toUpperCase();
//   }

//   const kattasi = "hello";
//   const natija = toUpperCaseString(kattasi);

//   console.log(natija);

// 3-misol (1-usul)

// function addElementToArray(a, b) {
//     a.push(b);
//     return a;
//   }

//   let n = [1, 2, 3];
//   const nN = 5;
//   javob = addElementToArray(n, nN);

//   console.log(javob);

//   3-misol (2-usul)

// function addElementToArray(n, nN) {
//     n.push(nN);
//   }

//   let n = [5, 6, 7];
//   addElementToArray(n, 8);
//   console.log(n);

// 4-misol

// function arrLength(sonlar) {
//     return sonlar.length;
//   }

//   let qiymat = [7, 8, 9, 11, 6];
//   const length = arrLength(qiymat);

//   console.log(length);

// 5-misol

// function replaceInString(a, b, c ) {
//     a = a.replace(b, c);
//     console.log(a);
//   }

//   const word = "Hello World";
//   replaceInString(word, "World", "JavaScript");

// 6-misol

// const getFirstElem = () => [2, 7, 9][0];

// let javob = getFirstElem();

// console.log(javob);

// 7-misol

// function getStrLength(str) {
//     return str.length;
//   }

//   let republic = "Uzbekistan";
//   let natija = getStrLength(republic);

//   console.log("natija - " + natija + " ta harifdan iborat");

// 8-misol

// function addElementToStart() {
//     let numbers = [3, 6, 9];
//     const newElem = 5;

//     numbers.unshift(newElem);
//     return numbers;
//   }

//   let qoshilgan = addElementToStart();

//   console.log(qoshilgan);

// 9-misol

// function toLowerCaseString(str) {
//     return str.toLowerCase();
//   }

//   let word = "JAVASCRIPT";
//   let natija = toLowerCaseString(word);

//   console.log(natija);

// 10-misol

// function arrayToString() {
//     let a = ["apple", "banana", "cherry"];
//     return a.join(", ");
//   }

//   const javob = arrayToString();

//   console.log(javob);

// Medium---------------------------------------------------

// 1-misol

// function sortArrayAsc() {
//     let nums = [5, 2, 9, 1, 7];
//     let k = nums.sort((a, b) => a - b);
//     return k;
//   }

//   let result = sortArrayAsc();

//   console.log(result);

// 2-misol

// function splitString() {
//     let a = "apple, banana, cherry";
//     return a.split(", ");
//   }

//   console.log(splitString());

// 3-misol

// function qiymatnitopish() {
//     let arr = [1, 2, 3, 4, 5];
//     const qidiriladigan = 3;
//     return arr.includes(qidiriladigan);
//   }

//   console.log(qiymatnitopish());

// 4-misol

// function f() {
//   let wordIs = "JavaScript";
//   let a = 0;
//   let z = 4;
//   return wordIs.slice(a, z);
// }

// console.log(f());

// 5-misol

// function a() {
//     let b = [1, 2, 3, 4, 5, 6];
//     return b.filter(son => son % 2 === 0);
//   }

//   console.log(a ());

// 6-misol

// function a() {
//     let str = "hello world";
//     let word = "world";
//     return str.includes(word);
//   }

//   console.log(a());

// 7-misol

// function ind() {
//     let arr = [10, 20, 30, 40];
//     const a = 30;
//     return arr.indexOf(a);
//   }

//   console.log(ind());

// 8-misol

// function sliceyS() {
//   let k = [1, 2, 3, 4, 5];
//   let a = 1;
//   let z = 3;
//   return k.slice(a, z);
// }

// console.log(sliceyS());

// 9-misol

// function getSum() {
//   let n = [5, 10, 15];
//   return n.reduce(function (s, n) {
//     return s + n;
//   }, 0);
// }

// console.log(getSum());

// 10-misol

// function f() {
//   let str = "123-456-789";
//   let a = "-";
//   let b = " ";
//   return str.replaceAll(a, b);
// }

// console.log(f()); // "123 456 789"

// 11-misol

// function kattasi() {
//     let numbers = [1, 5, 3, 9, 2];
//     return Math.max(...numbers);
//   }

//   console.log("natija - " + kattasi());

// 12-misol

// function abc() {
//     let kango = ["orange", "apple", "banana"];
//     return kango.sort();
//   }

//   console.log(abc());

// 13- misol

// const juft = () => {
//   let a = [2, 4, 6]; // Berilgan massiv
//   return a.every((n) => n % 2 === 0);
// };

// console.log(juft());

// 14-misol

// function teskari() {
//   let str = "javascript";
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(teskari());

// // 15-misol

// function ikkiiiiiii() {
//     let a = [1, 2, 3, 4];
//     return a.map(n => n + 2);
//   }

//   console.log(ikkiiiiiii());

// Hard-----------------------------------------------------

// 1-misol

// const zerkalniy = () => {
//     const z = prompt("Iltimos, madam yoki salom so'zlaridan birini kiriting:");
//     const reversed = z.split("").reverse().join("");

//     if (z === reversed) {
//         return true;
//     } else {
//       return false;
//     }
//   }

//   console.log("palindromligi: " + zerkalniy());

// 2-misol

// const random = (a, n) => a.sort(() => 0.5 - Math.random()).slice(0, n);

// const son = [1, 2, 3, 4, 5, 6, 7, 8];
// const n = 3;
// const nomalumSonlar = random(son, n);

// console.log(nomalumSonlar);

// 4-misol
// (yaxshi tushunmadim shunisiga)
function tt(a) {

  return a.reduce((b, c) => {
    return b.concat(Array.isArray(c) ? tt(c) : c); 
  }, []);
}

let kirish = [1, [2, 3], [4, [5, 6]]]; 
let tekis = tt(kirish); 

console.log(tekis); 



