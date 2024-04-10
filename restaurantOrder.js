function loadData() {
    axios.get("https://crudcrud.com/api/a6b0ba1da81a42bca265779724f04dfe/orders")
        .then(response => {
            const orders = response.data;
            orders.forEach(order => {
                editOrder(order);
            });
        })
        .catch(error => console.error(error));
}


function handleOrder(event){
    event.preventDefault();

    const price = event.target.price.value;
    const dish = event.target.dish.value;
    const table = event.target.tables.value;

    const orderDetails = {
      price,
      dish,
      table,
    };

    axios
     .post('https://crudcrud.com/api/a6b0ba1da81a42bca265779724f04dfe/orders', orderDetails)
     .then((response) =>{
        console.log("added order");
        editOrder(response.data);
        document.getElementById('price').value = '';
        document.getElementById('dish').value = '';
     })
     .catch((error) => {
        console.log(error);
      });

}

function editOrder(data) {
    const table = document.getElementById(`${data.table}`);
    console.log(table)

    const newLi = document.createElement('li');
    newLi.textContent = data.price + ' - ' + data.dish + ' - ' + data.table

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';

    newLi.appendChild(deleteBtn);
    table.appendChild(newLi);

    deleteBtn.onclick = () => {
      table.removeChild(deleteBtn.parentElement);

      axios
      .delete(`https://crudcrud.com/api/a6b0ba1da81a42bca265779724f04dfe/orders/${data._id}`)
        .then((res) => console.log("Deleted"))
        .catch((err) => console.log(err));
    }
}