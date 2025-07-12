 /* question - 1 */
 function reverseString(s) {
    let reversed = ""; 
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i]; 
    }

    return reversed;
}
console.log(reverseString("hello"));  
/* question - 2 */
let array = ["apple", "banana", "apple", "orange", "banana"];

function removeDuplicates() {
  return [...new Set(array)];
}

console.log(removeDuplicates());
