function saveToLocalStorage(event){
    event.preventDefault();
    const uname = event.target.username.value;
    const email = event.target.email.value;
    const number = event.target.phone.value;
    localStorage.setItem('name',uname);
    localStorage.setItem('email',email);
    localStorage.setItem('phonenumber',number);
    
}


