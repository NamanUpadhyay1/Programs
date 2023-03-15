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