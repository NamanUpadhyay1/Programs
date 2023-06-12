// Rock ~ Paper ~ Scissors

// let userChoice = 'rock'

// let choiceStack = ['paper', 'rock', 'scissors'];

// let randomNum = Math.floor(Math.random() * 3);

// let computerChoice = choiceStack[randomNum];

// console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);

// if (userChoice === computerChoice)
// {
// console.log("Tie!");
// }
// else if (userChoice === 'paper' && computerChoice === 'rock')
// {
// console.log("You win!");
// }
// else if (userChoice === 'rock' && computerChoice === 'scissors')
// {
// console.log("You win!");
// }
// else if (userChoice === 'scissors' && computerChoice === 'rock')
// {
// console.log("You lose!");
// }
// else if (userChoice === 'rock' && computerChoice === 'paper')
// {
// console.log("You lose!");
// }
// else if (userChoice === 'paper' && computerChoice === 'scissors')
// {
// console.log("You lose!");
// }
// else if (userChoice === 'scissors' || computerChoice === 'paper')
// {
// console.log("You win!");
// }
// else
// {
// console.log("Invalid input, please try again");
// }






// function marks(num)
// {
//     if(num<0 || num>100)
//     {
//         console.log("Invalid marks");
//     }
//     else
//     {
//     if(num<30)
//     {
//         console.log("Fail");
//     }
//     else if(num<=55)
//     {
//         console.log("Your grade is D");
//     }
//     else if(num<=65)
//     {
//         console.log("Your grade is C");
//     }
//     else if(num<=75)
//     {
//         console.log("Your grade is B");
//     }
//     else if(num<=85)
//     {
//         console.log("Your grade is A");
//     }
//     else if(num>85)
//     {
//         console.log("Your grade is A+");
//     }
// }
// }
// marks(655)

// function calc(operator, a, b)
// {
    
//     if(operator==='+')
//     {
//         let result = a+b
//         return result
//     }
//     else if(operator==='-')
//     {
//         let result = a-b
//         return result
//     }
//     else if(operator==='*')
//     {
//         let result = a*b
//         return result
//     }
//     else if(operator==='/')
//     {
//         let result = a/b
//         return result
//     }
    
// }
// console.log(calc('+', 10, 20))

// function reverseString(str) {
//     if (str === "")
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }
//   console.log(reverseString("hello"))

// function humanize(number) {
//     if(number % 100 >= 11 && number % 100 <= 13)
//         return number + "th";
    
//     switch(number % 10) {
//         case 1: return number + "st";
//         case 2: return number + "nd";
//         case 3: return number + "rd";
//     }
    
//     return number + "th";
// }
// console.log(humanize(1));
// console.log(humanize(20));
// console.log(humanize(302));


// const median = array => 
// {
//     const mid = Math.floor(array.length / 2)
//     nums = [...array].sort((a, b) => a - b)
//     return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
//   }
//   console.log(median([4, 6, 50, 1, -5]))
    
// let text = "hello world"
// let result = text.substring(0, 6).toUpperCase()


// console.log(result);

//1st Question ~ Write a function that takes an array of numbers from 1 to n with one number missing, and returns the missing number. For example, given an array [1, 2, 3, 5], the function should return 4.

// function array(arr)
// {
//     let num = arr.length
//     var total = ((num + 2) * (num + 1)) / 2;

//     for(let i = 0; i<num;i++)
//     {
//         total -= arr[i];
//     }
//     return total

// }

// console.log(array([1,2,3,5]))


//2nd Question ~ Write a function that takes two arrays and returns true if the first array is a subsequence of the second array.


// function sequence(arr1, arr2) 
// {
//     let i = 0;
//     let j = 0;
  
//     while (j < arr2.length) 
//     {
//       if (arr1[i] === arr2[j]) 
//       {
//         i++
//       }
  
//       if (i === arr1.length) 
//       {
//         return true
//       }
  
//       j++
//     }
  
//     return false
//   }
// console.log(sequence([1,2,3,5], [1,2,3,6]))





//3rd Question ~ Implement a function that takes a string as an argument and returns the most frequent character in the string.

// var getMax = function (str) 
// {
//     var max = 0,
//     maxChar = ''
//     str.split('').forEach(function(char)
//         {
//             if(str.split(char).length > max) 
//             {
//                max = str.split(char).length;
//                maxChar = char;
//             }
//         })
//         return maxChar
// }
    
// console.log('The most repeated letter is : ')
// console.log(getMax(`hello`))







//4th Question ~ Implement a function that takes a string as an argument and returns a new string with the first letter of each word capitalized.

// function string(str)
// {
//     const words = str.split(" ")
//     for(let i=0; i<words.length; i++)
//     {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//     }
//     words.join(" ")
//     console.log(words);
// }
// string('hello hi')



//5th Question ~ Implement a function that takes a string as an argument and returns a new string with all the vowels removed.

// function string(str)
// {
//     var newString = str.replace(/[aeiou]/g, '');
//     console.log(newString);
// }
// string('zaeziobu')


//____________________________________________________________________________________________
//Pattern

//Q.1 ~ Write a javascript function that returns 1 for 1, 22 for 2, 333 for 3, 4444 for 4.

// let num = ""
// for(let i=1; i<5 ; i++)
// {
//     for(let j=1; j<=i; j++)
//     {
//         num += i
//     }
//     num += "\n"
// }
// console.log(num);


//Q.2 ~ Write a javascript function that returns 1 for 2, 23 for 2, 356 for 3, 4800 for 4, 60355 for 5.

// 2
// 23
// 356
// 4800
// 60355

// let num = ""
// for(let i=1; i<6 ; i++)
// {
//     for(let j=1; j<=i;j++)
//     {
//         num += i+j             
//     }
//     num += "\n"
// }
// console.log(num)


// function countAlphabets(str)
// {
    
//     for(i=0; i<str.length; i++)
//     {
//         let counting = 0
//         for(j=0; j<str.length; j++)
//         {
//             if(str[i]==str[j]&& i>j)
//             {
//                 break;
//             }
//             if(str[i]==str[j])
//             {
//                 counting++
//             }
//         }
//         if(counting>0)
//         {
//             console.log(`${str[i]} = ${counting} times`);
//         }
//     }
// }
// countAlphabets('hello')


//1st Question Write a function that takes a string as input and returns the longest substring.

// function findLongestWord(str) 
// {
//     var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; })
//     return longestWord[0]
// }
// console.log(findLongestWord("hi my name is naman"))



//Question ~ Write a function that takes two arrays of integers as input and returns an array of their intersection.


// function intersection(array1, array2)
// {
//     const firstSet = new Set(array1)
//     const secondSet = new Set(array2)

//     let result = []

//     for(let i of secondSet)
//     {
//         if(firstSet.has(i))
//         {
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(intersection([1,2,3,4,7],[1,2,5,6,7]))


// function intersection(string1, string2)
// {
//     const firstSet = new Set(string1)
//     const secondSet = new Set(string2)

//     let result = []

//     for(let i of secondSet)
//     {
//         if(firstSet.has(i))
//         {
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(intersection('hello','hzlzo'))


// Question ~ Write a function that takes a stringing as input and returns true if the stringing contains all the letters of the alphabet, and false otherwise.


// function input(stringing)
// {
//     let alphabets = 'abcdefghijklmnopqrstuvwxyz'
//     let result = stringing.includes(alphabets)
//     if(result)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// }
// console.log('The stringing 1 is '+input('abcdefghijklmnopqrstuvwxyz'))
// console.log('The stringing 2 is '+input('abcdefghijklmnopqrstuvwxy'))



// 1 uppercase

// function upperCase(str)
// {
//     let words = str.split(" ")

//     for(let i = 0; i<words.length; i++)
//     {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//         words.join("")
//     }
//     return words
// }
// console.log(upperCase("hi hello"));

// 2 Pattern

// let n = 5
// let string = ""

// for(let i = 1; i<n; i++)
// {
//     for(let j=1; i<n-i; j++)
//     {
//         string += " "
//     }

//     for(let k=0; k<2*i-1; k++)
//     {
//         string = String.fromCharCode(k+65)
//     }
//     string += "\n"
// }
// console.log(string);



// 3 even number

// function evenNum(arr)
// {
//     let num = []
//     for(let i = 0; i<=arr.length; i++)
//     {
//         if(arr[i]%2!=0)
//         {
//             num.push(i)
//         }
//     }
//     return num 

// }

// const arr = [1, 2, 3, 4, 5, 6]
// console.log(evenNum(arr))


// let length = 5
// let string = ""

// for(let i=1; i<=length; i++)
// {
//     for(j=1; j<length-i+1; j++)
//     {
//         string += " "
//     }
//     for(k=0; k<2*i-1; k++)
//     {
//         string += String.fromCharCode(k+65)
//     }
//     string += "\n"
// }
// for(i = 1; i<=length-1; i++)
// {
//     for(j=1; j<i+1; j++)
//     {
//         string += " "
//     }
//     for(k=0; k<2*(length - i)-1; k++)
//     {
//         string += String.fromCharCode(k+65)
//     }
//     string += "\n"
// }
// console.log(string);


// let length = 5
// let string = ""

// for(let i = 1; i<=length; i++)
// {
//     for(let j = 1; j<length-i+1; j++)
//     {
//         string += " "
//     }
//     for(k=0; k<2*i-1;k++)
//     {
//         string += String.fromCharCode(k+65)
//     }
//     string += "\n"
// }
// for(i=1; i<=length; i++)
// {
//     for(j=1; j<i+1; j++)
//     {
//         string += " "
//     }
//     for(k=0; k<2*(length-i)-1; k++)
//     {
//         string += String.fromCharCode(k+65)
//     }
//     string += "\n"
// }
// console.log(string);

//function numbers(num)
// {

// const even = []

// for(let i = 0; i<num.length; i++)
// {
//     const numb = num[i]
//     if(numb %2 == 0)
//     {
//         even.push(numb)
//     }
// }
// return even
// }
// console.log(numbers([1,2,3,4,5,6]));


//Q.1. Write a program to generate email id.

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


// let length = 4;
// let string = ""
// for (let i = 1; i <= length; i++) 
// {

//   for (let j = 0; j < length - i; j++) 
//   {
//     string += " "
//   }

//   for (let k = 0; k < 2 * i - 1; k++) 
//   {
//     string += String.fromCharCode(k + 65)
//   }

//   string += "\n"

// }
// console.log(string)

//Q.2. Write a program that takes a matrix (an array of arrays) as input and returns its transpose (rows become columns and columns become rows).

// var length = 4;
  
//     function transpose(A , B) 
//     {
//         var i, j;
//         for (i = 0; i < length; i++)
//             for (j = 0; j < length; j++)
//                 B[i][j] = A[j][i]
//     }
        
//         var A = [ [ 1, 1, 1, 1 ], [ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [4, 4, 4, 4]]
  
//         var B = Array(length)
//         for(i=0;i<length;i++)
//         B[i] =Array(length).fill(0)
  
//         transpose(A, B)
  
//         for (i = 0; i < length; i++) 
//         {
//             for (j = 0; j < length; j++)
//             process.stdout.write(B[i][j] + " ")
//             process.stdout.write("\n")
//         }


//Q.3. Write a program that checks whether a given string is a pangram (contains every letter of the alphabet at least once).

// function string(str)
// {
//     let alphabets = 'abcdefghijklmnopqrstuvwxyz'
//     let result = str.includes(alphabets)

//     if(result)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// }
// console.log('The String 1 is ' + string('abcdefghijklmnopqrstuvwxyz'))
// console.log('The String 2 is ' + string('abcdefghijklmnopqrstuvwxy'))


//Q.4. Write a program that takes a string as input and capitalizes the first letter of each sentence.

// function string(str)
// {
//     let words = str.split(" ")

//     for(i=0; i<words.length; i++)
//     {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//     }
//     words.join()
//     return words
// }
// console.log(string('hello hi'))


// Q.5. Write a program that rotates an array to the left or right by a given number of positions.


// function goPreviousNumber(arr,times,length)
//  {
//      var temp=new Array(length);
      
//     let k = 0;
 
//     for (let i = times; i < length; i++) 
//     {
//         temp[k] = arr[i];
//         k++;
//     }
 
//     for (let i = 0; i < times; i++) 
//     {
//         temp[k] = arr[i];
//         k++;
//     }

//     for (let i = 0; i < length; i++) 
//     {
//         console.log(temp[i]+" ")
//     }
//  }
 
// let arr = [ 1, 2, 3, 4, 5, 6, 7 ]
// let length = arr.length
// let times = 2

// goPreviousNumber(arr, times, length)


// 20th March

// Q. 1. Write javascript program to create hollow diamond pattern

// let n = 5;
// let string = ""

// for (let i = 1; i <= n; i++) 
// {

//   for (let j = n; j > i; j--) 
//   {
//     string += " ";
//   }
//   for (let k = 0; k < i * 2 - 1; k++) 
//   {
//     if (k === 0 || k === 2 * i - 2) 
//     {
//       string += "*"
//     }
//     else 
//     {
//       string += " "
//     }
//   }
//   string += "\n"
// }
// for (let i = 1; i <= n - 1; i++) 
// {
//     for (let j = 0; j < i; j++) 
//     {
//       string += " "
//     }
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) 
//     {
//       if (k === 1 || k === (n - i) * 2 - 1) 
//       {
//         string += "*"
//       }
//       else 
//       {
//         string += " "
//       }
//     }
//     string += "\n"
//   }
// console.log(string);

//Q. Implement a function to remove duplicates from an array without using any built-in functions.


// function unique(a, fn) 
// {
//     if (a.length === 0 || a.length === 1) 
//     {
//       return a
//     }

//     if (!fn) 
//     {
//       return a
//     }
  
//     for (let i = 0; i < a.length; i++) 
//     {
//       for (let j = i + 1; j < a.length; j++) 
//       {
//         if (fn(a[i], a[j])) 
//         {
//           a.splice(i, 1);
//         }
//       }
//     }
//     return a
//   }
  
//   const members = 
//   [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 1, name: 'John' },
//     { id: 4, name: 'Joe' },
//   ];
  
//   const uniqueMembers = unique(
//     members,
//     (a, b) => (a.id === b.id) & (a.name === b.name)
//   );
  
//   console.log(uniqueMembers)

// function unique(a, fn) 
// {
//     if (a.length === 0 || a.length === 1) 
//     {
//       return a
//     }

//     if (!fn) 
//     {
//       return a
//     }
  
//     for (let i = 0; i < a.length; i++) 
//     {
//       for (let j = i + 1; j < a.length; j++) 
//       {
//         if (fn(a[i], a[j])) 
//         {
//           a.splice(i, 1);
//         }
//       }
//     }
//     return a
//   }
  
//   const members = 
//   [1, 2, 1, 3, 4, 1, 5];
  
//   const uniqueMembers = unique(
//     members,
//     (a, b) => (a === b)
//   );
  
//   console.log(uniqueMembers)
  

//Q. Implement a function to reverse a linked list





// Q. Flatten an array of nest array

//in-built Method

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity))

//without in-built method

// function flatten(arr) 
// {
//     const newArr = arr.reduce((acc, item) => 
//     {
//       if (Array.isArray(item)) 
//       {
//         acc = acc.concat(flatten(item))
//       } 
//       else 
//       {
//        acc.push(item)
//       }
  
//       return acc

//     }, [])
  
//     return newArr
    
// }
  
// console.log(flatten([1, [2, [3], 4, [5, 6, [7]]]]))


//Q. Find the first non repeating character

// function firstNonRepeatingCharacter(str) 
// {
//     for (let i = 0; i < str.length; i++) 
//     {
//       let char = str[i]

//       if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) 
//       {
//         return char
//       }
//     }
    
//   }
//   console.log(firstNonRepeatingCharacter('aaabbbcdddeee'))



// 21st March 

// Q. Bubble sort an array

// function bblSort(arr)
// {
//   for(var i = 0; i < arr.length; i++)
//   {
//     for(var j = 0; j < ( arr.length - i -1 ); j++)
//     {     
//       if(arr[j] > arr[j+1])
//       {
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   console.log(arr)
// }
// bblSort([8, 7, 1, 5, -2])


// Q. Infinity Loop

// while (true)
// {
//   for(var i = 0; i<Infinity; i++)
//   {
//     console.log(i);
//   }
// }


// Q. Down triangle star pattern


// let n = 5;

// for (let i = 0; i < n; i++) 
// {
//   for (let k = 0; k < n - i; k++) 
//   {
//     process.stdout.write('*');
//   }
//   console.log("");
// }


// Q. Remove character at a specific position


// function removeChar(str, position)
// {
//   part1 = str.substring(0, position)
//   part2 = str.substring(position + 1, str.length)
//   return (part1 + part2)
// }

// console.log(removeChar("hello", 3));


// Q. Function overloading example


// function overloading(arg1) 
// {
//   console.log(arg1)
// }

// function overloading(arg1, arg2) 
// {
//   console.log(arg1, arg2)
// }

// overloading("hi")


// 22nd March

// Q. Write a program to replace item of array with specific value.

// const arr = ['a', 'b', 'c'];
// for (let index = 0; index < arr.length; index++) 
// {
//   if (arr[index] === 'a') 
//   {
//     arr[index] = 'z'
//     break;
//   }
// }
// console.log(arr);

// Q. Write a program to find specific value in array.

// let arr = ['a', 'b', 'c']
// let element = arr[1]
// console.log(element)

// Q. Write a program to reverse a string

// function reverseString(str)
// {
//   var split = str.split("")
//   var reverse = split.reverse()
//   var join = reverse.join("")
//   return join
// }
// console.log(reverseString('hello'))

// Q. Write a program to multiple each value of array with a specific number

// function array(arr, num)
// {
// for(var i = 0; i<arr.length; i++)
// {
//   arr[i] *= num
// }
// return arr
// }
// console.log(array([1, 2, 3, 4, 5], 5))


// 23rd March

// Q. Write a program that takes a string as input and capitalizes the first letter of each sentence.

// function string(str)
// {
//     let words = str.split(" ")
//     for(i=0; i<words.length; i++)
//     {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//     }
//     words.join()
//     return words
// }

// console.log(string('hello hi'))

//Q. Write a Javascript function that generates a new random PAN(Permanent Account Number).

// function panCard(length)
// {
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// let result = ""
// let singleChar = ""

// const charLength = characters.length

// let counter = 0;
//     while (counter < length) 
//     {
//       result += characters.charAt(Math.floor(Math.random() * charLength));
//       counter += 1;
//     }
    

// let digit = Math.floor(Math.random()* (1111 - 4999 + 1)+ 4999) 

// singleChar += characters[Math.floor(Math.random() * charLength)]
 
// return result+digit+singleChar

// }

// console.log(panCard(5));


// Q. Write a function that takes an array of numbers as input and returns the maximum subarray sum.

// const maxSubArray = (nums) => 
// {
//     let maxSum = -Infinity
//     let currentSum = 0
//     for(let i = 0; i < nums.length; i++){ 
        
//         currentSum = Math.max(nums[i], currentSum + nums[i])
        
//         maxSum = Math.max(currentSum, maxSum)
        
//     }
//     return maxSum
// }
// console.log( maxSubArray([1,2,3,-5,4,6]))


// Q. Implement a function that takes a string as an argument and returns the most frequent character in the string.

// var getMax = function (str) 
// {
//     var max = 0,
//     maxChar = ''
//     str.split('').forEach(function(char)
//         {
//             if(str.split(char).length > max) 
//             {
//                max = str.split(char).length;
//                maxChar = char;
//             }
//         })
//         return maxChar
// }
    
// console.log('The most repeated letter is : ')
// console.log(getMax(`hello`))


// Q. Write a program to count the occurrence of characters in the string

// function countAlphabets(str)
// {
    
//     for(i=0; i<str.length; i++)
//     {
//         let counting = 0
//         for(j=0; j<str.length; j++)
//         {
//             if(str[i]==str[j]&& i>j)
//             {
//                 break;
//             }
//             if(str[i]==str[j])
//             {
//                 counting++
//             }
//         }
//         if(counting>0)
//         {
//             console.log(`${str[i]} = ${counting} times`);
//         }
//     }
// }
// countAlphabets('hello')


// var arr = new Array(2);

// for (var i = 0; i < arr.length; i++)
// {
//     arr[i] = []
// }
// var h = 0;
// var s = "HiHi"

// for (var i = 0; i < 2; i++) 
// {
//     for (var j = 0; j < 2; j++) 
//     {
//         arr[i][j] = s[h++]
//     }
// }

// for (var i = 0; i < 2; i++) 
// {
//     for (var j = 0; j < 2; j++)
//     {
//         process.stdout.write(arr[i][j] + " ")
//     }
//     process.stdout.write("\n")
// }


function numbers(num)
{
    const even = []

    for(i=0; i<num.length; i++)
    {
        const numb = num[i]
        if(numb%2 == 0)
        {
            even.push(numb*numb)
        }
    }
    return even
}
console.log(numbers([1,2,3,4,5,6]));

// function multiply(array)
// {
//     var sum = 1
//     for(var i = 0; i<array.length; i++)
//     {
//         sum = sum * array[i]
//     }
//     return sum
// }
// console.log(multiply([1, 2, 3]))


//25th March ~

//Q. Fibonacci series using recursion

// var fibonacci_series = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1]
//   } 
//   else
//   {
//     var s = fibonacci_series(n - 1)
//     s.push(s[s.length - 1] + s[s.length - 2])
//     return s
//   }
// }

//  console.log(fibonacci_series(8));

//Q. Program defining the difference between == and ===

// let a = 10
// let b = 10

// let c = 5
// let d = 5.0

// console.log(c==d)
// console.log(c===d)


//Q. Write a program to remove duplicates from a given array

// function uniqueChar(str1)
// {
//     let str = str1
//     let unique = ""
//     for(var i = 0; i<str.length; i++)
//     {
//         if(unique.indexOf(str.charAt(i))==-1)
//         {
//             unique += str[i]
//         }
//     }
//     return unique
// }

// console.log(uniqueChar('thequickbrownfox'));


// Q. Write a program to perform merge sort

// function merge(left, right) 
// {
//   let sortedArr = []
//   while (left.length && right.length) 
//   {
//     if (left[0] < right[0]) 
//     {
//       sortedArr.push(left.shift())
//     } else 
//     {
//       sortedArr.push(right.shift())
//     }
//   }
//   return [...sortedArr, ...left, ...right]
// }
// console.log(merge([1, 4], [2, 6, 9]))


// 27th March ~

// Q. Write a function to implement a binary search algorithm on a sorted array.

// Q. Write a program to get the factorial of n number

// function factorial(num)
// {
    
// if (num < 0) 
// {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// else if (num === 0) 
// {
//     console.log(`The factorial of ${num} is 1.`);
// }

// else 
// {
//     let fact = 1;
//     for (i = 1; i <= num; i++) 
//     {
//         fact *= i;
//     }
//     console.log(`The factorial of ${num} is ${fact}.`);
// }
// }
// factorial(9)

// Q. Write a program to find the second largest number in the array.

// function findSecondLargestElem(arr)
// {
//     let first = -1 , second = -1

//     for(let i = 0; i <= arr.length-1; i++)
//     {
//         if(arr[i] > first)
//         {
//             second = first;
//             first = arr[i];
//         }
//         else if( arr[i] > second && arr[i] != first)
//         {
//             second = arr[i]
//         }
//     }
//     console.log(second)
// }

// findSecondLargestElem([1, 2, 3, 4, 5])


// Q . Implement a function to find all pairs of elements in an array whose sum equals a given value.

// let twoSum = (array, sum) => 
// {
//     let hashMap = {},
//       results = []

//         for (let i = 0; i < array.length; i++)
//         {
//             if (hashMap[array[i]]){
//                 results.push([hashMap[array[i]], array[i]])
//             }
//             else
//             {
//                 hashMap[sum - array[i]] = array[i]
//             }
//           }
//           return results
//     }
// console.log(twoSum([10,20,10,40,50,60,70,30],50))

// for(;;)
// {
//     console.log('hi');
// }

// function countString(str, letter)
// {
//     let count = 0
//     for(let i = 0; i<str.length; i++)
//     {
//         if(str.charAt(i).toLowerCase()==letter.toLowerCase())
//         {
//             count += 1;
//         }
//     }
//     return count;
// }

// const letterToCheck = 'hello'
// const result = countString(letterToCheck, 'l');

// console.log(result);

// function countVowels(str)
// {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let count = 0

//     for(let i = 0; i<str.length; i++)
//     {
//         if(vowels.includes(str[i].toLowerCase()))
//         {
//             count++
//         }
//     }
//     return count;
// }

// const vowerlCount = countVowels('aeiozu')
// console.log(`Vowel count: ${vowerlCount}`);

// function findMaxElement(arr)
// {
//     let max = arr[0]

//     for(let i = 1; i<arr.length; i++)
//     {
//         if(arr[i]>max)
//         {
//             max = arr[i]
//         }
//     }
//     return max
// }

// const numbers = [5, 10, 2, 8, 3]
// const maxElement = findMaxElement(numbers)
// console.log(`Maximum element: ${maxElement}`);

// function calculateSum(arr)
// {
//     let sum = 0

//     for(let i = 0; i<arr.length; i++)
//     {
//         sum += arr[i]
//     }
//     return sum
// }

// const numbers = [5, 10, 2, 8, 3]
// console.log(`sum of elements: ${calculateSum(numbers)}`);

// function bubbleSort(arr) {
//     const length = arr.length;
  
//     for (let i = 0; i < length - 1; i++) 
//     {
//       for (let j = 0; j < length - 1 - i; j++) 
//       {

//         if (arr[j] > arr[j + 1]) 
//         {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
  
//     return arr;
//   }
  
//   console.log(`Sorted numbers: ${bubbleSort([5, 3, 8, 2, 1, 4])}`);