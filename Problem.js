

// Problem 1
const stringReverce = (str)=>{
  const result = str?.split("").reverse().join("")
  return result
}
console.log(stringReverce("shazidul"))


//Problem 2
const vowelsCount =(string)=>{
   const vowels = "aeiouAEIOU"
   let count = 0;

   for(let str of string){
    if(vowels.includes(str)){
      count++
    }
   }
   return count
} 
console.log(vowelsCount("programming"))

//Problem 3
const checksPalindrome =(str)=>{
  const result = str.split("").reverse().join("")
  if(str === result)return true
   return false
} 
const plaindromeResult =checksPalindrome("madamw")
console.log("3number",plaindromeResult)
//Problem 4
//category-1
const findLargeNumber=(numbers)=>{
 if( numbers.length === 0){
   return undefined
 }
 else{
   return Math.max(...numbers)
 }
}

const numbers = [9,8,3,10,15,20]
const largerNumber = findLargeNumber(numbers)
console.log(largerNumber)

//category 2

const findTheLargeNumber =(numbers)=>{
  if(numbers.length===0)return
  let maxNumber = numbers[0]
   for(let i =1 ; i < numbers.length; i++ ){
       if(numbers[i] > maxNumber){
        maxNumber = numbers[i]
       }
   };
  return maxNumber
}

// const numbers2 = [9 , 4 , 8 , 10 , 10 , 22]
const largerNumbers = findTheLargeNumber(numbers)
console.log(largerNumber)


// problem 5
//no-1
const removeNumber=(num)=>{
   const result = [];
   for(i=1 ; i < num.length ; i++){
    if(!result.includes(num[i])){
      result.push(num[i])
    }
   }
   return result;
}

const commonNumber = [2,3,4,5,2,3,9];
const common = removeNumber(commonNumber)
console.log(common)
// no-2
const findCommonNumber=(num)=>{
  const removeNumber  = new Set(num)
  const result = [...removeNumber]
  return result
} 

const larzeCommon = findCommonNumber(commonNumber)
console.log(larzeCommon)

// provlem 6
const totalSumOfNumber=(num)=>{
  let sum = 0;

  for(i=1;i<num.length; i++){
    sum +=num[i]
  }
  return sum
}

const result = totalSumOfNumber([2,4,5,6])
console.log(result)

//problem 7

const findEvenNumber=(numbers)=>{
  const result = []
  for(let num of numbers ){
   if(num % 2 === 0){
     result.push(num)
   }
  }
  return result
}

const evenResult = findEvenNumber([2,4,5,6,8,9,11,23,24])
console.log("even number" , evenResult)

//problem 8
const makeCapitalizes =(sen)=>{
  const words = sen?.split(" ")
  let result = "" ;

  for(let word of words ){
    result += word.charAt(0).toUpperCase()+word.slice(1)+" ";

  }
  return result.trim()
}

const capitalResult = makeCapitalizes("shamim ahasun shazid")
console.log(capitalResult)

//problem 9
const factorial=(num)=>{
     let result = 1;
     for(let i = 2; i <= num ; i++){
         result = result * i ;
     }
     return result
}

const factorialResult =factorial(5)
console.log(factorialResult)

//problem 10

const lastPingPong=(num)=>{
  for(let i = 1; i <=20 ; i++){
    if(i % 3 === 0 && i % 5 === 0) console.log("PingPong")
    else if(i % 5 === 0)  console.log("Pong")
    else if(i % 3 === 0)  console.log("Ping")
   else{
   console.log(i)
  }
  }

}
lastPingPong()
// const pingPongResult = lastPingPong()
// console.log(pingPongResult)





