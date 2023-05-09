/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(){console.log("Maryam")};
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear){
    let age = 2023 - birthYear;
    console.log(age)}

printAge(1998);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(myName,language){
    if (language == "en"){console.log(`Hello ${myName}`)}
    else if (language == "es"){console.log(`Hola ${myName}`)}
    else if (language == "fr"){console.log(`Bonjour ${myName}`)}
    else if (language == "tr"){console.log(`Merhaba ${myName}`)}
}

printHello("Maryam", "fr")
   

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */


function printMax(x,y){
    if (x>y){console.log(`${x} is bigger than ${y}`)}
    else if (x<y){console.log(`${y} is bigger than ${x}`)}
    else console.log(`they are equal`);

}

printMax(1,10);