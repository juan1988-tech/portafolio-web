/*comando para inicailzar proyecto:  tsc -p tsconfig.json*/
import { addThemeLayout,themesLi,themesLiHeader,bodyLayout, generalSettings } from "./addThemes.js";
//variable global que identifica al elemento body
//const bodyLayout:HTMLBodyElement = document.body as HTMLBodyElement;

/*funciones para ver las posiciones del navbar */
type toggleYearElements ={
    generalSettings: HTMLDivElement,
    navbarGear: HTMLButtonElement, 
}

const buttonBurguer: HTMLButtonElement = document.querySelector('#button-burguer') as HTMLButtonElement;

/*funciones del nabvar scrollIntoView()*/
const titleLogo: HTMLTitleElement = document.querySelector('.title-logo') as HTMLTitleElement;

const navbarJDCode: HTMLElement = document.querySelector('#navbar-JD-code') as HTMLElement;

const navbarAboutMe: HTMLElement = document.querySelector('#navbar-about-me') as HTMLElement;

const navbarProjects: HTMLElement = document.querySelector('#navbar-projects') as HTMLElement;

const navbarContact: HTMLElement = document.querySelector('#navbar-contact') as HTMLElement;

/*funciones del header scrollIntoView()*/
const headerAboutMe: HTMLElement = document.querySelector('#header-about-me') as HTMLElement;

const headerProjects: HTMLElement = document.querySelector("#header-projects") as HTMLElement;

const headerContact: HTMLElement = document.querySelector('#header-contact') as HTMLElement;
/*realizar función del botón hamburguesa, aplicamos el concepto de interface para conectar 
el DOM con el botón de hamburguesa */
//interfaz para el nabvar y el botón de hamburguesa
interface BurguerButtons {
    buttonBurguer: HTMLButtonElement,
    firstLine: HTMLDivElement,
    secondLine: HTMLDivElement,
    thirdLine: HTMLDivElement
}

//extender los nodos del botón de humburguesa para involucrar al nodo del navbar
interface Navbar extends BurguerButtons {
    navbar: HTMLButtonElement,
}

let buttonBurguerTrigger:Navbar = {
    buttonBurguer: document.querySelector('.button-burguer') as HTMLButtonElement,
    firstLine: document.querySelector('#first-line') as HTMLDivElement,
    secondLine: document.querySelector('#second-line') as HTMLDivElement,
    thirdLine: document.querySelector('#third-line') as HTMLDivElement,
    navbar: document.querySelector('#navbar') as HTMLButtonElement
}

/*funciones para poner estilos generales*/
themesLi[0].addEventListener('click',()=>{
    addThemeLayout('purple');
})


themesLi[1].addEventListener('click',()=>{
    addThemeLayout('blue');

})

themesLi[2].addEventListener('click',()=>{
    addThemeLayout('white');
})

themesLiHeader[0].addEventListener('click',()=>{
    addThemeLayout('purple');
})

themesLiHeader[1].addEventListener('click',()=>{
    addThemeLayout('blue');
})

themesLiHeader[2].addEventListener('click',()=>{
    addThemeLayout('white');
})

const { firstLine, secondLine ,thirdLine, navbar } = buttonBurguerTrigger;

let navbarToggle:boolean = false;

const toggleColorButtons = (firstNavbar:string,secondNavbar:string) =>{
    (navbarToggle===false)?(navbarToggle=true):(navbarToggle=false);
    
    if(navbarToggle===true){
        navbar.classList.add(secondNavbar);
        navbar.classList.remove(firstNavbar);
    }else{
        navbar.classList.add(firstNavbar);
        navbar.classList.remove(secondNavbar);
    }
}

const toggleButtonBurguer = ():void =>{
    firstLine.classList.toggle('first-line-change');
    secondLine.classList.toggle('second-line-change');
    thirdLine.classList.toggle('third-line-change');

    /*cambio para si es purpura*/ 
    if(navbar.className==="navbar" || navbar.className==="navbar-change"){
        toggleColorButtons('navbar','navbar-change')
    }   
    
    /*cambio para si es azul*/
    if(navbar.className==="navbar-blue" || navbar.className==="navbar-change-blue"){
        toggleColorButtons('navbar-blue','navbar-change-blue')
    }

    /*cambio para si es blanco*/
    if(navbar.className==='navbar-white' || navbar.className==="navbar-change-white"){
        toggleColorButtons('navbar-white',"navbar-change-white")
    }
}

buttonBurguer.addEventListener('click',()=>{
    toggleButtonBurguer();
})

const firstScrollY:number =  window.scrollY;

//cambiar el estado del botón si hacemos scroll en el home
window.addEventListener('scroll',()=>{
    const  generalSettings:HTMLDivElement = document.querySelector('#general-settings') as HTMLDivElement;
    let secondScrollY:number =  window.scrollY;
    
    if(secondScrollY>firstScrollY){
        if(generalSettings.className.includes("general-settings-change")){
            generalSettings.classList.replace('general-settings-change','general-settings');
        }
        if(generalSettings.className.includes("general-settings-change-blue")){
            generalSettings.classList.replace('general-settings-change-blue','general-settings-blue');
        }
        if(generalSettings.className.includes("general-settings-change-white")){
            generalSettings.classList.replace('general-settings-change-white','general-settings-white');
        }
    }
})

//hacer una funcion genérica para implementar el scroll
const scrollToSection = (section:string):void =>{
    //idenbtificar al elemento para hacer el scroll
    const selectedELement = document.querySelector(section);

    if(selectedELement){
        selectedELement.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});
   }
}

/*funciones en el nabvar: media query cellphone*/
//función de scroll para la sección introduction 
titleLogo.addEventListener('click',()=>{
    scrollToSection('.main-content');
})

navbarJDCode.addEventListener('click',()=>{
    scrollToSection('.main-content');
    toggleButtonBurguer();
})

type aboutmeVariants = ""|"-blue"|"-white";
type aboutmeClassVariants =  `.about-me${aboutmeVariants}`

//funcion de scroll para la sección acerca de mí
navbarAboutMe.addEventListener('click',()=>{
    const aboutme:aboutmeClassVariants = ".about-me";
    const aboutmeBlue:aboutmeClassVariants = ".about-me-blue";
    const aboutmeWhite:aboutmeClassVariants = ".about-me-white" 
     
    scrollToSection(aboutme);
    scrollToSection(aboutmeBlue);
    scrollToSection(aboutmeWhite);
    toggleButtonBurguer();
})

//funcion de scroll para la sección proyectos
navbarProjects.addEventListener('click',()=>{
    scrollToSection(".projects");
    toggleButtonBurguer();
})

//funcion de scroll para la sección contacto
navbarContact.addEventListener('click',()=>{
    scrollToSection("#footer-section-email");
    toggleButtonBurguer();
})

/*funciones en el nabvar: media query desktop*/
//funcion de scroll para la sección acerca de mí
headerAboutMe.addEventListener('click',()=>{
    scrollToSection("#about-me");
})

//funcion de scroll para la sección proyectos
headerProjects.addEventListener('click',()=>{
    scrollToSection("#projects");
})

//funcion de scroll para la sección contacto
headerContact.addEventListener('click',()=>{
    scrollToSection("#footer-section")
})

const headerSettings: HTMLElement = document.getElementById('header-settings') as HTMLElement;

const navbarSettings: HTMLElement = document.getElementById('navbar-settings') as HTMLElement;

let generalSettingToggle:boolean = false;

const toggleHeaderColorButtons = (firstNavbarHeader:string,secondNavbarHeader:string) =>{
    (generalSettingToggle===false)?(generalSettingToggle=true):(generalSettingToggle=false);


    if(generalSettingToggle===true){
        generalSettings.classList.remove(firstNavbarHeader);
        //general-settings
        generalSettings.classList.add(secondNavbarHeader);
        //general-settings-change
    }else{
        generalSettings.classList.remove(secondNavbarHeader);
        //general-settings-change
        generalSettings.classList.add(firstNavbarHeader);
    }
}

const toggleGear = (globalSettings:string,gear:string,gearClassName:string,globalSettingsClassName?:unknown ):void =>{
     const nabvarListSettings:toggleYearElements = {
        generalSettings: document.querySelector(globalSettings) as HTMLDivElement,
        navbarGear: document.querySelector(gear) as HTMLButtonElement
     }

     const { navbarGear, generalSettings } = nabvarListSettings

     navbarGear.classList.toggle(gearClassName);

    if(typeof globalSettingsClassName==="string"){
        generalSettings.classList.toggle(globalSettingsClassName)
     }
}

const toggleGearHeader = (globalSettings:string,gear:string,gearClassName:string):void =>{
     const generalListSettings:toggleYearElements = {
        generalSettings: document.querySelector(globalSettings) as HTMLDivElement,
        navbarGear: document.querySelector(gear) as HTMLButtonElement
     }

     const { generalSettings,navbarGear } = generalListSettings;

     navbarGear.classList.toggle(gearClassName);

     console.log(generalSettings.className);
     if(generalSettings.className==="general-settings" || generalSettings.className==="general-settings-change"){
        toggleHeaderColorButtons('general-settings','general-settings-change')
     }
     if(generalSettings.className==="general-settings-blue" || generalSettings.className==="general-settings-change-blue"){
        toggleHeaderColorButtons('general-settings-blue','general-settings-change-blue')
     }
      if(generalSettings.className==="general-settings-white" || generalSettings.className==="general-settings-change-white"){
        toggleHeaderColorButtons('general-settings-white','general-settings-change-white')
     }
}

headerSettings.addEventListener('click',()=>{
    toggleGearHeader('#general-settings','#header-settings-gear','header-settings-gear-change');
})

navbarSettings.addEventListener('click',()=>{
    toggleGear('#navbar-global-settings','#navbar-gear','navbar-gear-change','navbar-global-settings-change');
})
/*funciones para cambiar el color de todo el portafolio*/


/*función de sroll para la sección de proyectos: versión cellphone*/
//definir una matrz que identifique al primer y el segundo toque en el eje x y el eje y
type touchArray = {
    initTouchX: number,
    secondTouchX: number,
}

//1. identificar en el DOM al nodo de los proyectos con el evento de tocar pantalla en typescript
let touchMovement: number = 0;

const projectsContainerCard:HTMLDivElement = document.getElementById('projects-container-card') as HTMLDivElement;

const projectsContainerCardDelay:HTMLDivElement = document.querySelector('#projects-container-card-delay') as HTMLDivElement;

const projectCarouselArrows:HTMLDivElement = document.getElementById('project-carousel-arrows') as HTMLDivElement

enum proyectContainerDelay {
    'projects-container-card-delay-first',
    'projects-container-card-delay-second',
    'projects-container-card-delay-third',
    'projects-container-card-delay-fourth'
}

const projectMovementStates = ():void =>{
    switch (touchMovement) {
        case 0:
            //cambio de estilo: carrusel para proyecto: 1
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1],proyectContainerDelay[0])
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2],proyectContainerDelay[0])
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3],proyectContainerDelay[0])
            break;
        case 1:
            //cambio de estilo: carrusel para proyecto: 2
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0],proyectContainerDelay[1]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2],proyectContainerDelay[1]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3],proyectContainerDelay[1]);

            break;
        case 2:
            //cambio de estilo: carrusel para proyecto: 3
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0],proyectContainerDelay[2]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1],proyectContainerDelay[2]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3],proyectContainerDelay[2]);
            break;
        case 3:
            //cambio de estilo: carrusel para proyecto: 4
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0],proyectContainerDelay[3])
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1],proyectContainerDelay[3])
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2],proyectContainerDelay[3])
            break;
        }
} 

const projectCardMovement = (event:MouseEvent):void =>{
    //detectar al nodo que esta activando el evento
    let nodeEevent:HTMLImageElement = event.target as HTMLImageElement;
    
    switch (nodeEevent.id) {
        case "project-carousel-left":
            touchMovement = touchMovement - 1;
            break;
        case "project-carousel-left-img":
            touchMovement = touchMovement - 1;
            break;

        case "project-carousel-right":
            touchMovement = touchMovement + 1;
            break;
        case "project-carousel-right-img":
            touchMovement = touchMovement + 1;
            break;    
    }
    
    if (touchMovement > 3) {
        touchMovement = 3;
    }
    if (touchMovement < 0) {
        touchMovement = 0;
    }

    //ejecutar la funcion de cambioa de estado para cada nodo
    projectMovementStates();
}

projectCarouselArrows.addEventListener('click',(event:MouseEvent)=>{
    projectCardMovement(event)
})

/*funciones para las cards de proyectos*/
const projectsSection:HTMLDivElement = document.querySelector('.projects') as HTMLDivElement;

const footballLegendsProject:HTMLElement = document.querySelector('#project-performance-football-legends') as HTMLElement;
const todoSevaleProject:HTMLElement = document.querySelector('#project-performance-todo-se-vale') as HTMLElement;
const siennaProject:HTMLElement = document.querySelector("#project-performance-sienna") as HTMLElement;
const montannaMagicaProject:HTMLElement = document.querySelector('#project-performance-la-montanna-magica') as HTMLElement;

const projectFootballLink:HTMLElement = document.getElementById('project-performance-link-football-legends') as HTMLElement;
const todoSevaleLink:HTMLElement = document.getElementById('project-performance-link-todo-se-vale') as HTMLElement;
const siennaLink:HTMLElement =  document.getElementById('project-performance-link-sienna') as HTMLElement;
const montannaMagicaLink:HTMLElement = document.getElementById('project-performance-link-la-montanna-magica') as HTMLElement;

const siwtchProjectByColor = (event:MouseEvent,visibleProject:string):void =>{
    
    let nodeElement:HTMLElement;

    nodeElement = event.target as HTMLElement;

    let nodeElementid:string = nodeElement.id;   

    if(nodeElementid.includes("football-legends")){
        footballLegendsProject.classList.replace('project-card-performance-hidden',visibleProject);
        projectFootballLink.classList.replace('project-performance-link-hidden','project-performance-link');

        todoSevaleProject.classList.replace(visibleProject,'project-card-performance-hidden');
        siennaProject.classList.replace(visibleProject,'project-card-performance-hidden');
        montannaMagicaProject.classList.replace(visibleProject,'project-card-performance-hidden');
    }else{
        footballLegendsProject.classList.replace(visibleProject,'project-card-performance-hidden');
        projectFootballLink.classList.replace('project-performance-link','project-performance-link-hidden');
    }

    if(nodeElementid.includes('todo-se-vale')){
        todoSevaleProject.classList.replace('project-card-performance-hidden',visibleProject);
        todoSevaleLink.classList.replace('project-performance-link-hidden','project-performance-link');

        footballLegendsProject.classList.replace(visibleProject,'project-card-performance-hidden');
        siennaProject.classList.replace(visibleProject,'project-card-performance-hidden');
        montannaMagicaProject.classList.replace(visibleProject,'project-card-performance-hidden');
    }
    else{
        todoSevaleProject.classList.replace(visibleProject,'project-card-performance-hidden');
        todoSevaleLink.classList.replace('project-performance-link','project-performance-link-hidden');
    }

    if(nodeElementid.includes('sienna')){
        siennaProject.classList.replace('project-card-performance-hidden',visibleProject);
        siennaLink.classList.replace('project-performance-link-hidden','project-performance-link');

        footballLegendsProject.classList.replace(visibleProject,'project-card-performance-hidden');
        montannaMagicaProject.classList.replace(visibleProject,'project-card-performance-hidden');
        todoSevaleProject.classList.replace(visibleProject,'project-card-performance-hidden');   
    }
    else{
        siennaProject.classList.replace(visibleProject,'project-card-performance-hidden');
        siennaLink.classList.replace('project-performance-link','project-performance-link-hidden');
    }

    if(nodeElementid.includes('la-montanna-magica')){
        montannaMagicaProject.classList.replace('project-card-performance-hidden',visibleProject);
        montannaMagicaLink.classList.replace('project-performance-link-hidden','project-performance-link');

        footballLegendsProject.classList.replace(visibleProject,'project-card-performance-hidden');
        siennaProject.classList.replace(visibleProject,'project-card-performance-hidden');
        todoSevaleProject.classList.replace(visibleProject,'project-card-performance-hidden');
    }
    else{
        montannaMagicaProject.classList.replace(visibleProject,'project-card-performance-hidden');
        montannaMagicaLink.classList.replace('project-performance-link','project-performance-link-hidden');
    } 
}

projectsSection.addEventListener('click',(event:MouseEvent)=>{
    let bodyClassName:string = bodyLayout.className;

    switch (bodyClassName) {
        case "body":
            siwtchProjectByColor(event,"project-card-performance");        
            break;
        case "body-blue":
            siwtchProjectByColor(event,"project-card-performance-blue");        
            break;
        case "body-white":
            siwtchProjectByColor(event,"project-card-performance-white");        
            break;    
    }
})

/*función de sroll para la sección de proyectos: versión cellphone*/
//1. identificar en el DOM al nodo de los proyectos con el evento de tocar pantalla en typescript
const serviceTargetContainer:HTMLDivElement = document.getElementById('service-target-container') as HTMLDivElement;

const serviceTargetGrid:HTMLDivElement = document.getElementById('service-target-grid') as HTMLDivElement;

//2. cuando haga un touch en la pantalla debe deslizarse una sola vez por cada interfaz del proyecto

//crear la variable del toque inicial
let startServiceTouch:number = 0;

//crear la variable del toque final
let endServiceTouch:number =  0;

//identificar a los botones de carrusel de la sección proyectos
const serviceCarouselIndicator:HTMLButtonElement= document.querySelector('.service-carousel-indicator') as HTMLButtonElement;

const serviceCarouselCircles = serviceCarouselIndicator.children;

//hacer una tupla para determinar los tipos de estilo de movimiento
enum serviceContainerDelay {
    'service-target-grid-first',
    'service-target-grid-second'
}

let touchServiceMatrix:touchArray;

let touchServiceMovement: number = 0;

//asignar el nombre de clase al contenedor de proyectos
serviceTargetGrid.classList.add(serviceContainerDelay[0]);

//Hacer una referencia del primer toque, definiendo el toque en el eje x y el eje y
serviceTargetContainer.addEventListener('touchstart',(event:TouchEvent)=>{
    if(bodyLayout.clientWidth<=743){
        let initClientX:number = event?.touches[0]?.clientX;
        startServiceTouch = initClientX;
    }
})

serviceTargetContainer.addEventListener('touchmove',(event:TouchEvent)=>{
    if(bodyLayout.clientWidth<=743){
        const secondTouches =  event?.touches[0].clientX;
    
        //definir la matriz
        const matrixTouch:touchArray = {
            initTouchX: startServiceTouch,
            secondTouchX: secondTouches,
        }

        //asignar la matriz a la variable
        touchServiceMatrix = matrixTouch;
    }
});


//crear una funcion de movimiento para los botones
const serviceTargetsMovement = (outlinedButton:string,indicatorButton:string) =>{
        if(bodyLayout.clientWidth<=743){
        const { initTouchX,secondTouchX } = touchServiceMatrix;

     if(initTouchX>secondTouchX){
        touchServiceMovement = touchServiceMovement + 1;

        }

    if(initTouchX<secondTouchX){
        touchServiceMovement = touchServiceMovement - 1;

        }   

    if (touchServiceMovement > 1) {
        touchServiceMovement = 1;
    }
    if (touchServiceMovement < 0) {
        touchServiceMovement = 0;
    }   
    
    switch (touchServiceMovement) {
        case 0:
            //cambio de estilos para la tarjeta de servicios
            serviceTargetGrid.classList.replace(serviceContainerDelay[1],serviceContainerDelay[0]);
            serviceCarouselCircles[0].classList.replace(indicatorButton,outlinedButton);
            serviceCarouselCircles[1].classList.replace(outlinedButton,indicatorButton);
            break;
        
        case 1:
            //cambio de estilos para la tarjeta de servicios
            serviceTargetGrid.classList.replace(serviceContainerDelay[0],serviceContainerDelay[1]);
            serviceCarouselCircles[0].classList.replace(outlinedButton,indicatorButton);
            serviceCarouselCircles[1].classList.replace(indicatorButton,outlinedButton);
            break;

        default:0
            break;
        }
    }
}


serviceTargetContainer.addEventListener('touchend',()=>{
    console.log(bodyLayout.className)
    if(bodyLayout.className==="body"){
        serviceTargetsMovement('service-outlined','service-indicator');
    }
    if(bodyLayout.className==="body-blue"){
        serviceTargetsMovement("service-outlined-blue","service-indicator-blue")
    }
    if(bodyLayout.className==="body-white"){
        serviceTargetsMovement("service-outlined-white","service-indicator-white")
    }
    
})
