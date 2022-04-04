


const upload = document.getElementById('upload');
upload.addEventListener('change', ()=>{
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);

    fr.onload = function(){
        let result = fr.result;

        console.log(typeof result);

        localStorage.setItem('PetInformation', result)

        //console.log(JSON.parse(finalResult));
        

    }
})

//TODO: Guardar texto del archivo en LocalStorage;
