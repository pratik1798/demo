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
  listItem.textContent = userDetails.username + ' - ' + userDetails.email + ' - ' + userDetails.phone + ' ';

  const deleteBtn = document.createElement('button')
  deleteBtn.type = 'button'
  deleteBtn.value = 'Delete'
  deleteBtn.onclick = () => {
    localStorage.removeItem(userDetails.email);
    uList.removeChild(listItem);
  }
  listItem.appendChild(deleteBtn);
  uList.appendChild(listItem);
}
module.exports = handleFormSubmit;