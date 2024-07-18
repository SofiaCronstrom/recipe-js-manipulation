////PART 2
//1.
let logoTextRef = document.querySelector('.logo-text');
logoTextRef.style.color = '#384241';

//2.
let headerRef = document.querySelector('header');
headerRef.style.justifyContent = 'left';

//3.
headerRef.style.borderColor = 'lightgrey';

//4.
let h1Ref = document.querySelector('#recipe-name');
h1Ref.textContent = "Frozen cheesecake"

//5.
let iconRef = document.querySelector('.time-container>:first-child');
iconRef.classList.add('material-icons');

//6.
let timeSpanRef = document.querySelector('.time');
timeSpanRef.textContent = '60+ min';

//7.
let imgRef = document.querySelector('.image-container img');
imgRef.setAttribute('src', 'assets/frozen-cheesecake-slice.jpg');

//8.
let ingredientsArtRef = document.querySelector('.ingredients-container');
ingredientsArtRef.style.backgroundColor = '#f9f9f9';

//9.
let ingredientsBottomRef = document.querySelector('.ingredients-list-bottom');
ingredientsBottomRef.innerHTML = '<li>15st digestivekex</li><li>Lite smör</li>';

//10. 
let ingredientsLiRef = document.querySelector('.ingredients-list-paste li:nth-of-type(3)');
ingredientsLiRef.textContent = '3tsk vaniljsocker';

//11.
let ingredientsPasteRef = document.querySelector('.ingredients-list-paste');

let ingrPasteChild = document.createElement('li');
ingrPasteChild.textContent = '400g naturell philadelphiaost'

ingredientsPasteRef.appendChild(ingrPasteChild);

//12.
let instrShadowRef = document.querySelector('.how-to-do .instructions.shadow');
console.log(instrShadowRef)
instrShadowRef.style.boxShadow = 'none';

//13.
let instrLiRef2 = document.querySelector('.instructions-list li:nth-of-type(2)');
instrLiRef2.textContent = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.'

let instrLiRef9 = document.querySelector('.instructions-list li:nth-of-type(9)');
instrLiRef9.textContent = 'Ställ in i frysen över natten.'
