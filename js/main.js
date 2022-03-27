//QUESTION 1 

var arr = [];
for(let i=0;i<5;i++)
{
    arr[i]=+prompt("PLeasr Enter Names ");    
}
alert(arr[0]);
alert(arr[4]);

console.log("The First Name is : " + arr[0] + "\n" + "The lastest Name is : " + arr[4]);
console.log("The First Name is : " + arr[4] + "\n" + "The lastest Name is : " + arr[0]);

//QUESTION 2
var fruits = ['apple','bnana','Strawberry','peach'] ;
console.log(arr[0] + "\n" + arr[1] + "\n" + arr[2] + "\n" + arr[3]);
for(let i=0 ;i < 4 ;i++){
    console.log(fruits[i]);
}

//QUESTION 3 
var grades = [];
for(let i=0;i<10;i++)
{
    grades[i] =+prompt("Please enter your grades");
    if(grades[i] < 0 || grades[i] > 100 )
    {
        console.log("Your grades it's not illegal");
    }
}

//QUESTION 4 

var numbers= [] ;
var sum=0,avg=0,max=0,min=numbers[0];
for(let i=0;i<20;i++)
{
    numbers[i] = Math.random() * 101;
}
for(let i=20;i>0;i--)
{
    console.log(numbers[i]);
    sum+=numbers[i];
    avg=sum/20;
    if(arr[i] > max)
    {
        max = arr[i];
    }
    else{
        if(arr[i] < min)
        min= arr[i];
    }
    console.log(max);
    console.log(min);

}
//QUESTION 5
var numof =+prompt("Please enter number");
for(let i=0;i<numof;i++)
{
    for(let j=0;j <= i;j++)
    {
        console.log(j + "\n");
    }
}

//QUESTION 6 
var num=+prompt("enter number");
for(let i=0;i<num;i++)
{
    for(let j=0;j<num;j++)
        console.log(j);

}

//QUESTION 7 
var isNegative = [],i=0 ;
isNegative[i]=+prompt("enter a number");
while(isNegative[i]!= 0 && isNegative[i] > 0)
{
  
        if(isNegative[i] > isNegative[i+1] )
        isNegative[i]= isNegative[i+1];
        isNegative[i+1]=isNegative[i];
  
    isNegative[i]=+prompt("enter a number");
    i++;
}
console.log(isNegative);

