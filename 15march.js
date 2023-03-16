//Q.1. Write a program that finds the longest substring without repeating characters in a given string.



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