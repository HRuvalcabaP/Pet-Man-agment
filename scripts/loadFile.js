


const upload = document.getElementById('upload');
upload.addEventListener('change', ()=>{
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);

    fr.onload = function(){
        let result = fr.result;
        console.log(result);
    }
})

//TODO: Guardar texto del archivo en LocalStorage;
