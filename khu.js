let c=document.querySelector(".coderdost")
c.innerText+="is my life"
console.log(c.innerText)

let D=document.querySelector("div")
D.setAttribute("id","htttps://coder:dost")
console.log(D)


let css=document.querySelector("p")
css.style.color="white"
css.style.backgroundColor="red"


//let h=document.querySelector("h2")
//h.classList.remove("dost")
//console.log(h)


let parentElement=document.querySelector(".dsa")
console.log(parentElement.children)


let arr=Array.from(parentElement.children)
arr.forEach(function(elements){
    elements.classList.add("coding")

})

let ce=document.querySelector("p")
console.log(ce.parentElement)
console.log(ce.previousElementSibling)


let ee=document.querySelectorAll("p")
ee.forEach(function(elements){
elements.addEventListener("click",function(e)
{
    
console.log("item clicked")
console.log(e.target)
e.target.remove();
})
}
)

const kh =document.querySelector("h1")
let   button=document.querySelector(".clickme")
button.addEventListener("click",function()
{
    let l= document.createElement("p")
    l.textContent="something new added"
kh.prepend(l)
})

const kh1 =document.querySelector("h1")
kh1.addEventListener("click" , e =>
{
if(e.target.nodeName=="p")
{
   
    e.target.remove();
}
})