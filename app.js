const a = document.querySelectorAll("input")[0]
const b =document.querySelectorAll("input")[1]
const add = document.querySelector("#add")
const multiply =document.querySelector("#multiply")
const subtract=document.querySelector("#subtract")
const division=document.querySelector("#division")
const resultBox = document.querySelector(".result")

/*
const into = () =>
{
    const result =parseInt (a.value) * parseInt(b.value)
    resultBox.innerHTML = result
}


*/

const calculator = (event,operation) =>
{
    console.log(event.target)
    if (operation=="add")
    {
        const result=parseInt(a.value)+parseInt(b.value)
        console.log(result)
    }
    else if(operation=="multiply")
    {
        const result=parseInt(a.value)*parseInt(b.value)
        console.log(result)
    }
    else if(operation=="subtract")
    {
        const result=parseInt(a.value)-parseInt(b.value)
        console.log(result)
    }
    else if(operation=="division")
    {
        const result=parseInt(a.value)/parseInt(b.value)
        console.log(result)
    }
}
add.addEventListener('click',(event) => calculator(event,"add"))

multiply.addEventListener("click",(event) => calculator(event,"multiply"))

subtract.addEventListener("click",(event) => calculator(event,"subtract"))

division.addEventListener("click",(event) => calculator(event,"division"))