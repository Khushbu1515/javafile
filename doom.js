let form=document.querySelector(".signupform"); //form event

let email=document.querySelector("#email")
let password=document.querySelector("#password")
let passpatern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$";

form.addEventListener("submit", (e)=>
{
    e.preventDefault();
    let pass=password.value
    let result=pass.match(passpatern);
    if(result)
    {
        console.log("pass is strong")
    }
    else{
        console.log("invalid")
    }
    
})
