function handleFormSubmit(event) {
    event.preventDefault();
    const expense = document.getElementById('expense').value;
    const description = document.getElementById('description').value;
    const category =  document.getElementById('category').value;
  
    let trackExpense = {
      expense,
      description,
      category,
    };
  
    localStorage.setItem(trackExpense.expense, JSON.stringify(trackExpense));
    showUser(trackExpense);
  }
  
  function showUser(trackExpense) {
    const uList = document.getElementById('uList');
  
    const listItem = document.createElement('li');
    listItem.textContent = trackExpense.expense + ' - ' + trackExpense.description + ' - ' + trackExpense.category + '  ';
    listItem.className='list-group-item';

    const deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    deleteBtn.value = 'Delete'
    deleteBtn.textContent = 'Delete Expense'
    deleteBtn.className ="btn btn-primary ms-5"
    deleteBtn.onclick = () => {
      localStorage.removeItem(trackExpense.expense);
      uList.removeChild(listItem);
    }
  
    const editBtn = document.createElement('input');
    editBtn.type = 'button'
    editBtn.textContent = 'Edit Expense'
    editBtn.value = 'Edit'
    editBtn.className ="btn btn-primary ms-2"
    editBtn.onclick = () => {
        localStorage.removeItem(trackExpense.expense);
        uList.removeChild(listItem)
      document.getElementById('expense').value = trackExpense.expense;
      document.getElementById('description').value = trackExpense.description;
      document.getElementById('category').value = trackExpense.category;
       
    }
    
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    uList.appendChild(listItem);
  }

  window.onload = function() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const trackExpense = JSON.parse(localStorage.getItem(key));
        showUser(trackExpense);
    }
}