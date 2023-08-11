function hello(){
    return("hello  ")
}
console.log(hello())




let number=function(a){
    let adddition=a+1;
    console.log(`addition= ${adddition}`)
}
number(5)




function num(minute){
    let seconds=minute*60;
    return seconds;
}
console.log(num(5))



let area_of_triangle=function (base,height){
    let Area=1/2*base*height;
    return Area;
}
console.log(area_of_triangle(5,10))


let age_to_days=function(age){
    let num_of_days=age*365;
    return num_of_days;
}
console.log(age_to_days(65))




let cubes=function(a,b){
    let num_cube=a*(b)**2;
    return num_cube;
}
console.log(cubes(3,3))



let arrays=function(arr)
{
console.log("arrays 1st index=",arr[0])
}
arrays([1,2,3,4])


function getDays(date1, date2) {
    var dat1 = new Date(date1);
    var dat2 = new Date(date2);
	var Difference_In_Time = dat2.getTime() - dat1.getTime();
var Difference_In_Days = Difference_In_Time / (1000*3600*24);
return Difference_In_Days;
}
var total_days=getDays("2000-02-22","2000-02-30");
console.log(total_days);




let numbers=function (num){
let sum=0;
for(let i=0;i<=num;i++)
{
    sum+=i;
}
return sum;

}
console.log(numbers(10))   

