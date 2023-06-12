// function countVowels(word)
// {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u']

//     for(i = 0; i < word.length; i++)
//     {
//         if(vowels.includes(word[i].toLowerCase()))
//         {
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels('hello'))


// function countLetters(word, letter)
// {
//     let count = 0;

//     for(i = 0; i < word.length; i++)
//     {
//         if(word[i].includes(letter))
//         {
//             count += 1;
//         }
//     }
//     return count
// }
// console.log(countLetters('hello', 'h'))

// function bubbleSort(arr)
// {
//     const length = arr.length

//     for(let i = 0; i < length - 1; i++)
//     {
//         for(let j = 0; j < length - 1 - i; j++)
//         {
//             if(arr[j] > arr[j + 1])
//             {
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(`Sorted numbers: ${bubbleSort([5, 3, 8, 2, 1, 4])}`);

// function findMaxElement(arr)
// {
//     let max = arr[0]

//     for(i = 1; i < arr.length; i++)
//     {
//         if(arr[i] > max)
//         {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMaxElement([5, 10, 2, 8, 3]));

// function uniqueChar(str1)
// {
//     let str = str1
//     let unique = ""

//     for(i = 0; i < str.length; i++)
//     {
//         if(unique.indexOf(str.charAt(i))==-1)
//         {
//             unique += str[i]               
//         }
//     }
//     return unique
// }

// console.log(uniqueChar('aabbccdda'));

// function numbers(num)
// {
//     const even = []

//     for( i = 0; i < num.length; i++)
//     {
//         const numb = num[i]
//         if(numb % 2 == 0)
//         {
//             even.push(numb)
//         }
//     }
//     return even
// }
// console.log(numbers([1,2,3,4,5,6]));