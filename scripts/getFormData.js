window.onload = function() {
    localStorage.setItem('PetInformation', JSON.stringify([]));
  };

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
    //Validar si hay LocalStorage//
    if(localStorage.getItem('PetInformation')){

        let currentArray =  JSON.parse(localStorage.getItem('PetInformation'));

        if(currentArray.length === 0){
            console.log( typeof data);
            currentArray.push(data);

            var blob = new Blob([JSON.stringify(currentArray)], { type: "application/json" });
            saveAs(blob, "data.json");

        }else{
            console.log("Aun no funciona esperate");
            let localInfo = localStorage.getItem('PetInformation')
            let arrayInfo = JSON.parse(localInfo);

            arrayInfo.push(data);

            var blob = new Blob([JSON.stringify(arrayInfo)], { type: "application/json" });
            saveAs(blob, "data.json");

            localStorage.removeItem('PetInformation');

        }

      /*   currentArray.push("Hola")

        console.log(currentArray); */

      /*   console.log("TRUE si hay datos")

        let localData = localStorage.getItem('PetInfo');

        console.log(typeof localData);

        let finalData = localData + "," + JSON.stringify(data);

        console.log(finalData); */

        //7var blob = new Blob([finalData], { type: "application/json" });
        //saveAs(blob, "data.json");

    }else{
        /* var blob = new Blob([JSON.stringify(data)], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "data.txt"); */
        console.error("ERRORRRR");
    }


}
function cleanInputs(){
    const petOwner = document.getElementById('petOwer').value = "";
    const phone = document.getElementById('phone').value = "";
    const petName = document.getElementById('petName').value = "";
    const petAge = document.getElementById('petAge').value = "";
    const breed = document.getElementById('breed').value = "";
    const comments = document.getElementById('comments').value = "";
}