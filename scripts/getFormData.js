

const btnData = document.getElementById('btnData');
btnData.addEventListener('click',(e)=>{
    e.preventDefault();
    getDataForm();
})


function getDataForm(){
    const petOwner = document.getElementById('petOwer').value;
    const phone = document.getElementById('phone').value;
    const petName = document.getElementById('petName').value;
    const petAge = document.getElementById('petAge').value;
    const breed = document.getElementById('breed').value;
    const comments = document.getElementById('comments').value;

    const finalData = {
        petOwner:petOwner,
        phone:phone,
        petName:petName,
        petAge:petAge,
        breed:breed,
        comments:comments
    }

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