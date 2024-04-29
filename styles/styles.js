const toggleButtonBurguer = () =>{
    const buttonBurguerTrigger = {
        //boton de hambuerguesa
        buttonBurguer: document.querySelector('.button-burguer'),
        firstLine: document.querySelector('#first-line'),
        secondLine: document.querySelector('#second-line'),
        thirdLine: document.querySelector('#third-line'),
        //navbar
        navbar: document.querySelector('#navbar')
    }    
    
    const { firstLine, secondLine ,thirdLine, navbar } = buttonBurguerTrigger
    firstLine.classList.toggle('first-line-change')
    secondLine.classList.toggle('second-line-change')
    thirdLine.classList.toggle('third-line-change')
    navbar.classList.toggle('navbar-change')
}

const toggleGear = () =>{
     const nabvarListSettings = {
        navbarGlobalSettings: document.querySelector('#navbar-global-settings'),
        navbarGear: document.querySelector('#navbar-gear')
     }

     const { navbarGear, navbarGlobalSettings } = nabvarListSettings
     navbarGear.classList.toggle('navbar-gear-change')
     navbarGlobalSettings.classList.toggle('navbar-global-settings-change')
}

const addClassInformation = (projectTitleInfo,projectTitleD,projectTitleInformationChanger,projectTitleDelayChanger) =>{
    const projectAppTemp = {
        projectTitleInformation: document.querySelector(projectTitleInfo),
        projectTitleDelay: document.querySelector(projectTitleD)
    }

   const { projectTitleInformation, projectTitleDelay } = projectAppTemp 
   
   projectTitleInformation.classList.add(projectTitleInformationChanger)
   projectTitleDelay.classList.add(projectTitleDelayChanger)
}

const removeClassInformation = (projectTitleInfo,projectTitleDelayer,projectTitleInformationChang,projectTitleInfoClass
    ,projectTitleDelayChanger) =>{
    const projectAppTemp = {
        projectTitleInformation: document.querySelector(projectTitleInfo),
        projectTitleDelay: document.querySelector(projectTitleDelayer)
    }

   const { projectTitleInformation, projectTitleDelay } = projectAppTemp 

   projectTitleInformation.classList.replace(projectTitleInformationChang,projectTitleInfoClass)
   projectTitleDelay.classList.replace(projectTitleDelayChanger,projectTitleDelayer) 
}

