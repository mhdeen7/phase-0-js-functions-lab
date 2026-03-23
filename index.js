function calculateTax(amount){
    const taxRate=0.1;
    return amount*taxRate;
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1, num2){
     return num1 > num2 
}

function isPalindrome(word){
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

function calculateDiscountedPrice(orignalPrice, discountPercentage){
      const discoutAmount=(discountPercentage/100)*orignalPrice; 
      return orignalPrice-discoutAmount;                           
}


console.log("tax on 100:", calculateTax(100)); 
console.log("upper case of 'hello':", convertToUpperCase('hello')); 
console.log("maximum of 5 and 10:", findMaximum(5, 10)); 
console.log("is 'racecar' a palindrome?", isPalindrome('racecar')); 
console.log("discounted price of 100 with 20% discount:", calculateDiscountedPrice(100, 20)); 

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };