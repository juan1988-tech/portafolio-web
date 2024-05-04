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

/*funcion para modificar el header*/
const modifyHeader = (bgDark,fontPrincipalLetter,fonPrincipalTitle) =>{
    let header = document.querySelector('.header');
    let titleLogo = document.querySelector('.title-logo');
    let titleLogoSpan = document.querySelector('.title-logo span');
    let ulHeaderas = document.querySelectorAll('.ul-header a')
    let extractulHeaderas = [...ulHeaderas]
    let headerSettings = document.querySelector('.header-settings');
    let generalSettingsChange = document.querySelector('.general-settings-change');
    let navbarCustomizationP = document.querySelectorAll('.navbar-customization p');
    let extractNavbarCustomizationP = [...navbarCustomizationP];
    let navbarCustomizationH4 = document.querySelectorAll('.navbar-customization h4');
    let extractnavbarCustomizationH4 = [...navbarCustomizationH4];
    let navbarChange = document.querySelector('.navbar-change');
    let navbarSettings = document.querySelector('.navbar-settings');
    let navbarListLiA = document.querySelectorAll('.navbar-list li a')
    let extractNavbarListLiA = [...navbarListLiA]

    header.style.setProperty('background-color',bgDark)
    titleLogo.style.setProperty('color',fontPrincipalLetter)
    titleLogoSpan.style.setProperty('color',fonPrincipalTitle)
    extractulHeaderas.map((item)=>{
        item.style.setProperty('color',fontPrincipalLetter)
    })
    headerSettings.style.setProperty('color',fontPrincipalLetter)

    if(document.body.clientWidth >=768){
        generalSettingsChange.style.setProperty('background-color',bgDark)
    }

    extractNavbarCustomizationP.map((item)=>{
        item.style.setProperty('color','#FEFEFE')
    })

    extractnavbarCustomizationH4.map((item)=>{
        item.style.setProperty('color',fonPrincipalTitle)
    })

    extractNavbarListLiA.map((item)=>{
        item.style.setProperty('color',fontPrincipalLetter)
    })

    navbarChange.style.setProperty('background-color',bgDark)
    navbarSettings.style.setProperty('color','#FEFEFE')
}

const modifyFooter = (bgDark,fonPrincipalTitle,fontPrincipalLetter) =>{
    let footer = document.querySelector('.footer');
    let footerH1 = document.querySelector('.footer h1');
    let footerP = document.querySelector('.footer h1 + p');
    let footerSpan = document.querySelectorAll('.social-media-grid span + span');
    let extractFooterSpan = [...footerSpan];
    let footerDev = document.querySelector('.footer-dev')


    footer.style.setProperty('background-color',bgDark);
    footerH1.style.setProperty('color',fonPrincipalTitle);
    footerP.style.setProperty('color',fontPrincipalLetter);
    extractFooterSpan.map((item)=>{
        item.style.setProperty('color',fontPrincipalLetter);
    })
    footerDev.style.setProperty('color',fontPrincipalLetter)
}

const addPruprleTheme = () =>{
    /*identificar al selector de los estilos*/ 
    let theme = document.querySelector(':root');

    modifyHeader('#2A093C','#FEFEFE','#00D8FF');
    modifyFooter('#2A093C','#00D8FF','#FEFEFE');
    /*cambiar el selector de estilos*/
    theme.style.setProperty('--main-body-background','linear-gradient(90deg, rgb(57, 12, 81) 0%, rgb(81.86, 38.13, 105.19) 50%, rgb(57, 12, 81) 100%)')
    theme.style.setProperty('--font-principal-letter','#FEFEFE')
    theme.style.setProperty('--font-principal-title','#00D8FF')
    theme.style.setProperty('--dark-principal-background','#2A093C')
}

const addBlueTheme = () =>{
    /*identificar al selector de los estilos*/ 
    let theme = document.querySelector(':root');

    modifyHeader('#090B36','#FEFEFE','#8FFF00');
    modifyFooter('#090B36','#8FFF00','#FEFEFE');
    /*cambiar el selector de estilos*/
    theme.style.setProperty('--main-body-background','linear-gradient(90deg, #0C0F51 0%, #22256D 50%, #0C0F51 100%)')
    theme.style.setProperty('--font-principal-letter','#FEFEFE')
    theme.style.setProperty('--font-principal-title','#8FFF00')
    theme.style.setProperty('--dark-principal-background','#090B36')
}

const addLightTheme = () =>{
    let theme = document.querySelector(':root');
    let buttonBurguer = {
        firstLine: document.querySelector('.first-line-change'),
        secondLine: document.querySelector('.second-line-change'),
        thirdLine: document.querySelector('.third-line-change'),
    }
    console.log(buttonBurguer)
    modifyHeader('#1E1E1E','#FEFEFE','#00D8FF');
    modifyFooter('#1E1E1E','#00D8FF','#FEFEFE');
    const { firstLine, secondLine, thirdLine} = buttonBurguer;

    /*cambio de estilos generales*/
    firstLine.style.setProperty('background-color','#FEFEFE')
    thirdLine.style.setProperty('background-color','#FEFEFE')
    theme.style.setProperty('--main-body-background','linear-gradient(90deg, #F7F7F7 0%, #E4E2E1 50%, #F7F7F7 100%)')
    theme.style.setProperty('--font-principal-letter','#2C2B2B')
    theme.style.setProperty('--font-principal-title','#0D16D9')
    theme.style.setProperty('--dark-principal-background','#090B36')
}
