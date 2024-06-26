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

    if(document.body.clientWidth >768){
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

    if(document.body.clientWidth <=768){
        navbarChange.style.setProperty('background-color',bgDark)
        navbarSettings.style.setProperty('color','#FEFEFE')
    }
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

const modiftyButton = (bgDark,fontPrincipalLetter) =>{
    const cvDownloader = document.querySelector('.cv-downloader')
    cvDownloader.style.setProperty('background-color',bgDark);
    cvDownloader.style.setProperty('color',fontPrincipalLetter);
    cvDownloader.style.setProperty('border',`1px solid ${fontPrincipalLetter}`);
}

const modifyProjectApp = (fontPrincipalTitle,fontPrincipalLetter,fontPrincipalAncle) =>{
    let projectTitleInformation = document.querySelectorAll('.projects h4');
    let extractProjectTitle = [...projectTitleInformation];
    
    let projectTitleP = document.querySelectorAll('.projects h4 + p');
    let extractProjectP = [...projectTitleP];    
    
    let projectTitleA = document.querySelectorAll('.projects a');
    let extractProjectTitleA = [...projectTitleA]

    extractProjectTitle.map((item)=>{
        item.style.setProperty('color',fontPrincipalTitle)
    })    

    extractProjectP.map((item)=>{
        item.style.setProperty('color',fontPrincipalLetter)
    })

    extractProjectTitleA.map((item)=>{
        item.style.setProperty('color',fontPrincipalAncle)
    })
}

const addPruprleTheme = () =>{
    /*identificar al selector de los estilos*/ 
    let theme = document.querySelector(':root');

    modifyHeader('#2A093C','#FEFEFE','#00D8FF');
    modifyFooter('#2A093C','#00D8FF','#FEFEFE');
    modiftyButton('#2A093C','#FEFEFE');
    modifyProjectApp('#00D8FF','#FEFEFE','#FEFEFE');
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
    modiftyButton('#090B36','#FEFEFE');
    modifyProjectApp('#8FFF00','#FEFEFE','#FEFEFE');
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
    
    modifyHeader('#0A0A0A','#FEFEFE','#00D8FF');
    modifyFooter('#0A0A0A','#00D8FF','#FEFEFE');
    modiftyButton('#D8D6D6','#0A0A0A');
    modifyProjectApp('#00D8FF','#FEFEFE','#FEFEFE');
    const { firstLine, secondLine, thirdLine } = buttonBurguer;

    /*cambio de estilos generales*/
    if(document.body.clientWidth <=768){
        firstLine.style.setProperty('background-color','#FEFEFE')
        secondLine.style.setProperty('background-color','#FEFEFE')
        thirdLine.style.setProperty('background-color','#FEFEFE')    
    }
    
    theme.style.setProperty('--main-body-background','linear-gradient(90deg, #F7F7F7 0%, #E4E2E1 50%, #F7F7F7 100%)')
    theme.style.setProperty('--font-principal-letter','#2C2B2B')
    theme.style.setProperty('--font-principal-title','#0D16D9')
    theme.style.setProperty('--dark-principal-background','#1E1E1E')
}

/*funciones del header scrollIntoView()*/ 

const scrollToIntroduction = (event) =>{
    event.preventDefault()
    const element = document.getElementById('jd-coder');
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
}

const scrollToAboutMe = (event) =>{
    event.preventDefault()
    const element = document.getElementById('about-me');
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
}

const scrollToProjects = (event) =>{
    event.preventDefault()
    const element = document.getElementById('projects');
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
}


const scrollToSkills = (event) =>{
    event.preventDefault()
    const element = document.getElementById('skills');
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
}

const scrollToContact = (event) =>{
    event.preventDefault()
    const element = document.getElementById('contact');
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
}

/*funciones para el cambio de idiomas*/

const changeEnglishIdiom = (flag) =>{
    const engLanguage = document.querySelector(`#${flag}`);
    const jsonData = require('../languages/en.json');
    console.log(jsonData);
}
