/*comando para inicailzar proyecto:  tsc -p tsconfig.json*/

/*identificar al título title-logo*/
const titleLogo: HTMLTitleElement = document.querySelector('.title-logo') as HTMLTitleElement;


/*realizar función del botón hamburguesa, aplicamos el concepto de interface para conectar 
el DOM con el botón de hamburguesa */

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

const toggleButtonBurguer = () =>{
    const { firstLine, secondLine ,thirdLine,navbar } = buttonBurguerTrigger;
    firstLine.classList.toggle('first-line-change')
    secondLine.classList.toggle('second-line-change')
    thirdLine.classList.toggle('third-line-change')

    //hacer el toggle del navbar
    navbar.classList.toggle('navbar-change')
}

//definir una matrz que identifique al primer y el segundo toque en el eje x y el eje y
type touchArray = {
    initTouchX: number,
    secondTouchX: number,
}

/*función de sroll para la sección de proyectos: versión cellphone*/

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
    let initClientX = event?.touches[0]?.clientX;
    startTouch = initClientX;
})

projectsContainerCard.addEventListener('touchmove',(event:TouchEvent)=>{    
    const secondTouches =  event?.touches[0].clientX;
    
    //definir la matriz
    const matrixTouch:touchArray = {
        initTouchX: startTouch,
        secondTouchX: secondTouches,
    }
    
    //asignar la matriz a la variable
    touchArrayMatrix = matrixTouch;
})

projectsContainerCard.addEventListener('touchend',()=>{
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
    let initClientX:number = event?.touches[0]?.clientX;
    startServiceTouch = initClientX;
})

serviceTargetContainer.addEventListener('touchmove',(event:TouchEvent)=>{
    const secondTouches =  event?.touches[0].clientX;
    
    //definir la matriz
    const matrixTouch:touchArray = {
        initTouchX: startServiceTouch,
        secondTouchX: secondTouches,
    }

    //asignar la matriz a la variable
    touchServiceMatrix = matrixTouch;
});

serviceTargetContainer.addEventListener('touchend',()=>{
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
})
