/****** Author : Mai Hamduni  */
/** HW to full stack Deveolpment in JS - Functions */
/**Question 1  - Function that contain an array , Return Average of All Element of array */
function AverageArray(arr)
{
    var sum=0,avg=0;
    for(let i=0;i<arr.length;i++)
    {   
        sum += arr[i];
        avg = sum/arr.length;

    }
    return avg ;
}
 
var arr=[1,3,2,2,4];

console.log(AverageArray(arr));
var arr1 = [2,3,4,5,6];
console.log(AverageArray(arr1));
var arr2=[5,6,9,7,5,3];
console.log(AverageArray(arr2));


/** Question 2 - Function That return the Smallest Element in Arrary */

function MinElement(arr)
{
    var min = arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] < min)
        min = arr[i];
    }
    return min;
}

var arrMin=[2,3,5,6,7,1];
console.log(MinElement(arrMin));
var arr2Min=[5,9,6,3,2,0];
console.log(MinElement(arr2Min));
var arr3=[6,8,9,7,5,3,1,5,-1];
console.log(MinElement(arr3));

/** Question 3 - Function that return the biggest String in Array */

function biggestString(Arrstring){

    var str = "";
  
    for(let i of Arrstring)
    {
        if(i.length > str.length)
        {   
            str = i.length;

        }
    }
    return str;

}
var arr =['mai','hamduni'];
var arr2 = ["adad","adasd","adadfasd"];
var arr3 = ["adad","adasd","adadfasd","Aaaa","a"];
console.log(biggestString(arr));
console.log(biggestString(arr2));
console.log(biggestString(arr3));

/** Question 4 - function that return the biggest strings */
function biggestStr(arr)
{
    var str = "";
    for(let i of arr)
    {
        if(i.length > str.length)
        {
            str = i
        }
    }
    return str;
}
var arr =['mai','hamduni'];
var arr2 = ["adad","adasd","adadfasd"];
var arr3 = ["adad","adasd","adadfasd","Aaaa","a"];
console.log(biggestString(arr));
console.log(biggestString(arr2));
console.log(biggestString(arr3));
   
/**Question 5 - Function That contain max of average to element's in array */

function BiggerThanAvg(arr)
{
    var count=0;
    var AvgMax =AverageArray(arr); // AvgMax element's that's contain the Average of the array 
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] >= AvgMax)
        {
            count++;
        }
    }
    return count;
}
var arr= [1,2,3,5,6,4];
console.log(BiggerThanAvg(arr));
var arr2=[6,7,8,9,5,4,6,7];
console.log(BiggerThanAvg(arr2));
var arr3=[6,8,5,10,32,65];
console.log(BiggerThanAvg(arr3));

/**Question 6 - Function that's Return boolean Element if They Prime number  */

function IsPrime(num)
{
    if(num == 2)
    return true;
    if(num > 1)
    {
        for( let i=2;i<num ;i++)
        {
            if(num % i !== 0)
            {
                return true;
            }else if (num === i * i) {
                return false
              } else {
                return false;
              }
            
          }
    }
    else {
        return false;
    }

}
console.log(IsPrime(2));
console.log(IsPrime(121));
console.log(IsPrime(9));

/** Question 7 - Function that's retur if the array is Prime Element's  */
function IsPrimeArrr(arr)
{
   var count =0 ;
    for(let i=0 ;i <arr.length;i++)
    {
        var primeNum= IsPrime(arr[i]);
        if(primeNum)
        {
            count++;
        }
    }
    if(arr.length == count)
    {
        return true;
    }
    else{
        return false;
    }
}

var arr= [2,3,1,9];
console.log(IsPrimeArrr(arr));
var arr2 = [2,3,9];
console.log(IsPrimeArrr(arr2));