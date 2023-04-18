//get the data from the json file
fetch("data.json")
//the fetch method return a promise obj
.then(function(response){
    // use .then to catch reponse obj and resolve it to javaScr obj with the .json() method
    return response.json();
})
//.json() method returns also a promise so use another .then() to catch our data 
.then(function(data){
    //targeting the table-body in the html file and storing it in the placeholder var
    let placeholder = document.querySelector("#data-output");
    //initialize a out variable and set the value to empty str to use later 
    let out = " "; 
    //loop through the data array to access everything
    for(let data of data){
        //use the out var to append table-row template which hold data values
        //back ticks are a template literal to write the html code
        out += `
        <tr>
            <td> <img src="${data.images.xs}"></img></td>
            <td>${data.name}</td>
            <td>${data.biography.fullName}</td>
            <td>${data.powerstats}</td>
            <td>${data.appearence.race}</td>
            <td>${data.appearence.gender}</td>
            <td>${data.appearence.height}</td>
            <td>${data.appearence.weight}</td>
            <td>${data.biography.placeOfBirth}</td>
            <td>${data.biography.alignment}</td>
        </tr>
        `; //insert in the html javascript var using the structure above
    }
    //target the tbody and add the data that out var holds
    placeholder.innerHTML = out;
});