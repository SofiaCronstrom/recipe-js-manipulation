//1.

const h1Ref = document.querySelector('#recipe-name');

console.log(h1Ref.childNodes[0].nodeValue);

//2.
console.log(h1Ref.nodeName);

//3.
const pRef = document.querySelector('.description');
const compStyleP = window.getComputedStyle(pRef);
console.log(compStyleP.getPropertyValue('font-size'))
