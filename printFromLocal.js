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
  
      localStorage.setItem(email, JSON.stringify(userDetails));
  
    const body = document.getElementsByTagName('body')[0];
    const ul = document.getElementById('ul');
  
    for (const key in userDetails) {
      const li = document.createElement('li');
      const liText = document.createTextNode(userDetails[key]);
      li.appendChild(liText);
      ul.appendChild(li);
    }
  
  
  }
  module.exports = handleFormSubmit;