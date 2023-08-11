function  num(bit)  //convert decimal to binary
{
 let bin =" ";
 while(bit>0)
 {
 rem=bit%2;
 bin=rem+bin;
 bit=Math.floor(bit/2);
 }
 return bin;
}
let result=num(45);
console.log(result)



function num1(x,y)
{
    let result = x*(2**y);
    return result;
}
 let res=num1(5,15);
 console.log(res);