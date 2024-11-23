// task 1:
// get the user to enter a medicine that they are looking for (using a textbox)
// then display the medicine after pushing a button

async function displayMedicine() {
    let getName = document.getElementById("search").value;
    const displayMedicine = document.getElementById("result");
    displayMedicine.innerHTML = "";
    


    const response = await fetch('http://localhost:8000/medicines/${getName}')
        .then(async response => {
            if(!response.ok) {
                throw new Error("Error with network");
            }
            const data = await response.json();
            console.log(data);
            console.log(data.name);

        })

        .then(data => {
            console.log('Data received:', data);
            displayMedicine.innerHTML = `<p>Medicine: ${data.name}</p><p>Price: ${data.price}</p>`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            displayMedicine.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}