var button =document.querySelector("button")
var input =document.querySelector("input")
var list = document.querySelector("ul")

const callbackfun = (event) =>
{
   console.log(input.value)
}

button.addEventListener("click",callbackfun)