/*comando para inicailzar proyecto:  tsc -p tsconfig.json*/

//variable global que identifica al elemento body
const bodyLayout:HTMLBodyElement = document.body as HTMLBodyElement;

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

const toggleButtonBurguer = () =>{
    const { firstLine, secondLine ,thirdLine,navbar } = buttonBurguerTrigger;
    firstLine.classList.toggle('first-line-change')
    secondLine.classList.toggle('second-line-change')
    thirdLine.classList.toggle('third-line-change')

    //hacer el toggle del navbar
    navbar.classList.toggle('navbar-change')
}

//interfaz para el nabvar y el botón de hamburguesa
interface BurguerButtons {
    buttonBurguer: HTMLButtonElement,
    firstLine: HTMLDivElement,
    secondLine: HTMLDivElement,
    thirdLine: HTMLDivElement
}

let buttonBurguerTrigger:Navbar = {
    buttonBurguer: document.querySelector('.button-burguer') as HTMLButtonElement,
    firstLine: document.querySelector('#first-line') as HTMLDivElement,
    secondLine: document.querySelector('#second-line') as HTMLDivElement,
    thirdLine: document.querySelector('#third-line') as HTMLDivElement,
    navbar: document.querySelector('#navbar') as HTMLButtonElement
}

//extender los nodos del botón de humburguesa para involucrar al nodo del navbar
interface Navbar extends BurguerButtons {
    navbar: HTMLButtonElement,
}

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

//funcion de scroll para la sección acerca de mí
navbarAboutMe.addEventListener('click',()=>{
    scrollToSection(".about-me");
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
    scrollToSection(".about-me");
})

//funcion de scroll para la sección proyectos
headerProjects.addEventListener('click',()=>{
    scrollToSection(".projects");
})

//funcion de scroll para la sección contacto
headerContact.addEventListener('click',()=>{
    scrollToSection(".footer-section")
})

/*funciones para ver las posiciones del navbar */
type toggleYearElements ={
    navbarGlobalSettings: HTMLDivElement,
    navbarGear: HTMLButtonElement, 
}

const toggleGear = (globalSettings:string,gear:string,gearClassName:string,globalSettingsClassName:string ):void =>{
     const nabvarListSettings:toggleYearElements = {
        navbarGlobalSettings: document.querySelector(globalSettings) as HTMLDivElement,
        navbarGear: document.querySelector(gear) as HTMLButtonElement
     }

     const { navbarGear, navbarGlobalSettings } = nabvarListSettings

     navbarGear.classList.toggle(gearClassName)
     navbarGlobalSettings.classList.toggle(globalSettingsClassName)
}

/*función de sroll para la sección de proyectos: versión cellphone*/
//definir una matrz que identifique al primer y el segundo toque en el eje x y el eje y
type touchArray = {
    initTouchX: number,
    secondTouchX: number,
}

//1. identificar en el DOM al nodo de los proyectos con el evento de tocar pantalla en typescript
const projectsContainerCard:HTMLDivElement = document.getElementById('projects-container-card') as HTMLDivElement;

const projectsContainerCardDelay:HTMLDivElement = document.querySelector('#projects-container-card-delay') as HTMLDivElement;

//identificar a los botones de carrusel de la sección proyectos
const projectCarouselIndicator:HTMLButtonElement= document.querySelector('.project-carousel-indicator') as HTMLButtonElement;

const projectCaruoselCircles = projectCarouselIndicator.children;

//2. cuando haga un touch en la pantalla debe deslizarse una sola vez por cada interfaz del proyecto
//crear la variable del toque inicial
let startTouch:number = 0;

//crear la variabla del toque final
let endTouch:number =  0;

//hacer una tupla para determinar los tipos de estilo de movimiento
enum proyectContainerDelay {
    'projects-container-card-delay-first',
    'projects-container-card-delay-second',
    'projects-container-card-delay-third',
    'projects-container-card-delay-fourth'
}

let touchArrayMatrix:touchArray;

let touchMovement: number = 0;

//asignar el nombre de clase al contenedor de proyectos
projectsContainerCardDelay.classList.add(proyectContainerDelay[0]);

//Hacer una referencia del primer toque, definiendo el toque en el eje x y el eje y

projectsContainerCard.addEventListener('touchstart',(event:TouchEvent)=>{
    if(bodyLayout?.clientWidth<=743){
        console.log('esta funcion solo se aplica hasta media query cellphone')
        let initClientX = event?.touches[0]?.clientX;
        startTouch = initClientX;
    } 
})

projectsContainerCard.addEventListener('touchmove',(event:TouchEvent)=>{   
    if(bodyLayout.clientWidth<=743){
        const secondTouches =  event?.touches[0].clientX;
    
    //definir la matriz
    const matrixTouch:touchArray = {
        initTouchX: startTouch,
        secondTouchX: secondTouches,
    }
    
    //asignar la matriz a la variable
    touchArrayMatrix = matrixTouch;
    } 
})

projectsContainerCard.addEventListener('touchend',()=>{
    if(bodyLayout.clientWidth<=743){
    const { initTouchX,secondTouchX } = touchArrayMatrix;
    
    if(initTouchX>secondTouchX){
        touchMovement = touchMovement + 1;   
        }

    if(initTouchX<secondTouchX){
        touchMovement = touchMovement - 1;
        }   
        
    if (touchMovement > 3) {
        touchMovement = 3;
    }
    if (touchMovement < 0) {
        touchMovement = 0;
    }
    
    switch (touchMovement) {
        case 0:
            //cambio de estilo: carrusel para proyecto: 1
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1],proyectContainerDelay[0])
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2],proyectContainerDelay[0])
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3],proyectContainerDelay[0])

            //cambio de estilos para los botones del carrusel
            projectCaruoselCircles[0].classList.replace('carousel-indicator','outlined');
            projectCaruoselCircles[1].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[2].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[3].classList.replace('outlined','carousel-indicator');
            break;
        case 1:
            //cambio de estilo: carrusel para proyecto: 2
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0],proyectContainerDelay[1]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2],proyectContainerDelay[1]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3],proyectContainerDelay[1]);

            //cambio de estilos para los botones del carrusel
            projectCaruoselCircles[0].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[1].classList.replace('carousel-indicator','outlined');
            projectCaruoselCircles[2].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[3].classList.replace('outlined','carousel-indicator');
            break;
        case 2:
            //cambio de estilo: carrusel para proyecto: 3
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0],proyectContainerDelay[2]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1],proyectContainerDelay[2]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3],proyectContainerDelay[2]);

            //cambio de estilos para los botones del carrusel
            projectCaruoselCircles[0].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[1].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[2].classList.replace('carousel-indicator','outlined');
            projectCaruoselCircles[3].classList.replace('outlined','carousel-indicator');
            break;
        case 3:
            //cambio de estilo: carrusel para proyecto: 4
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0],proyectContainerDelay[3])
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1],proyectContainerDelay[3])
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2],proyectContainerDelay[3])

            //cambio de estilos para los botones del carrusel
            projectCaruoselCircles[0].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[1].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[2].classList.replace('outlined','carousel-indicator');
            projectCaruoselCircles[3].classList.replace('carousel-indicator','outlined');
            break;
        }
    }
})  

/*funciones para las cards de proyectos*/
const projectsSection:HTMLDivElement = document.querySelector('.projects') as HTMLDivElement;

const footballLegendsProject:HTMLElement = document.querySelector('#project-performance-football-legends') as HTMLElement;
 
const switchFootballLegends = (event:MouseEvent):void =>{
    let nodeElement:HTMLElement;

    nodeElement = event.target as HTMLElement;

    let nodeElementid:string = nodeElement.id;   
    
    const projectPerformanceLink:HTMLElement = document.getElementById('project-performance-link') as HTMLElement;

    if(nodeElementid.includes("football-legends")){
        footballLegendsProject.classList.replace('project-card-performance-hidden','project-card-performance');
        projectPerformanceLink.classList.replace('project-performance-link-hidden','project-performance-link');
    }else{
        footballLegendsProject.classList.replace('project-card-performance','project-card-performance-hidden');
        projectPerformanceLink.classList.replace('project-performance-link','project-performance-link-hidden');
    } 
}

projectsSection.addEventListener('click',(event:MouseEvent)=>{
    switchFootballLegends(event);
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

serviceTargetContainer.addEventListener('touchend',()=>{
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
            serviceCarouselCircles[0].classList.replace('service-indicator','service-outlined');
            serviceCarouselCircles[1].classList.replace('service-outlined','service-indicator');
            break;
        
        case 1:
            //cambio de estilos para la tarjeta de servicios
            serviceTargetGrid.classList.replace(serviceContainerDelay[0],serviceContainerDelay[1]);
            serviceCarouselCircles[0].classList.replace('service-outlined','service-indicator');
            serviceCarouselCircles[1].classList.replace('service-indicator','service-outlined');
            break;

        default:0
            break;
        }
    }
})
