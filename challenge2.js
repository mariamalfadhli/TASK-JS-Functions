/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */


function greet(myName) {
  console.log(`Hello ${myName}`)
}
greet("Maryam"); 
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
 if (n % 2 == 1)
 console.log("True")
 else 
 console.log("False");
}
isOdd(4);
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let sum =0;
  for (let i = 1; i < n; i++) {
    if (i % 2 == 1) 
    sum = sum +1;
    
}
console.log(sum);
  }

  oddsSmallerThan(15);
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

function squareOrDouble(n) {
  if (n%2==1){console.log(`squareOrDouble (${n}) -> ${n*n}`)}
  else if (n%2==0){console.log(`squareOrDouble(${n}) -> ${n*2}`)}
}
squareOrDouble(5);