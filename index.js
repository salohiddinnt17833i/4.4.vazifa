// Uchburchak yasash mumkun yoki mumkun emas
// let num1 = 13;
// let num2 = 21;
// let num3 = 32;
// let res = `Yasash mumkun emas `;
// if ((num1 + num2) >= num3) {
//     if ((num2 + num3) >= num2) {
//         if ((num3 + num2) >= num1) {
//             res = ` yasash mumkun`
//         }
//     }
// }
// console.log(res); 
// let  number = 423
// let b = number % 10;
// let y = (number - number % 100) / 100;
// let res = ` palindrom emas`
// if (b == y) {
//     res = ` Palidrom son`
// }
// console.log(res);
// let a = 10;
// let b = 15;
// let c = 31;
// let res = 0;
// if (a % 3 == 0 && a % 5 == 0) {
//     res += a
// }
// if (b % 3 == 0 && b % 5 == 0) {
//     res += b
// }
// if (c % 3 == 0 && c % 5 == 0) {
//     res += c
// }
// console.log(res);
// berilhan sonni 3 ga karrali yoki juftlikka tekshiring
// let num = 15;
// let res = `false`;
// if (num % 3 == 0 || num % 2 == 0) {
//     res = `True`
// }
// console.log(res);
// 2
// let age = 21;
// let result = `False`
// if (age > 20 && age < 90) {
//     result = ` True`
// }
// console.log(result);
// console.log();
//TERNARY aperotori 
// let a = 4;
// res = a % 2 == 0 ? `juft` : ` toq`
// console.log(res);
/**
 * let a = 5.3872
 * Math
 * Math.floor(a)
 * Math.ceil(a)
 * Math.trunc(a)
 * Math.round(a) 
 * Math.abs(a) // Manfiy bolsa musbat musbat bolsa musbat
 * Math.random() * 10 //Nol va 1 orasidagi tasodifiy son yasasb beradi
 */






/**
 * 1 Masala
 */
// let number = 4726;
// let counter = 0;
// // let m = (number - number % 1000) / 1000
// let m = Math.trunc(number / 1000);
// let y = Math.trunc((number / 100) % 10);
// let o = Math.trunc((number / 10) % 10);
// let b = number % 10;
// if (m % 2 == 0) {
//     counter += 1
// }
// if (y % 2 == 0) {
//     counter += 1
// }
// if (o % 2 == 0) {
//     counter += 1
// }
// if (b % 2 == 0) {
//     counter += 1
// }
// console.log(counter);

/**
 * 2 Masala
 */
// let number = 532;
// let y = Math.trunc(number / 100);
// let o = Math.trunc((number / 10) % 10);
// let b = number % 10;
// let sum = y + o + b;
// let res = `false`
// res = sum % 2 == 0 && sum % 5 == 0 ? `true` : `false`
// console.log(res);


/**
 * 3 Masala
*/
// let num1 = 33;
// let num2 = 31;
// let num3 = 34;
// let res = Math.trunc((num1 + num2 + num3) / 3);
// console.log(res);


/**
 * 4 Masala
 */
// let number = 33;
// let res = `Palindrom son emas`;
// // let m = (number - number % 1000) / 1000
// let m = Math.trunc(number / 1000);
// let y = Math.trunc((number / 100) % 10);
// let o = Math.trunc((number / 10) % 10);
// let b = number % 10;

// if (m == b & o == y) {
//     res = `Palindrom son`
// }
// if (y == b) {
//     res = `Palindrom son`
// }
// if (o == b) {
//     res = `Palindrom son`
// }
// console.log(res);


/**
 * Alisher Masala
 * Sayohat
 */
// let money = +prompt(`Pulingizni kiriting`)
// let AllPrice = (500 * 11000) + (250 * 11000) + (120 * 12354);
// let res = `Alisher ozgina sabr qilishi kerak`;
// if (money >= AllPrice) {
//     res = `Oq yol Alisher`;
// }

// console.log(res);
