let list = document.querySelector('#parentLi')
let childs = list.childNodes[5];
list.removeChild(childs);
console.log(childs)