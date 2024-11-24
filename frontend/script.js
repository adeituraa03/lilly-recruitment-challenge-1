// task 1:
// get the user to enter a medicine that they are looking for (using a textbox)
// then display the medicine after pushing a button
// task 2:
// get the front end to return null for any values that are missing from the data in the back end
// task 3:
// give the user the option to input or retrieve data from the backend
// 


async function displayMedicine() {
    let getName = document.getElementById("search").value;
    const displayMedicine = document.getElementById("result");
    displayMedicine.innerHTML = "";
    const tryAgain = document.getElementById("tryAgainMessage");
    tryAgain.innerHTML = "";
    
    
    try {   // try/catch block to handle errors during the GET request using the fetch API
        const response = await fetch(`http://localhost:8000/medicines/${getName}`, {    // sends data to the `http://localhost:8000/medicines/${getName}` endpoint
            method: 'GET',          // specifies the HTTP method to use for the request
            headers: {              // contains metadata about the request
                'Content-Type' : 'application/json'     // tells the server that the data being sent is formatted as JSON
            }
        });

        if(!response.ok) {          // checks if the HTTP status code is not successful (a failed API call)
            throw new Error("Error with network");      // creates a new Error object 
        }

        const result = await response.json();           // converts the respose data into a format that can be worked with in javascript
        
        if (result.name === undefined || result.price === undefined) {
            console.log("not defined")
            tryAgain.innerHTML = `<p style="color: red;">This does not exist, please try again</p>`;      // tells the user to try again
            document.getElementById("search").value = "";
        }
        else {
            console.log('Response', result);           // debugging statement
            displayMedicine.innerHTML = `<p>Medicine: ${result.name}</p><p>Price: ${result.price}</p>`;     // displays the name and price of the medicine entered by the user
            document.getElementById("search").value = "";
        }
        
    
    } catch (error) {              // if the HTTP status code is not successful 
        console.log('Error', error)                     // debugging statement
        displayMedicine.innerHTML = `<p style="color: red;">${error}</p>`;      // displays the error
    }
}

async function inputMedicine() {
    let medicineName = document.getElementById("name").value;
    let medicinePrice = document.getElementById("price").value;
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = "";
    const inputDataMessage = document.getElementById("inputDataMessage");
    inputDataMessage.innerHTML = "";

    const formData = new URLSearchParams();
    formData.append('name', medicineName);
    formData.append('price', medicinePrice);

    try {   // try/catch block to handle errors during the GET request using the fetch API
        const response = await fetch(`http://localhost:8000/create`, {    // sends data to the `http://localhost:8000/create` endpoint
            method: 'POST',          // specifies the HTTP method to use for the request
            headers: {              // contains metadata about the request
                'Content-Type' : 'application/x-www-form-urlencoded'     // tells the server that the data being sent as url encoded format
            },
            body: formData.toString()   // sends the data as url encoded 
        });

        // Handle the response after sending the request
        if (!response.ok) { // Check if the response status code is not successful (e.g., 4xx, 5xx)
            throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error with the status code
        }

        // If the response is successful, parse it as JSON
        const result = await response.json();
        console.log('Response:', result); // Log the result for debugging
        inputDataMessage.innerHTML = `<p style="color: green;">Data has been inputted correctly</p>`;

    } catch (error) {              // if the HTTP status code is not successful 
        console.log('Error', error)                     // debugging statement
        errorMessage.innerHTML = `<p style="color: red;">${error}</p>`;      // displays the error
    }
}
