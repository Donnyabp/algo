// 1. Print 1 - 135

// psuedocode make a(function) loop through numbers 1 to 135.
//make the console print the numbers//

code
for (var i=1; i<=135;i++) {
    console.log(i)

 }

 /*diagram results:
    i=1 -> 1
    i=1 -> 2 
    i=1 -> 3
    i=1 -> 4
    i=1 -> 5
    .....
    i=1 -> 135 */

// 2. only print the odd number

// psuedocode loop all the odd numbers from 1 - 135 going 2 up each time

// code:



for (var i=1; i<=135; i+=2){
    console.log(i)
}

/* 3.Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far.
 Your output should look similar to this*/

 // psuedocode make the code sum up from 0 till 135

 // code:

 let sum = 0
 for(let i = 0; i <=135; i++){
    sum += i;
 }
console.log(sum);

/* 4. Print the elements of an array

Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. 
Your program should work with arrays of all sizes. */

// psuedocode make an array then define it through a loop 

//code:

const x = [1,4,2,12]
for(let i=0; i < x.length;  i++){
    console.log(x[i]);

}

/* 5. Find Max 
Given an array X, write a program that would find the maximum value of the array. 
Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.*/

// Psuedocode make an array and make it loop to find the max

// code:

const z= [1, 5, 3, 9,2];
let max = z[0];
for (let i= 1; i < z.length; i++ ){
    if(z[i] > max){
        max= z[i];
    }
}
console.log(max);

/* diagram: use loop to search through the array to find the max value
let i -> 1= 1 max=1
let i -> 1= 5 max=5
...
let i -> 1= 2 max=9*/

/* 6.Given an array X, write a program that will return the average value of all elements in the array. For example, 
for array X = [2,1,3] your output should be 2.*/

// code:
const GetAverage = Arr => {
    const reducer = (total, currentValue) => total + currentValue
    const sum = Arr.reduce ( reducer);
    return sum / Arr.length;
    
}
GetAverage([1,2,3])
// I google this one cuz i keep on getting 1 instead of 2

/* 7. Eliminate the Negatives

Given an array X, write a program that will remove all negative numbers and replace them with a 0.
For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].*/

//code:
const X = [1, -2, 3, -4, 5];
for (let i = 0; i < X.length; i++ ){
    if(X[i] < 0){
        X[i] = 0;
    }
}
console.log(X)


/* 8. Number to strings

Write a program that takes an array of numbers and turns the negative values to strings.*/

let myarray = [1, -2, 3, -4 ,5];
let modifiedarray = myarray.map(function(x){return x < 0 ? 'Dojo' : x ;});

console.log(modifiedarray); 






 

 

