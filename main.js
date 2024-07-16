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
    
    //cambiar el idioma para el elemento navbar_settings
    const navbar_settings = document.querySelector('.navbar-settings span:first-child');
    const { navbar_list_p_settings } = nabvar_list;
    navbar_settings.textContent = navbar_list_p_settings

    try{
        for(let i=0;i<=nabvar_list_node.length;i++){
            nabvar_list_node_filtered[i].textContent = nabvar_list_arr[i]
        }
    }catch(err){
        {}
    }
}

const setting_options_changer = (request) =>{
    //seleccionar los valores de la API
    const { themes } = request;
    const themes_list_arr = Object.values(themes)

    //seleccionar los dos pirmeros elementos del array asociados alos titulos
    const themes_list_arr_h4 = themes_list_arr.slice(0,2)
    
    //Seleccionar los parrafos siguientes
    const themes_list_arr_p = themes_list_arr.slice(2,5);
    
    //unir en un solo array los elementos de settings
    const settings_texts = themes_list_arr_h4.concat(themes_list_arr_p)

    //seleccionar el primer y el segundo titulo
    const navbar_customization_h4 = document.querySelectorAll('.navbar-customization h4');
    const navbar_customization_h4_arr = [...navbar_customization_h4];
    const navbar_customization_h4_filtered = navbar_customization_h4_arr.slice(0,2)

    //seleccionar los tres nodos siguientes de settings
    const navbar_customization_p = document.querySelectorAll('.navbar-customization p');
    const navbar_customization_p_arr = [...navbar_customization_p]
    const navbar_customization_p_filtered = navbar_customization_p_arr.slice(2,5)

    //const navbar_customization_p_second = navbar_customization_p_arr.slice(7,10)
    
    //unir en un solo array los elementos depurados
    const settings_nodes = navbar_customization_h4_filtered.concat(navbar_customization_p_filtered)

    try{
        for(let i=0;i<=settings_texts.length;i++){
            settings_nodes[i].textContent = settings_texts[i]
        }
    }catch(err){
        {}
    }
}

const setting_options_changer_desk = (request) =>{
    //seleccionar los valores de la API
    const { themes } = request;
    const themes_list_arr = Object.values(themes)
    
    //seleccionar los dos pirmeros elementos del array asociados alos titulos
    const themes_list_arr_h4 = themes_list_arr.slice(0,2)

    //Seleccionar los parrafos siguientes
    const themes_list_arr_p = themes_list_arr.slice(2,5); 

    //unir en un solo array los elementos de settings
    const settings_texts = themes_list_arr_h4.concat(themes_list_arr_p)

    //seleccionar los tres nodos siguientes de settings
    const navbar_customization_p = document.querySelectorAll('.navbar-customization p');
    const navbar_customization_p_arr = [...navbar_customization_p]
    const navbar_customization_p_filtered = navbar_customization_p_arr.slice(7,10)
    
    //seleccionar el primer y el segundo titulo
    const navbar_customization_h4 = document.querySelectorAll('#navbar-customization-desktop h4');
    const navbar_customization_h4_arr = [...navbar_customization_h4];
    
    const settings_nodes = navbar_customization_h4_arr.concat(navbar_customization_p_filtered)

    try{
        for(let i=0;i<=settings_nodes.length;i++){
            settings_nodes[i].textContent = settings_texts[i]
        }
    }catch(err){
        {}
    }
}

const introduction_changer = (request) =>{
    //seleccionar los valores de la API
    const { introduction } = request;
    const introduction_list_arr = Object.values(introduction)

    //seleccionar todas las etiquetas del nodo introduction y cambiar
    const first_greeting = document.querySelector('.first-greeting');
    const name_label = document.querySelector('.name-label');
    const cv_downloader = document.querySelector('.cv-downloader');

    let introduction_arr = [first_greeting,name_label,cv_downloader]
    
     try{
        for(let i=0;i<=introduction_arr.length;i++){
            introduction_arr[i].textContent =  introduction_list_arr[i];
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
        setting_options_changer(respond);
        setting_options_changer_desk(respond);
        introduction_changer(respond);
    })
}
   
const englishCall = async () =>{
    await fetch('http://localhost:3005/eng')
    .then(data=>data.json())
    .then((respond)=>{
        nabvar_changer_desktop(respond);
        nabvar_changer_cellphone(respond);
        setting_options_changer(respond);
        setting_options_changer_desk(respond);
        introduction_changer(respond);
    })    
}

