// Write your code below:
const litem = document.getElementsByTagName('li');

litem[4].style.color = 'blue';

for (let i=0; i<litem.length; i++){
  litem[i].style.fontStyle = 'italic';
}