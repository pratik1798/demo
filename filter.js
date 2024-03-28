// Add input element inside form, before button, to take fruit description
const description = document.createElement('input');

description.id = "description";
description.type = "text";
const form = document.getElementsByTagName('form')[0];
const btn = document.getElementsByTagName('button')[0];
form.insertBefore(description,btn);

// Show the fruit description in italics on the next line

const fruits = document.querySelector('.fruits');
const fruit = document.querySelectorAll('.fruit');

 fruit.forEach(fruitItem => {
    const deleteBtn = fruitItem.querySelector('.delete-btn'); // Use querySelector instead of getElementsByClassName
    const descriptionToAdd = document.getElementById('description').value;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = descriptionToAdd;
    descriptionParagraph.style.fontStyle = 'italic';

    // Insert descriptionParagraph before deleteBtn
    fruitItem.insertBefore(descriptionParagraph, deleteBtn.nextSibling);
});

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  fruit.forEach(fruit => {
    const fruitToAdd = document.getElementById('fruit-to-add').value;
    const descriptionToAdd = document.getElementById('description').value;

    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(fruitToAdd);
    newLi.appendChild(newLiText);

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = descriptionToAdd;
    descriptionParagraph.style.fontStyle = 'italic';

    newLi.appendChild(descriptionParagraph);
    
    fruits.appendChild(newLi);
  });
});



// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.getElementById('filter');


filter.addEventListener('keyup', function(event) {
  const textEntered = event.target.value.toLowerCase();
  for (let i = 0; i < fruit.length; i++) {
    const currFruit = fruit[i].firstChild.textContent.toLowerCase();
    const currDescription = fruit[i].childNodes[1].textContent.toLowerCase();
    console.log(currDescription)// Get the description text
    if (currFruit.indexOf(textEntered) != -1 || currDescription.indexOf(textEntered) != -1) {
      fruit[i].style.display = 'flex';
    } else {
      fruit[i].style.display = 'none';
    }
  }
});

