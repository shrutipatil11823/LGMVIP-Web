//Filter method

var arr = [2,3,4,5,6]

arr.filter ((element,index) =>{
    if(element % 2 ==0)
    console.log(element,index)
})