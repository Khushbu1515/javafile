function num(arr)
{
     
    return Math.min.apply(Math,arr);
}
let num1=function(arr)
{
    return Math.max.apply(Math,arr);
}
let result =num([1,65,15,0])
console.log(result)
let result1 =num1([1,65,15,0])
console.log(result1)