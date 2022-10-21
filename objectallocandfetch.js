var formData;
function formobjects(){
    return;
}

function handleSubmit(event){
    event.preventDefault();
    let formElement = document.getElementById("newentry");
    let stockistId = formElement["Stockist_ID"].value;
    let name = formElement["Stockist_Name"].value;
    let address = formElement["Address"].value;
    let companyname = formElement["Company_Name"].value;
    let phoneno = formElement["Phone_No"].value;

    formData = {
                id: stockistId,
                name: name,
                address: address,
                companyname: companyname,
                phoneno: phoneno
            }

    console.log(formData);
    // window.alert(formData.id);
    saveUser();

}
function saveUser(){
    console.log("Saved user to backend", formData);
   try{fetch("https://jsonplaceholder.typicode.com/todos/1").then(formData => {return formData.json();})
    console.log(formData);}
    catch(error){
        console.log("Error Occurred durirng the Fetching of data", error);
    }
}