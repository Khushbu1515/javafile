let compliment =function(msg){
    return function(name){
      console.log(`${msg} ${name}`);
    }
};
console.log(compliment("you are a good")("coder"));




(function(name){
    console.log("this is javascript",name)
})
("coder")

    setTimeout( function greeting()
{
    console.log("welcome  to our codeer dost family")
}, 5000)
 