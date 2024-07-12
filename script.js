
/////PART 1///////

// //1.

// const h1Ref = document.querySelector('#recipe-name');

// console.log(h1Ref.childNodes[0].nodeValue);

// //2.
// console.log(h1Ref.nodeName);

// //3.
// const pRef = document.querySelector('.description');
// const compStyleP = window.getComputedStyle(pRef);

// console.log(compStyleP.getPropertyValue('font-size'));

// //4.

// const imgRef = document.querySelector('img');
// const altRef = imgRef.getAttribute('alt');

// console.log(altRef);

// //5.
// const imgWidth = imgRef.clientWidth;
// const imgHeight = imgRef.clientHeight;
// const imgURL = imgRef.getAttribute('src');

// const imgDimension = {

//     url: imgURL,
//     width: imgWidth,
//     height: imgHeight,
    
// };

// console.log(imgDimension);

// //6.
// const ulRef = document.querySelector('.ingredients-list-paste');
// const numOfLi = ulRef.childElementCount;

// console.log(numOfLi);

// //7.

// const liFour = ulRef.children[3];
// console.log(liFour.innerHTML);

// //8.
// const olRef = document.querySelectorAll('.instructions-list>li');
// console.log(olRef)

// const instructionsArr = [];

// olRef.forEach((item, index) => {

//     instructionsArr.push({
//         order: index +1,
//         text: item.textContent.trim()
//     })
// });

// console.log(instructionsArr)

