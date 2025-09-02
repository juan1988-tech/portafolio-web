let itemsTheme = {
    body: document.body,
    /*header*/
    header: document.getElementById('header'),
    themesLi: [
        document.querySelector('#add-violet-theme'),
        document.querySelector('#add-blue-theme'),
        document.querySelector('#add-white-theme')
    ],
    themesLiHeader: [
        document.querySelector('#add-violet-theme-header'),
        document.querySelector('#add-blue-theme-header'),
        document.querySelector('#add-white-theme-header')
    ],
    contactIcon: document.querySelector('.contact-li img'),
    navbar: document.querySelector('#navbar'),
};
//función para modificar el body
export const bodyLayout = document.body;
export const addBodyTheme = (mainBg, secondBg, thirdBg) => {
    //console.log(bodyLayout.style.background);
    bodyLayout.classList.replace(secondBg, mainBg);
    bodyLayout.classList.replace(thirdBg, mainBg);
};
//funcion para modificar los colores del header
export const { header, themesLi, themesLiHeader, contactIcon, navbar } = itemsTheme;
const addheaderTheme = (mainColor, secondColor, thirdColor, contactIconImg) => {
    //header.classList.replace('header-blue','header');
    header.classList.replace(secondColor, mainColor);
    header.classList.replace(thirdColor, mainColor);
    contactIcon.src = contactIconImg;
};
export const addNavbarTheme = (bgColor) => {
    if (bgColor === "purple") {
        navbar.classList.replace("navbar-change-blue", "navbar-change");
        navbar.classList.replace("navbar-change-white", "navbar-change");
    }
    if (bgColor === "blue") {
        navbar.classList.replace("navbar-change", "navbar-change-blue");
        navbar.classList.replace("navbar-change-white", "navbar-change-blue");
    }
    if (bgColor === "white") {
        navbar.classList.replace("navbar-change", "navbar-change-white");
        navbar.classList.replace("navbar-change-blue", "navbar-change-white");
    }
};
export function addThemeLayout(bgColor) {
    switch (bgColor) {
        case "purple":
            addBodyTheme('body', 'body-blue', 'body-white');
            addheaderTheme('header', 'header-blue', 'header-white', './assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            break;
        case "blue":
            addBodyTheme('body-blue', 'body', 'body-white');
            addheaderTheme('header-blue', 'header', 'header-white', "./assets/icons/new-icons/phone-enabled-sharp-green.svg");
            addNavbarTheme(bgColor);
            break;
        case "white":
            addBodyTheme('body-white', 'body-blue', 'body');
            addheaderTheme('header-white', 'header', 'header-blue', './assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            break;
    }
}
