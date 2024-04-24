// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

console.log(squareSum([3]));

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  //code here
  const arrayOfDigits = Array.from(String(n), Number);
  return arrayOfDigits.reverse();
}
console.log(digitize(4244));

//   Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(2, 3, 4));

//   Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
  // code away
  let nombre = name.split("");
  let resultado = nombre.includes(" ")
    ? nombre[0] + "." + nombre[nombre.indexOf(" ") + 1]
    : nombre[0];
  let resultadoMayus = resultado.toUpperCase();
  return resultadoMayus;
}
console.log(abbrevName("John laco"));

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.map((number) => -number);
}

console.log(invert([-2, 3, 4]));

//  Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === "R" || name[0] === "r") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlayingBanjo("raco"));

//   Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  // your code here
  let array1 = [];
  for (let i = a; i <= b; i++) {
    array1.push(i);
  }
  return array1;
}

console.log(between(2, 9));

//   The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function sayHello(name) {
  return `Hello, ${name}`;
}

console.log(sayHello("Paco"));

//   You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([2, -4, -10, 23]));

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
  //Write your own Code!
  var num;
  switch (number) {
    case 0:
      num = "Zero";
      break;

    case 1:
      num = "One";
      break;

    case 2:
      num = "Two";
      break;

    case 3:
      num = "Three";
      break;

    case 4:
      num = "Four";
      break;

    case 5:
      num = "Five";
      break;

    case 6:
      num = "Six";
      break;

    case 7:
      num = "Seven";
      break;

    case 8:
      num = "Eight";
      break;

    case 9:
      num = "Nine";
      break;
  }
  return num;
}

console.log(switchItUp(0));

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  //...

  let nums = n.toString();
  console.log(nums);
  let numsArr = nums.split("");
  console.log(numsArr);
  numsArr.sort((num1, num2) => num2 - num1);
  let numerosFinales = parseInt(numsArr.join(""));
  return numerosFinales;
}

//   function descendingOrder(n) {
//
//     const digits = Array.from(String(n), Number);

//     const sortedDigits = digits.sort((a, b) => b - a);

//     const result = parseInt(sortedDigits.join(''), 10);

//     return result;
//   }

console.log(descendingOrder(654754));

let n = 5439943;
let nums = n.toString();
console.log(nums);
let numsArr = nums.split("");
console.log(numsArr);
numsArr.sort((num1, num2) => num2 - num1);
let numerosFinales = numsArr.join("");
console.log(numerosFinales);

//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  // ...
  let arrayFin = [];
  let arrayNumbers = numbers.split(" ");
  console.log(arrayNumbers);
  let numsOrden = arrayNumbers.sort((a, b) => b - a);
  arrayFin.push(numsOrden[0], numsOrden[numsOrden.length - 1]);
  let arrayJunto = arrayFin.join(" ");
  return arrayJunto.toString("");
}

console.log(highAndLow("1 4 6 2 -4"));

//   In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  //your code here
  let complementarios = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  let compFin = Array.from(dna, (caract) => complementarios[caract]).join("");
  return compFin;
}

console.log(DNAStrand("TACG"));

// Aumentar letras por su indice

function accum(s) {
  // your code
  let palabra = s.split(""); //Convertimos la palabra en array
  console.log(palabra);
  let resultado = palabra.map((caract, indice) => {
    let resultadoRepetido =
      caract.toUpperCase() + caract.toLowerCase().repeat(indice);
    return resultadoRepetido;
  }); // Mapeamos el array para iterarlo y agregar lo que se pide, en este caso 1 mayuscula y el resto minusculas repitiendo la cantidad respecto a su indice
  console.log(resultado);
  return resultado.join("-");
}

console.log(accum("sdgsd"));

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  // TODO: complete
  return str.endsWith(ending);
}

console.log(solution("Holalaaa", "laaa"));

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function (str) {
  // put your code here
  const numb = parseInt(str);
  return numb;
};

console.log(stringToNumber("35435353"));

//   Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
  //Code here
  if (numbers.length >= 4) {
    let numbersOrd = numbers.sort((a, b) => a - b);
    console.log(numbersOrd);
    return numbersOrd[0] + numbersOrd[1];
  }
}
console.log(sumTwoSmallestNumbers([1, 23, 4, 64, 3]));

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(4, "hola"));

//   You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  // your code here
  return a.includes(x);
}

console.log(check([12, 34, 54, 23], 34));

//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log(disemvowel("iasoidashsiuhyriuqw LOL"));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

function solution(number) {
  if (number < 0) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    } else {
    }
  }
  return result;
}

console.log(solution());

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  return a.filter((number) => !b.includes(number));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
  //TODO
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

var maxSequence = function (arr) {
  // ...
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  text = text.toUpperCase();
  let resultado = "";
  for (let i = 0; i < text.length; i++) {
    let letraActual = text[i];
    if (letraActual >= "A" && letraActual <= "Z") {
      resultado += letraActual.charCodeAt(0) - "A".charCodeAt(0) + 1 + " ";
    }
  }
  return resultado.trim();
}

console.log(alphabetPosition("HOLA manola"));

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

function add(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  let resultado = a + b;
  return resultado.toString(); // Fix me!
}

console.log(add("233.33", "434.464654"));

// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

function ipsBetween(start, end) {
  //TODO
  let primerArray = start.split(".").map(Number);
  let ultimoArray = end.split(".").map(Number);
  console.log(primerArray);
  console.log(ultimoArray);

  let result = 0;
  for (let i = 0; i < 4; i++) {
    result = result * 256 + (ultimoArray[i] - primerArray[i]);
  }

  return result;
}
console.log(ipsBetween("192.168.0.0", "192.168.1.0"));

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

function zeros(n) {
  // your code here
  let contador = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    contador += n;
  }
  console.log(n);
  return contador;
}

console.log(zeros(20));

// Define a function that takes in two non-negative integers
// �
// a and
// �
// b and returns the last decimal digit of
// �
// �
// a
// b
//  . Note that
// �
// a and
// �
// b may be very large!

var lastDigit = function (str1, str2) {
  let n1 = parseInt(str1);
  let n2 = parseInt(str2);
  let numFin = Math.pow(n1, n2);
  let numToString = numFin.toString();
  console.log(numToString);
  for (let i = 0; i < numToString; i++) {
    return parseInt(numToString[numToString.length - 1]);
  }
};

console.log(lastDigit("7", "4"));

// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

function pickPeaks(arr) {
  let resultado = { pos: [], peaks: [] };

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      let peakPos = i;
      let peakValue = arr[i];

      if (arr[i] === arr[i + 1] && i < arr.length - 1) {
        i++;
      }
      if (arr[i] > arr[i + 1]) {
        resultado.pos.push(peakPos);
        resultado.peaks.push(peakValue);
      }
    }
  }
  return resultado;
}
console.log(pickPeaks([0, 1, 2, 5, 1, 0]));

function pickPeaks(arr) {
  var result = { pos: [], peaks: [] };

  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      var peakPos = i;
      var peakVal = arr[i];

      // Check if the current peak is a plateau
      while (arr[i] === arr[i + 1] && i < arr.length - 1) {
        i++;
      }

      // If the current peak is greater than or equal to the next element, it's a peak
      if (arr[i] >= arr[i + 1]) {
        result.pos.push(peakPos);
        result.peaks.push(peakVal);
      }
    }
  }

  return result;
}

// String incrementer 5kyu. Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

function incrementString(strng) {
  // return incrementedString
}

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world", "this", "is", "great"]));
