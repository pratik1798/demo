// Write your code below:
const para = document.createElement('p');

const text = document.createTextNode('Total fruits: 4');

para.appendChild(text);
para.id = 'fruits-total';

const divs = document.getElementsByTagName('div');
const secdiv= divs[1];
const fruits= document.querySelector('.fruits');
secdiv.insertBefore(para,fruits);

const mainheading = document.getElementById('header');
const thirdH = document.createElement('h3');
const thirdText = document.createTextNode('Buy high quality organic fruits online');

thirdH.appendChild(thirdText);
thirdH.style.fontStyle = 'italic'
mainheading.appendChild(thirdH);
