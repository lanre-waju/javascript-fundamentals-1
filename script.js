/*
////////////////////////////////////
LINKING A JAVASCRIPT FILE
let js = "amazing";
console.log(40 + 8 + 23 - 10);


////////////////////////////////////
VALUES AND VARIABLES
console.log("lanre");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);



////////////////////////////////////
VARIABLE NAME CONVENTIONS
let jonas_matilda = "JM";
let $function = 27;

let person = "lanre";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);



////////////////////////////////////
DATA TYPES
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


////////////////////////////////////
LET, CONST, AND VAR
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
const job;

var job = "programmer";
job = "teacher";

lastName = "Fagbeyiro";
console.log(lastName);


////////////////////////////////////
ASSIGNMENT OPERATORS
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);



////////////////////////////////////
COMPARISON OPERATORS
console.log(ageLanre > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



////////////////////////////////////
OPERATOR PRECEDENCE
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////
CODING CHALLENGE #1

Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).(mass in kg and height in meter).

1. Store Mark 's and John'
s mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both versions)
3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.

GOOD LUCK😀


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);




////////////////////////////////////
STRINGS AND TEMPLATE LITERALS
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


let tweet = prompt("Compose your tweet");
let tweetCount = tweet.length;
alert(`You have written ${tweetCount} characters, you have ${140 - tweetCount} characters remaining`);


TEMPLATE STRINGS
const title = "Best reads of 2021";
const author = "Mario";
const likes = 30;

CONCATENATION WAY
let result = "The blog called " + title + " by " + author + " has " + likes + " likes.";
console.log(result);

TEMPLATE STRING WAY
let result = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result);

CREATING HTML TEMPLATES
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);



////////////////////////////////////
SLICING AND EXTRACTING STRINGS
let tweet = prompt("Compose your tweet");
let tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);
////////////////////////////////////
// On one line
alert(prompt("Compose your tweet:").slice(0, 140));


////////////////////////////////////
STRING METHODS

let email = 'toniaxy@gmail.com';

let sli = email.slice(0, 7);
console.log(sli);
// toniaxy

let slc = email.slice(4, 7);
console.log(slc);
// axy

let lastOne = email.slice(-1);
console.log(lastOne);
// m

let lastTwo = email.slice(-2);
console.log(lastTwo);
// om

let lastThree = email.slice(-3);
console.log(lastThree);
// com

let sub = email.substr(4, 7);
console.log(sub); 
// axy@gma

let subb = email.substring(4, 7);
console.log(subb)
// axy

let rep = email.replace('t', 'm');
console.log(rep);
// moniaxy@gmail.com

let greeting = "     leave me alone    "
console.log(greeting);
//      leave me alone  
console.log(greeting.trim());
// leave me alone



////////////////////////////////////
CHAINING METHODS
let say = "    hello world!    "
say.trim().toUpperCase();
console.log(say);
// "HELLO WORLD!"




////////////////////////////////////
CODING CHALLENGE #2

Create a prompt that asks for the user's name like "What is your name" and gives an alert of Hello, user's name in capitalized form making the first letter of the name in uppercase and rest of the letters of the name in lower case.

1. Create a variable that stores the name that user enters via prompt.
let name = prompt('What is your name?');


2. Capitalize the first letter of their name.

a. Isolate the first char
let firstChar = name.slice(0, 1).toUpperCase();

b. Turn the first char to upper case
let upperCaseFirstChar = firstChar.toUpperCase();

c. Isolate the rest of the name
let restOfName = name.slice(1, name.length);

d. Change the rest of the name to lowercase
restOfName = restOfName.toLowerCase();

e. Concatenate the first char with the rest of the char
let  capitalisedName = upperCaseFirstChar + restOfName;


3. We use the capitalized version of their name to greet them using alert.
alert('Hello, ' + capitalisedName);
OR
alert(`Hello, ${capitalisedName}`);





////////////////////////////////////
BOOLEANS AND COMPARISONS
console.log(true, false, "true", "false");

METHODS CAN RETURN BOOLEANS
let email = "toniaxy@gmail.com";
let names = ["lanre", "eniola", "tunde"];

let yes = email.includes("@");
let no = email.includes("!");

let pos = names.includes("eniola");
let neg = names.includes("tayo");

console.log(yes);
console.log(no);

console.log(pos);
console.log(neg);


COMPARISON OPERATORS
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age != 25);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);


let identity = "Lanre";

console.log(identity == "Lanre");
console.log(identity == "lanre");
console.log(identity < "lanre");
console.log(identity > "eniola");





////////////////////////////////////
BASIC ARITHMETIC OPERATORS
Dog Age to Human Age Formula

let dogAge = prompt('How old is your dog?');
humanAge = (dogAge - 2)*4 + 21;
alert('Your dog is ' + humanAge + ' years old in human years.');
OR
alert(`Your dog is ${humanAge} years old in human years.`);



////////////////////////////////////
INCREMENT AND DECREMENT EXPRESSIONS
INCREMENT BY ONE
let x = 5;
x = x + 1; 
x = 6;
OR
x++;
console.log(x++);
x = 6;

INCREMENT BY MORE THAN ONE
let a = 5;  
a = a + 2;
a = 7;
OR
a+=2;
console.log(a); 
a = 7;  


DECREMENT BY ONE
let y = 5;
y = y - 1; 
y = 4;
OR
y--;
console.log(y--);
y = 4;

DECREMENT BY MORE THAN ONE
let b = 5;
b = b - 2;
b = 3; 
OR
b-=2;
console.log(b);  
b = 3;


console.log(x+=y);
6 + 4 = 10;

console.log(a-=b);
7 - 3 = 4;




////////////////////////////////////
RANDOM NUMBER AND MATH OBJECT
RANDOM NUMBER
console.log(Math.random());
// 0.20717756842413726

MATHEMATICAL CONSTANT 
console.log(Math.PI);
// 3.141592653589793

ROUNDING A NUMBER
console.log(Math.round(4.9));
// 5

ABSOLUTE VALUE
console.log(Math.abs(-456));
// 456

RAISES TO THE FIFTH POWER
console.log(Math.pow(2,5));
// 32

REMOVES DECIMAL
console.log(Math.floor(3.9999));
// 3

ROUNDS UP TO THE NEXT LARGEST INTEGER
console.log(Math.ceil(34.1));
console.log(Math.ceil(34.9999));
// 35

PSEUDO RANDOM NUMBER GENERATOR BETWEEN I AND 6
let n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);


PSEUDO RANDOM NUMBER GENERATOR BETWEEN I AND 100
prompt("What is your name?");
prompt("What is your lover's name?");
let loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);
alert(`Your love score is ${loveScore}% 😁`);



////////////////////////////////////
CONDITIONAL STATEMENTS
IF STATEMENTS

const age = 25;

if (age > 20) {
    console.log("You are over 20 years old")
}

const sibs = ["lanre", "eniola", "tunde", "bimbo"];

if (sibs.length > 3) {
    console.log("That's a lot of sibs");
}

const password = "passifier";

if (password.length >= 8) {
    console.log("That password is long enough!");
}


ELSE IF STATEMENTS

const password = "passwordoflife";

if(password.length >= 12) {
    console.log("That password is mighty strong!");
}else if(password.length >= 8) {
    console.log("That password is long enough!");
}   else {
    console.log("password is not long enough!");
}




////////////////////////////////////
TAKING DECISIONS (CONTROL STATEMENTS): IF / ELSE STATEMENTS
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);





////////////////////////////////////
LOVE CALCULATOR(100 % LOVE SCORE)
prompt("What is your name?");
prompt("What is your lover's name?");


let loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if (loveScore > 70) {
  alert(`Your love score is ${loveScore}%. You love each other like Kanye loves Kanye.😍`);
}

if (loveScore > 30 && loveScore <= 70) {
  alert(`Your love score is ${loveScore}%.😊`);
}

if (loveScore <= 30) {
} alert(`Your love score is ${loveScore}%. You go together like oil and water.😂`);


/*
////////////////////////////////////

CODING CHALLENGE #3


Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}

////////////////////////////////////
TYPE CONVERSION AND COERCION

TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


TYPE COERCION
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);



////////////////////////////////////
EXPLICIT TYPE CONVERSION
let score = "100";

score = Number(score);
console.log(score + 1);
console.log(typeof score);


let num = Number("hello");
let str = String(50);


console.log(num, typeof num);
console.log(str, typeof str);


let boo = Boolean(100);
let lee = Boolean(0);
let con = Boolean("0");
let emp = Boolean("");


console.log(boo, typeof boo);
console.log(lee, typeof lee);
console.log(con, typeof con);
console.log(emp, typeof emp);




////////////////////////////////////
TRUTHY AND FALSY VALUES

5 FALSY VALUES: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
LOOSE VS STRICT COMPARISON  == vs. ===
let age = 25


LOOSE COMPARISON (DIFFERENT TYPES CAN STILL BE EQUAL)

console.log(age == 25);
console.log(age == "25");
console.log(age != 25);
console.log(age != "25");

STRICT COMPARISON (DIFFERENT TYPES CANNOT BE EQUAL)

console.log(age === 25);
console.log(age === "25");
console.log(age !== 25);
console.log(age !== "25");

EQUALITY OPERATORS: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else { 
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');




////////////////////////////////////
LOGICAL OPERATORS: LOGICAL AND &&, LOGICAL OR ||, LOGICAL NOT !
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}



LOGICAL OPERATORS: OR || & AND && 
const password = "passwordoflife";

if(password.length >= 12 && password.includes("@")) {
    console.log("That password is mighty strong!");
}else if(password.length >= 8 || password.includes("@") && password.length >= 5) {
    console.log("That password is long enough!");
}   else {
    console.log("password is not long enough!");
}


LOGICAL OPERATORS: NOT !




*/

/*
////////////////////////////////////
CODING CHALLENGE #3


There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}



////////////////////////////////////
THE SWITCH STATEMENT
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
STATEMENTS AND EXPRESSIONS
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
THE CONDITIONAL (Ternary) OPERATOR
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

/*

////////////////////////////////////
CODING CHALLENGE #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/