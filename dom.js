let copy1=document.querySelector(".copy"); //copy event

copy1.addEventListener("copy", ()=>
{
    console.log("this is copy right content")
})



let mouse=document.querySelector(".box"); //mouse event

mouse.addEventListener("mousemove", (e)=>
{
    console.log(e.offsetX,e.offsetY)
})

