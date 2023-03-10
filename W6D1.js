// function recur(i=0) {
//     if (i >= 100) {
//         return
//     }
//     console.log(i)
//     return recur(i+1)
// }
// recur()

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {

    num = Math.floor(num);
    //base case when we get down to 0 or below:
    if (num <= 0) {
        return 0;
    }

    sum = num + recursiveSigma(num - 1);
    return sum;
}


console.log(recursiveSigma(num1));
console.log(recursiveSigma(num2));
console.log(recursiveSigma(num3));

/*****************************************************************************/