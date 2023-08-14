let car={
    colour:"blue",
    model:"2022",
    company:"honda"
}
console.log(car);

console.log(car["company"]);
console.log(car.company);
delete car.company;
console.log(car)




let person={
    agecalculate : function(by)
    {
        let age=2023-by;
        return age;
    }
}
console.log(person.agecalculate(1998));

