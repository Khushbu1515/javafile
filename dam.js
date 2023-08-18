//keyboard event or live feedback

let form=document.querySelector(".signupform"); 

let user=document.querySelector("#user")
let password=document.querySelector("#password")
let userpatern=/^[A-Z a-z]{6,8}$/;

user.addEventListener("keyup", (e)=>
{
    e.preventDefault();
    
    if(userpatern.test(e.target.value))
    {
        console.log("user name is valid")
    }
    else{
        console.log("invalid")
    }
    
})
