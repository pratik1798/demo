

    function handleFormSubmit(event) {
        event.preventDefault();
        const uname = event.target.username.value;
        const email = event.target.email.value;
        const number = event.target.phone.value;
    
        
    
        localStorage.setItem('User Details', JSON.stringify({
            name: uname,
            email: email,
            phone: number,
        }));
        console.log(localStorage);
    }
    