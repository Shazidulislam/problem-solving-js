const problem1 = (a, b)=>{
  const sum = a+b
  console.log(sum)
}
problem1(3,8)

// Problem 1


//Problem 2

//Problem 3

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






