const a = document.querySelectorAll("input")[0]
const b =document.querySelectorAll("input")[1]
const add = document.querySelector("#add")
const multiply =document.querySelector("#multiply")
const subtract=document.querySelector("#subtract")
const division=document.querySelector("#division")
const resultBox = document.querySelector(".result")

const calculator = (event,operation) =>
{
  switch (operation)
  {
    case "add":
        resultBox.innerHTML=parseInt(a.value)+parseInt(b.value)
        break;
    case "multiply":
        resultBox.innerHTML=parseInt(a.value)*parseInt(b.value)
        break;
    case "subtract":
        resultBox.innerHTML=parseInt(a.value)-parseInt(b.value)
        break;
    case "division":
        resultBox.innerHTML=parseInt(a.value)/parseInt(b.value)
        break;
  }
}
add.addEventListener('click',(event) => calculator(event,"add"))

multiply.addEventListener("click",(event) => calculator(event,"multiply"))

subtract.addEventListener("click",(event) => calculator(event,"subtract"))

division.addEventListener("click",(event) => calculator(event,"division"))