//funcion para la llamada en inglés

const nabvar_changer_desktop = (request) =>{
    //seleccionar los valores de la API 
    const nabvar_list = request.nabvar_list;
    const nabvar_list_arr = Object.values(nabvar_list)  

    //seleccionar las etiquetas del header: desktop
    const nabvar_list_node = document.querySelectorAll('#navbar_list li a')
    const nabvar_list_node_arr = [...nabvar_list_node]

     //seleccionar las etiquetas: tag de settings
     const settings_list_node = document.querySelector('.header-settings p')
     const { navbar_list_p_settings } = nabvar_list;  

    try{
        settings_list_node.textContent = navbar_list_p_settings;
        
        //cambiar el contenido en etiquetas header: desktop
        for(let i=0;i<=nabvar_list_node_arr.length;i++){
             nabvar_list_node_arr[i].textContent = nabvar_list_arr[i]
        }
    }
    catch(err){
        {}
    }
}

const nabvar_changer_cellphone = (request) =>{
    //seleccionar los valores de la API
    const { nabvar_list } = request;
    const nabvar_list_arr = Object.values(nabvar_list)

    //seleccionar las etiquetas del header: cellphone
    const nabvar_list_node = document.querySelectorAll('#navbar-list-cellphone li a')
    const nabvar_list_node_arr = [...nabvar_list_node]
    const nabvar_list_node_filtered = nabvar_list_node_arr.slice(1);
    
    try{
        for(let i=0;i<=nabvar_list_node.length;i++){
            nabvar_list_node_filtered[i].textContent = nabvar_list_arr[i]
        }
    }catch(err){
        {}
    }
}


const spanishCall = async () =>{
    await fetch('http://localhost:3005/esp')
    .then(data=>data.json())
    .then((respond)=>{
        nabvar_changer_desktop(respond);
        nabvar_changer_cellphone(respond);
    })
}
   
const englishCall = async () =>{
    await fetch('http://localhost:3005/eng')
    .then(data=>data.json())
    .then((respond)=>{
        nabvar_changer_desktop(respond);
        nabvar_changer_cellphone(respond);
    })    
}

