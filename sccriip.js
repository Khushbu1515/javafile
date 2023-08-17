let blocklist =[{name:"john", reason:"AC"},{name:"lali",reason:"2nd ac"}]
for(let i=0;i<blocklist.length; i++)
{
console.log(blocklist[i].name)
console.log(blocklist[i].reason)
}


let mainplane={
    
    book: function(flightname,name){
        console.log(`${name} booked flight on  with ${flightname}`)
        
}
}
let carplane={
khu: function(name, age){
    console.log(`welcome ${name} and age is ${age}`)
}
}
mainplane.book(553,"carles")
carplane.khu("khushi",22)


let name=
{
    fullname:function(age, colour)
    {
        return this.fn + " " +this.ln+" " +age+" "+colour;
    }
}
let dec={
    fn:"khushi",
    ln:"kumari"

}
console.log(name.fullname.call(dec,25,"blue"));



function greet()
{
    console.log(`welcome ${this.fn} ${this.ln} in company`)
}
let user={
    fn:"khushi",
    ln:"kumari"
}

let greets=greet.bind(user);
console.log(greets())


let arr=[1,2,3,4,5]
let getarr=[...arr]; // spread operator
getarr[6]=7;
getarr.shift();
console.log(arr)
console.log(getarr)

let car={
    model:2022,
    colour:"blue",
    company: "toyota"
}
let x=" "
for(let key in car){
x=x+car[key]
}
console.log(x);


const city=["NY","FD"];
const lc=[];
city.forEach((cities) =>
lc.push(cities)
)
console.log(lc)

let p=
{
name:"khu",
age:22
}
let d={...p};
d.name="jack";
console.log(p.name)
console.log(d.name)



