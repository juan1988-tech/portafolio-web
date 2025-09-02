/*comando para inicailzar proyecto:  tsc -p tsconfig.json*/
import { addThemeLayout, themesLi, themesLiHeader, bodyLayout, addNavbarTheme } from "./addThemes.js";
//variable global que identifica al elemento body
//const bodyLayout:HTMLBodyElement = document.body as HTMLBodyElement;
/*funciones para poner estilos generales*/
themesLi[0].addEventListener('click', () => {
    addThemeLayout('purple');
});
themesLi[1].addEventListener('click', () => {
    addThemeLayout('blue');
});
themesLi[2].addEventListener('click', () => {
    addThemeLayout('white');
});
themesLiHeader[0].addEventListener('click', () => {
    addThemeLayout('purple');
});
themesLiHeader[1].addEventListener('click', () => {
    addThemeLayout('blue');
});
themesLiHeader[2].addEventListener('click', () => {
    addThemeLayout('white');
});
const buttonBurguer = document.querySelector('#button-burguer');
/*funciones del nabvar scrollIntoView()*/
const titleLogo = document.querySelector('.title-logo');
const navbarJDCode = document.querySelector('#navbar-JD-code');
const navbarAboutMe = document.querySelector('#navbar-about-me');
const navbarProjects = document.querySelector('#navbar-projects');
const navbarContact = document.querySelector('#navbar-contact');
/*funciones del header scrollIntoView()*/
const headerAboutMe = document.querySelector('#header-about-me');
const headerProjects = document.querySelector("#header-projects");
const headerContact = document.querySelector('#header-contact');
/*realizar función del botón hamburguesa, aplicamos el concepto de interface para conectar
el DOM con el botón de hamburguesa */
let defaultToggle = false;
const toggleButtonBurguer = () => {
    const { firstLine, secondLine, thirdLine, navbar } = buttonBurguerTrigger;
    firstLine.classList.toggle('first-line-change');
    secondLine.classList.toggle('second-line-change');
    thirdLine.classList.toggle('third-line-change');
    (defaultToggle === false) ? (defaultToggle = true) : (defaultToggle = false);
    if (defaultToggle === true) {
        navbar.classList.add('navbar-change');
        navbar.classList.remove('navbar');
    }
    else {
        //navbar.classList.replace('navbar','nabvar-change');
        navbar.classList.add('navbar');
        navbar.classList.remove('navbar-change');
    }
    if (navbar.className === "navbar-change") {
        addNavbarTheme('purple');
    }
    if (navbar.className === "navbar-change-blue") {
        addNavbarTheme('blue');
    }
    if (navbar.className === "navbar-change-white") {
        addNavbarTheme('white');
    }
};
buttonBurguer.addEventListener('click', () => {
    toggleButtonBurguer();
});
let buttonBurguerTrigger = {
    buttonBurguer: document.querySelector('.button-burguer'),
    firstLine: document.querySelector('#first-line'),
    secondLine: document.querySelector('#second-line'),
    thirdLine: document.querySelector('#third-line'),
    navbar: document.querySelector('#navbar')
};
const firstScrollY = window.scrollY;
//cambiar el estado del botón si hacemos scroll en el home
window.addEventListener('scroll', (event) => {
    console.log(firstScrollY);
    const navbarGlobalSettings = document.querySelector('#general-settings');
    let secondScrollY = window.scrollY;
    if (secondScrollY > firstScrollY) {
        navbarGlobalSettings.classList.replace('general-settings-change', 'general-settings');
    }
});
//hacer una funcion genérica para implementar el scroll
const scrollToSection = (section) => {
    //idenbtificar al elemento para hacer el scroll
    const selectedELement = document.querySelector(section);
    if (selectedELement) {
        selectedELement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
};
/*funciones en el nabvar: media query cellphone*/
//función de scroll para la sección introduction 
titleLogo.addEventListener('click', () => {
    scrollToSection('.main-content');
});
navbarJDCode.addEventListener('click', () => {
    scrollToSection('.main-content');
    toggleButtonBurguer();
});
//funcion de scroll para la sección acerca de mí
navbarAboutMe.addEventListener('click', () => {
    scrollToSection(".about-me");
    toggleButtonBurguer();
});
//funcion de scroll para la sección proyectos
navbarProjects.addEventListener('click', () => {
    scrollToSection(".projects");
    toggleButtonBurguer();
});
//funcion de scroll para la sección contacto
navbarContact.addEventListener('click', () => {
    scrollToSection("#footer-section-email");
    toggleButtonBurguer();
});
/*funciones en el nabvar: media query desktop*/
//funcion de scroll para la sección acerca de mí
headerAboutMe.addEventListener('click', () => {
    scrollToSection(".about-me");
});
//funcion de scroll para la sección proyectos
headerProjects.addEventListener('click', () => {
    scrollToSection(".projects");
});
//funcion de scroll para la sección contacto
headerContact.addEventListener('click', () => {
    scrollToSection(".footer-section");
});
const headerSettings = document.getElementById('header-settings');
const navbarSettings = document.getElementById('navbar-settings');
const toggleGear = (globalSettings, gear, gearClassName, globalSettingsClassName) => {
    const nabvarListSettings = {
        navbarGlobalSettings: document.querySelector(globalSettings),
        navbarGear: document.querySelector(gear)
    };
    const { navbarGear, navbarGlobalSettings } = nabvarListSettings;
    navbarGear.classList.toggle(gearClassName);
    navbarGlobalSettings.classList.toggle(globalSettingsClassName);
};
headerSettings.addEventListener('click', () => {
    toggleGear('#general-settings', '#header-settings-gear', 'header-settings-gear-change', 'general-settings-change');
});
navbarSettings.addEventListener('click', () => {
    toggleGear('#navbar-global-settings', '#navbar-gear', 'navbar-gear-change', 'navbar-global-settings-change');
});
//1. identificar en el DOM al nodo de los proyectos con el evento de tocar pantalla en typescript
let touchMovement = 0;
const projectsContainerCard = document.getElementById('projects-container-card');
const projectsContainerCardDelay = document.querySelector('#projects-container-card-delay');
const projectCarouselArrows = document.getElementById('project-carousel-arrows');
var proyectContainerDelay;
(function (proyectContainerDelay) {
    proyectContainerDelay[proyectContainerDelay["projects-container-card-delay-first"] = 0] = "projects-container-card-delay-first";
    proyectContainerDelay[proyectContainerDelay["projects-container-card-delay-second"] = 1] = "projects-container-card-delay-second";
    proyectContainerDelay[proyectContainerDelay["projects-container-card-delay-third"] = 2] = "projects-container-card-delay-third";
    proyectContainerDelay[proyectContainerDelay["projects-container-card-delay-fourth"] = 3] = "projects-container-card-delay-fourth";
})(proyectContainerDelay || (proyectContainerDelay = {}));
const projectMovementStates = () => {
    switch (touchMovement) {
        case 0:
            //cambio de estilo: carrusel para proyecto: 1
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1], proyectContainerDelay[0]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2], proyectContainerDelay[0]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3], proyectContainerDelay[0]);
            break;
        case 1:
            //cambio de estilo: carrusel para proyecto: 2
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0], proyectContainerDelay[1]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2], proyectContainerDelay[1]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3], proyectContainerDelay[1]);
            break;
        case 2:
            //cambio de estilo: carrusel para proyecto: 3
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0], proyectContainerDelay[2]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1], proyectContainerDelay[2]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[3], proyectContainerDelay[2]);
            break;
        case 3:
            //cambio de estilo: carrusel para proyecto: 4
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[0], proyectContainerDelay[3]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[1], proyectContainerDelay[3]);
            projectsContainerCardDelay.classList.replace(proyectContainerDelay[2], proyectContainerDelay[3]);
            break;
    }
};
const projectCardMovement = (event) => {
    //detectar al nodo que esta activando el evento
    let nodeEevent = event.target;
    console.log(nodeEevent.id);
    switch (nodeEevent.id) {
        case "project-carousel-left":
            touchMovement = touchMovement - 1;
            break;
        case "project-carousel-right":
            touchMovement = touchMovement + 1;
        default:
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
};
projectCarouselArrows.addEventListener('click', (event) => {
    projectCardMovement(event);
});
/*funciones para las cards de proyectos*/
const projectsSection = document.querySelector('.projects');
const footballLegendsProject = document.querySelector('#project-performance-football-legends');
const todoSevaleProject = document.querySelector('#project-performance-todo-se-vale');
const siennaProject = document.querySelector("#project-performance-sienna");
const montannaMagicaProject = document.querySelector('#project-performance-la-montanna-magica');
const switchProjectCard = (event) => {
    let nodeElement;
    nodeElement = event.target;
    let nodeElementid = nodeElement.id;
    const projectFootballLink = document.getElementById('project-performance-link-football-legends');
    const todoSevaleLink = document.getElementById('project-performance-link-todo-se-vale');
    const siennaLink = document.getElementById('project-performance-link-sienna');
    const montannaMagicaLink = document.getElementById('project-performance-link-la-montanna-magica');
    if (nodeElementid.includes("football-legends")) {
        footballLegendsProject.classList.replace('project-card-performance-hidden', 'project-card-performance');
        projectFootballLink.classList.replace('project-performance-link-hidden', 'project-performance-link');
        todoSevaleProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        siennaProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        montannaMagicaProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
    }
    else {
        footballLegendsProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        projectFootballLink.classList.replace('project-performance-link', 'project-performance-link-hidden');
    }
    if (nodeElementid.includes('todo-se-vale')) {
        todoSevaleProject.classList.replace('project-card-performance-hidden', 'project-card-performance');
        todoSevaleLink.classList.replace('project-performance-link-hidden', 'project-performance-link');
        footballLegendsProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        siennaProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        montannaMagicaProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
    }
    else {
        todoSevaleProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        todoSevaleLink.classList.replace('project-performance-link', 'project-performance-link-hidden');
    }
    if (nodeElementid.includes('sienna')) {
        siennaProject.classList.replace('project-card-performance-hidden', 'project-card-performance');
        siennaLink.classList.replace('project-performance-link-hidden', 'project-performance-link');
        footballLegendsProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        montannaMagicaProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        todoSevaleProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
    }
    else {
        siennaProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        siennaLink.classList.replace('project-performance-link', 'project-performance-link-hidden');
    }
    if (nodeElementid.includes('la-montanna-magica')) {
        montannaMagicaProject.classList.replace('project-card-performance-hidden', 'project-card-performance');
        montannaMagicaLink.classList.replace('project-performance-link-hidden', 'project-performance-link');
        footballLegendsProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        siennaProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        todoSevaleProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
    }
    else {
        montannaMagicaProject.classList.replace('project-card-performance', 'project-card-performance-hidden');
        montannaMagicaLink.classList.replace('project-performance-link', 'project-performance-link-hidden');
    }
};
projectsSection.addEventListener('click', (event) => {
    switchProjectCard(event);
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
    if (bodyLayout.clientWidth <= 743) {
        let initClientX = event?.touches[0]?.clientX;
        startServiceTouch = initClientX;
    }
});
serviceTargetContainer.addEventListener('touchmove', (event) => {
    if (bodyLayout.clientWidth <= 743) {
        const secondTouches = event?.touches[0].clientX;
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
