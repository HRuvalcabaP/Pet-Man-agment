

const btnData = document.getElementById('btnData');
btnData.addEventListener('click',(e)=>{
    e.preventDefault();
    getDataForm();
})

let finalData = {};


function getDataForm(){
    const petOwner = document.getElementById('petOwer').value;
    const phone = document.getElementById('phone').value;
    const petName = document.getElementById('petName').value;
    const petAge = document.getElementById('petAge').value;
    const breed = document.getElementById('breed').value;
    const comments = document.getElementById('comments').value;

    console.log("Data vacía", finalData);

    finalData.petOwner = petOwner;
    finalData.phone = phone;
    finalData.petName = petName;
    finalData.petAge = petAge;
    finalData.breed = breed;
    finalData.comments = comments;
    

    /* if(finalData.petOwner === "" || finalData.phone === "" || finalData.petName === "" || finalData.petAge === "" || finalData.breed === "" || finalData.comments === ""){
        btnData.setAttribute("disabled", true);
    }
    else{
        return null;
    }
 */
    saveData(finalData);
    cleanInputs();
}

function saveData(data){
    var blob = new Blob([JSON.stringify(data)], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "data.txt");
}
function cleanInputs(){
    const petOwner = document.getElementById('petOwer').value = "";
    const phone = document.getElementById('phone').value = "";
    const petName = document.getElementById('petName').value = "";
    const petAge = document.getElementById('petAge').value = "";
    const breed = document.getElementById('breed').value = "";
    const comments = document.getElementById('comments').value = "";
}