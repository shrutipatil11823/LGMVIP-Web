var arr = ["go to gym",'Eat food',"clean house"]
for(var i=0 ; i<arr.length;i++)
{
    console.log(arr[i])
}

var callbackfunction = (element,index) => {
    console.log(element,index)
}

arr.forEach(callbackfunction)
{
    console.log(element,index)
}