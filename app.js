var list =document.querySelector('ul')


var arr = ['Go to Gym','cook oatmeal','Eat']
arr.push('Resign')

for (var i=0;i<arr.length;i++)
{
    var element =document.createElement('li')
    var textnode = document.createTextNode(arr[i])
    element.appendChild(textnode)
    list.appendChild(element)
}