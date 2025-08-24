"use strict";
/*comando para inicailzar proyecto:  tsc -p tsconfig.json*/
/*identificar al título title-logo*/
const titleLogo = document.querySelector('.title-logo');
let buttonBurguerTrigger = {
    buttonBurguer: document.querySelector('.button-burguer'),
    firstLine: document.querySelector('#first-line'),
    secondLine: document.querySelector('#second-line'),
    thirdLine: document.querySelector('#third-line'),
    navbar: document.querySelector('#navbar')
};
const toggleButtonBurguer = () => {
    const { firstLine, secondLine, thirdLine, navbar } = buttonBurguerTrigger;
    firstLine.classList.toggle('first-line-change');
    secondLine.classList.toggle('second-line-change');
    thirdLine.classList.toggle('third-line-change');
    //hacer el toggle del navbar
    navbar.classList.toggle('navbar-change');
};
/*función de sroll para la sección de proyectos: versión cellphone*/
//variable global que identifica al elemento body
const bodyLayout = document.body;
//1. identificar en el DOM al nodo de los proyectos con el evento de tocar pantalla en typescript
const projectsContainerCard = document.getElementById('projects-container-card');
const projectsContainerCardDelay = document.querySelector('#projects-container-card-delay');
//identificar a los botones de carrusel de la sección proyectos
const projectCarouselIndicator = document.querySelector('.project-carousel-indicator');
const projectCaruoselCircles = projectCarouselIndicator.children;
//2. cuando haga un touch en la pantalla debe deslizarse una sola vez por cada interfaz del proyecto
//crear la variable del toque inicial
let startTouch = 0;
//crear la variabla del toque final
let endTouch = 0;
//hacer una tupla para determinar los tipos de estilo de movimiento
var proyectContainerDelay;
(function (proyectContainerDelay) {
    proyectContainerDelay[proyectContainerDelay["projects-container-card-delay-first"] = 0] = "projects-container-card-delay-first";
    proyectContainerDelay[proyectContainerDelay["projects-container-card-delay-second"] = 1] = "projects-container-card-delay-second";
    proyectContainerDelay[proyectContainerDelay["projects-container-card-delay-third"] = 2] = "projects-container-card-delay-third";
    proyectContainerDelay[proyectContainerDelay["projects-container-card-delay-fourth"] = 3] = "projects-container-card-delay-fourth";
})(proyectContainerDelay || (proyectContainerDelay = {}));
let touchArrayMatrix;
let touchMovement = 0;
//asignar el nombre de clase al contenedor de proyectos
projectsContainerCardDelay.classList.add(proyectContainerDelay[0]);
//Hacer una referencia del primer toque, definiendo el toque en el eje x y el eje y
projectsContainerCard.addEventListener('touchstart', (event) => {
    var _a;
    if ((bodyLayout === null || bodyLayout === void 0 ? void 0 : bodyLayout.clientWidth) <= 743) {
        console.log('esta funcion solo se aplica hasta media query cellphone');
        let initClientX = (_a = event === null || event === void 0 ? void 0 : event.touches[0]) === null || _a === void 0 ? void 0 : _a.clientX;
        startTouch = initClientX;
    }
});
projectsContainerCard.addEventListener('touchmove', (event) => {
    if (bodyLayout.clientWidth <= 743) {
        const secondTouches = event === null || event === void 0 ? void 0 : event.touches[0].clientX;
        //definir la matriz
        const matrixTouch = {
            initTouchX: startTouch,
            secondTouchX: secondTouches,
        };
        //asignar la matriz a la variable
        touchArrayMatrix = matrixTouch;
    }
});
projectsContainerCard.addEventListener('touchend', () => {
    if (bodyLayout.clientWidth <= 743) {
        const { initTouchX, secondTouchX } = touchArrayMatrix;
        if (initTouchX > secondTouchX) {
            touchMovement = touchMovement + 1;
        }
        if (initTouchX < secondTouchX) {
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
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[1], proyectContainerDelay[0]);
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[2], proyectContainerDelay[0]);
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[3], proyectContainerDelay[0]);
                //cambio de estilos para los botones del carrusel
                projectCaruoselCircles[0].classList.replace('carousel-indicator', 'outlined');
                projectCaruoselCircles[1].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[2].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[3].classList.replace('outlined', 'carousel-indicator');
                break;
            case 1:
                //cambio de estilo: carrusel para proyecto: 2
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[0], proyectContainerDelay[1]);
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[2], proyectContainerDelay[1]);
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[3], proyectContainerDelay[1]);
                //cambio de estilos para los botones del carrusel
                projectCaruoselCircles[0].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[1].classList.replace('carousel-indicator', 'outlined');
                projectCaruoselCircles[2].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[3].classList.replace('outlined', 'carousel-indicator');
                break;
            case 2:
                //cambio de estilo: carrusel para proyecto: 3
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[0], proyectContainerDelay[2]);
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[1], proyectContainerDelay[2]);
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[3], proyectContainerDelay[2]);
                //cambio de estilos para los botones del carrusel
                projectCaruoselCircles[0].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[1].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[2].classList.replace('carousel-indicator', 'outlined');
                projectCaruoselCircles[3].classList.replace('outlined', 'carousel-indicator');
                break;
            case 3:
                //cambio de estilo: carrusel para proyecto: 4
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[0], proyectContainerDelay[3]);
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[1], proyectContainerDelay[3]);
                projectsContainerCardDelay.classList.replace(proyectContainerDelay[2], proyectContainerDelay[3]);
                //cambio de estilos para los botones del carrusel
                projectCaruoselCircles[0].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[1].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[2].classList.replace('outlined', 'carousel-indicator');
                projectCaruoselCircles[3].classList.replace('carousel-indicator', 'outlined');
                break;
        }
    }
});
/*función de sroll para la sección de proyectos: versión cellphone*/
//1. identificar en el DOM al nodo de los proyectos con el evento de tocar pantalla en typescript
const serviceTargetContainer = document.getElementById('service-target-container');
const serviceTargetGrid = document.getElementById('service-target-grid');
//2. cuando haga un touch en la pantalla debe deslizarse una sola vez por cada interfaz del proyecto
//crear la variable del toque inicial
let startServiceTouch = 0;
//crear la variable del toque final
let endServiceTouch = 0;
//identificar a los botones de carrusel de la sección proyectos
const serviceCarouselIndicator = document.querySelector('.service-carousel-indicator');
const serviceCarouselCircles = serviceCarouselIndicator.children;
//hacer una tupla para determinar los tipos de estilo de movimiento
var serviceContainerDelay;
(function (serviceContainerDelay) {
    serviceContainerDelay[serviceContainerDelay["service-target-grid-first"] = 0] = "service-target-grid-first";
    serviceContainerDelay[serviceContainerDelay["service-target-grid-second"] = 1] = "service-target-grid-second";
})(serviceContainerDelay || (serviceContainerDelay = {}));
let touchServiceMatrix;
let touchServiceMovement = 0;
//asignar el nombre de clase al contenedor de proyectos
serviceTargetGrid.classList.add(serviceContainerDelay[0]);
//Hacer una referencia del primer toque, definiendo el toque en el eje x y el eje y
serviceTargetContainer.addEventListener('touchstart', (event) => {
    var _a;
    if (bodyLayout.clientWidth <= 743) {
        let initClientX = (_a = event === null || event === void 0 ? void 0 : event.touches[0]) === null || _a === void 0 ? void 0 : _a.clientX;
        startServiceTouch = initClientX;
    }
});
serviceTargetContainer.addEventListener('touchmove', (event) => {
    if (bodyLayout.clientWidth <= 743) {
        const secondTouches = event === null || event === void 0 ? void 0 : event.touches[0].clientX;
        //definir la matriz
        const matrixTouch = {
            initTouchX: startServiceTouch,
            secondTouchX: secondTouches,
        };
        //asignar la matriz a la variable
        touchServiceMatrix = matrixTouch;
    }
});
serviceTargetContainer.addEventListener('touchend', () => {
    if (bodyLayout.clientWidth <= 743) {
        const { initTouchX, secondTouchX } = touchServiceMatrix;
        if (initTouchX > secondTouchX) {
            touchServiceMovement = touchServiceMovement + 1;
        }
        if (initTouchX < secondTouchX) {
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
                serviceTargetGrid.classList.replace(serviceContainerDelay[1], serviceContainerDelay[0]);
                serviceCarouselCircles[0].classList.replace('service-indicator', 'service-outlined');
                serviceCarouselCircles[1].classList.replace('service-outlined', 'service-indicator');
                break;
            case 1:
                //cambio de estilos para la tarjeta de servicios
                serviceTargetGrid.classList.replace(serviceContainerDelay[0], serviceContainerDelay[1]);
                serviceCarouselCircles[0].classList.replace('service-outlined', 'service-indicator');
                serviceCarouselCircles[1].classList.replace('service-indicator', 'service-outlined');
                break;
            default:
                0;
                break;
        }
    }
});
