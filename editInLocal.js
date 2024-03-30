function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    let userDetails = {
      username,
      email,
      phone,
    };
  
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
    showUser(userDetails);
  }
  
  function showUser(userDetails) {
    const uList = document.getElementById('uList');
  
    const listItem = document.createElement('li');
    listItem.textContent = userDetails.username + ' - ' + userDetails.email + ' - ' + userDetails.phone;
  
    const deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    deleteBtn.value = 'Delete'
    deleteBtn.onclick = () => {
      localStorage.removeItem(userDetails.email);
      uList.removeChild(listItem);
    }
  
    const editBtn = document.createElement('input');
    editBtn.type = 'button'
    editBtn.textContent = 'Edit'
    editBtn.value = 'Edit'
    editBtn.onclick = () => {
  
      document.getElementById('username').value = userDetails.username;
      document.getElementById('email').value = userDetails.email;
      document.getElementById('phone').value = userDetails.phone;
       localStorage.removeItem(userDetails.email);
      uList.removeChild(listItem)
    }
    
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    uList.appendChild(listItem);
  }
  module.exports = handleFormSubmit