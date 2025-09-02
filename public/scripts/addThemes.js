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
};
//función para modificar el body
export const bodyLayout = document.body;
export const addBodyTheme = (mainBg, secondBg, thirdBg) => {
    //console.log(bodyLayout.style.background);
    bodyLayout.classList.replace(secondBg, mainBg);
    bodyLayout.classList.replace(thirdBg, mainBg);
};
//funcion para modificar los colores del header
export const { header, themesLi, themesLiHeader, contactIcon } = itemsTheme;
const addheaderTheme = (mainColor, secondColor, thirdColor, contactIconImg) => {
    //header.classList.replace('header-blue','header');
    header.classList.replace(secondColor, mainColor);
    header.classList.replace(thirdColor, mainColor);
    //contactIcon.src = './assets/icons/new-icons/phone-enabled-sharp-blue.svg';
    contactIcon.src = contactIconImg;
};
const addNavbarTheme = (mainColor, secondColor, thirdColor) => {
};
export function addThemeLayout(bgColor) {
    switch (bgColor) {
        case "purple":
            addBodyTheme('body', 'body-blue', 'body-white');
            addheaderTheme('header', 'header-blue', 'header-white', './assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            break;
        case "blue":
            addBodyTheme('body-blue', 'body', 'body-white');
            addheaderTheme('header-blue', 'header', 'header-white', "./assets/icons/new-icons/phone-enabled-sharp-green.svg");
            break;
        case "white":
            addBodyTheme('body-white', 'body-blue', 'body');
            addheaderTheme('header-white', 'header', 'header-blue', './assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            break;
    }
}
