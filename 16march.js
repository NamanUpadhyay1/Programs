// Q.1. Write a program to generate email id.

// let first = 'test'
// let second = '@gmail.com'
// let digit = Math.floor(Math.random() * (1111-4999 + 1)) + 4999

// console.log(first + digit + second)


//Q.2. Write. a program that return longest Substring Without Repeating Characters.


// function longestSubstring(str)
// {
//     let longest = ''
//     let current = ''

//     const map = {}

//     for (let i = 0; i < str.length; i++) 
//     {
//         const char = str.charAt(i)

//         if (map[char]) 
//         {
//             const index = current.indexOf(char)
//             current = current.slice(index + 1)
//         }

//         current += char
//         map[char] = true

//         if (current.length > longest.length) 
//         {
//             longest = current
//         }

//     }
//     return longest;
// }

// console.log(longestSubstring("hi my name is naman"))


//Q.3. Write a program that finds the contiguous subarray within a given array that has the largest sum.


// const maxSubArray = (nums) => 
// {
//     let maxSum = Number.MIN_SAFE_INTEGER
  
//     for (let i = 0; i < nums.length; i++) 
//     {
//       let currentSubArraySum = 0;
  
//       for (let j = i; j < nums.length; j++) 
//       {
//         currentSubArraySum += nums[j]
//         maxSum = Math.max(maxSum, currentSubArraySum)
//       }
//     }
//     return maxSum
// }
// console.log(maxSubArray([-2,1-3,4,-1,2,1,-5,4]));


//Q.4. Write a program to create a tree of alphabets.


// let n = 4;
// let string = ""
// // External loop
// for (let i = 1; i <= n; i++) 
// {
//   // creating spaces
//   for (let j = 0; j < n - i; j++) 
//   {
//     string += " "
//   }
//   // creating alphabets
//   for (let k = 0; k < 2 * i - 1; k++) 
//   {
//     string += String.fromCharCode(k + 65)
//   }
//   string += "\n"
// }
// console.log(string)