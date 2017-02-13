/** Created by Taiwo Amao , email: amaotaiwo08@gmail.com on 2/11/2017
 * A function that finds out the prime numbers between 1 and the number supplied.
 * It returns the prime numbers in an array.  **/


function getPrimes(n) {
  if (typeof n !== "number") {
    return "Kindly supply a valid number!";
  } else if (n < 1) {
      return "[]";
  } else {
    var nonprimes = [],  // Array of non prime numbers
      i,
      j,
      primes = []; // Array of prime numbers
    for (i = 2; i <= n; ++i) {
      if (!nonprimes[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= n; j += i) {
          nonprimes[j] = true;
        }
      }
    }
    return primes;  // Array of prime numbers
  }
}

console.log(getPrimes(1));