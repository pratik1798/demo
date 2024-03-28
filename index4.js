const mainHeading = document.querySelector('#main-heading');
const fruitItems = document.querySelector('.fruit');
const basketHeading = document.querySelector('#basket-heading');
mainHeading.style.textAlign = 'right';
basketHeading.style.color = 'brown';
const oddFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < oddFruitItems.length; i++) {
    oddFruitItems[i].style.backgroundColor = 'brown';
    oddFruitItems[i].style.color = 'white';
}