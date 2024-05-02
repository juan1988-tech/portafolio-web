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

const toggleHeaderGear = () =>{
    const nabvarListSettings = {
        generalSettings: document.querySelector('#general-settings'),
        navbarGear: document.querySelector('#header-settings-gear')
     }

     const { generalSettings,navbarGear } = nabvarListSettings;
     navbarGear.classList.toggle('header-settings-gear-change')
     generalSettings.classList.toggle('general-settings-change')
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

/*funciones de cambio de los estilos*/ 
const addPruprleTheme = () =>{
    /*identificar al selector de los estilos*/ 
    let theme = document.querySelector(':root');
    let header = document.querySelector('.header');
    let spanTitleLogo = document.querySelector('.title-logo span')
    let spanTitle = document.querySelector('.title-logo')
    let navbarCustomizationTitle = document.querySelector('.navbar-customization h4')

    /*cambiar el selector de estilos*/
    theme.style.setProperty('--main-body-background','linear-gradient(90deg, rgb(57, 12, 81) 0%, rgb(81.86, 38.13, 105.19) 50%, rgb(57, 12, 81) 100%)')
    theme.style.setProperty('--font-principal-letter','#FEFEFE')
    theme.style.setProperty('--font-principal-title','#00D8FF')
    theme.style.setProperty('--dark-principal-background','#2A093C')
    header.style.setProperty('background-color','#2A093C')
    spanTitle.style.setProperty('color','#FEFEFE')
    spanTitleLogo.style.setProperty('color','#00D8FF')
    navbarCustomizationTitle.style.setProperty('color','#00D8FF')
}

const addBlueTheme = () =>{
    /*identificar al selector de los estilos*/ 
    let theme = document.querySelector(':root');
    let spanTitleLogo = document.querySelector('.title-logo span')
    let spanTitle = document.querySelector('.title-logo')
    let header = document.querySelector('.header')
    let navbarCustomizationTitle = document.querySelector('.navbar-customization h4')

    /*cambiar el selector de estilos*/
    theme.style.setProperty('--main-body-background','linear-gradient(90deg, #0C0F51 0%, #22256D 50%, #0C0F51 100%)')
    theme.style.setProperty('--font-principal-letter','#FEFEFE')
    theme.style.setProperty('--font-principal-title','#8FFF00')
    theme.style.setProperty('--dark-principal-background','#090B36')
    header.style.setProperty('background-color','#090B36')
    generalSettingChange.style.setProperty('background-color','#090B36')
    navbarCustomizationTitle.setProperty('color','#8FFF00')
    spanTitleLogo.style.setProperty('color','#8FFF00')
}

const addLightTheme = () =>{
    let theme = document.querySelector(':root');
    let spanTitleLogo = document.querySelector('.title-logo span')
    let spanTitle = document.querySelector('.title-logo')
    let header = document.querySelector('.header')
    let generalSettingChange = document.querySelector('.general-settings-change')
    let navbarCustomizationTitle = document.querySelectorAll('.general-settings h4')


    theme.style.setProperty('--main-body-background','linear-gradient(90deg, #F7F7F7 0%, #E4E2E1 50%, #F7F7F7 100%)')
    header.style.setProperty('background-color','#1E1E1E')
    spanTitleLogo.style.setProperty('color','#00D8FF')
    
    spanTitle.style.setProperty('color','#FEFEFE')
    generalSettingChange.style.setProperty('background-color','#1E1E1E')
    navbarCustomizationTitle.style.setProperty('color','#00D8FF')
}
