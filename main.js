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

const about_me_changer = (request) =>{
    //seleccionar los valores de la API
    const { about_me } = request;
    const about_me_arr = Object.values(about_me);

    //seleccionar todas las etiquetas del nodo introduction y cambiar
    const about_me_node = document.getElementById('about-me');
    const about_me_role = document.querySelector('.about-me-role');
    const aobut_first_p = document.querySelector('.about-first-p');
    const about_second_p = document.querySelector('.about-second-p');
    
    let introduction_arr = [about_me_node,about_me_role,aobut_first_p,about_second_p];
    
    try{
        for(let i=0;i<=introduction_arr.length;i++){
            introduction_arr[i].textContent =  about_me_arr[i];
        }
    }catch(err){
        {}
    } 
}

const project_changer = (request) =>{
    const { projects } = request;

    //obtener el contenido del título
    const { projects_tittle } = projects;

    //obtener el contenido de proyecto: app del clima
    const { project_wather_app } = projects;
    const { project_title_h4_weather_app, project_title_weather_description  } = project_wather_app;

    //obtener el contenido de proyecto: libreria comunitaria
    const { library_static_page } = projects;
    const { project_title_h4_library, project_title_library_description } = library_static_page;

    //obtener el contenido de proyecto: prueba tecnica Aranda
    const { react_technical_proof } = projects;
    const { project_title_h4_react_proof, project_title_react__proof_description } = react_technical_proof

    let introduction_arr = [projects_tittle,project_title_h4_weather_app
        ,project_title_weather_description,project_title_h4_library, project_title_library_description,
        project_title_h4_react_proof, project_title_react__proof_description];
 
    //seleccionar las etiquetas: titulo
    
    const project_title = document.querySelector('#projects')
    //Aplicacion del clima React.js
    const project_app_temp_title = document.querySelector('#project-title-delay h4');
    const project_app_temp_p = document.querySelector('#project-title-delay p')
    //Biblioteca
    const project_lib_temp_title = document.querySelector('#project-library-information h4');
    const project_lib_temp_p = document.querySelector('#project-library-information p');
    //Prueba técnica de React
    const project_react_proof_title = document.querySelector('#project-aranda-delay h4')
    const project_react_proof_p = document.querySelector('#project-aranda-delay p')       
    
    let introduction_node = [project_title,project_app_temp_title,project_app_temp_p,project_lib_temp_title,project_lib_temp_p,project_react_proof_title,project_react_proof_p]

    try {
        for(i=0;i<=introduction_node.length;i++){
            introduction_node[i].textContent = introduction_arr[i]
        }
    } catch (error) {
        {}
    }
}

const skills = (request) =>{
    //seleccionar el contenido 
    const { skills } = request;

    //selecciona la etiqueta
    const skill_node = document.querySelector('#skills h4');
    skill_node.textContent = skills;
}

const contact = (request) =>{
    //seleccionar el contenido
    const { contact } = request
    const contact_arr = Object.values(contact);
    
    const footer_tittle = document.querySelector('.footer h1');
    const footer_p = document.querySelector('.footer h1+ p');

    let footer_arr = [footer_tittle,footer_p]
    
    try {
        for(i=0;i<=contact_arr.length;i++){
            footer_arr[i].textContent = contact_arr[i]
        }   
    } catch (error) {
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
        about_me_changer(respond);
        project_changer(respond);
        skills(respond);
        contact(respond);
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
        about_me_changer(respond);
        project_changer(respond);
        skills(respond);
        contact(respond);
    })    
}

