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
    introduction: {
        firstGreeting: document.getElementById('first-greeting'),
        nameLabel: document.getElementById('name-label'),
        availableToWork: document.querySelector('#available-to-work'),
        lightButton: document.querySelector("#light-button")
    }
};
//función para modificar el body
export const bodyLayout = document.body;
export const addBodyTheme = (mainBg, secondBg, thirdBg) => {
    //console.log(bodyLayout.style.background);
    bodyLayout.classList.replace(secondBg, mainBg);
    bodyLayout.classList.replace(thirdBg, mainBg);
};
//funcion para modificar los colores del header
export const { header, themesLi, themesLiHeader, contactIcon, navbar, introduction } = itemsTheme;
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
const addIntroductionTheme = (bgColor) => {
    const { firstGreeting, nameLabel, availableToWork, lightButton } = introduction;
    switch (bgColor) {
        case "purple":
            firstGreeting.classList.replace("first-greeting-blue", "first-greeting");
            firstGreeting.classList.replace("first-greeting-white", "first-greeting");
            nameLabel.classList.replace("name-label-blue", "name-label");
            nameLabel.classList.replace("name-label-white", "name-label");
            availableToWork.classList.replace("available-to-work-blue", "available-to-work");
            availableToWork.classList.replace("available-to-work-white", "available-to-work");
            lightButton.classList.replace("light-button-blue", "light-button");
            lightButton.classList.replace("light-button-white", "light-button");
            break;
        case "blue":
            firstGreeting.classList.replace("first-greeting", "first-greeting-blue");
            firstGreeting.classList.replace("first-greeting-white", "first-greeting-blue");
            nameLabel.classList.replace("name-label", "name-label-blue");
            nameLabel.classList.replace("name-label-white", "name-label-blue");
            availableToWork.classList.replace("available-to-work", "available-to-work-blue");
            availableToWork.classList.replace("available-to-work-white", "available-to-work-blue");
            lightButton.classList.replace("light-button", "light-button-blue");
            lightButton.classList.replace("light-button-white", "light-button-blue");
            break;
        case "white":
            firstGreeting.classList.replace("first-greeting", "first-greeting-white");
            firstGreeting.classList.replace("first-greeting-blue", "first-greeting-white");
            nameLabel.classList.replace("name-label", "name-label-white");
            nameLabel.classList.replace("name-label-blue", "name-label-white");
            availableToWork.classList.replace("available-to-work", "available-to-work-white");
            availableToWork.classList.replace("available-to-work-blue", "available-to-work-white");
            lightButton.classList.replace("light-button", "light-button-white");
            lightButton.classList.replace("light-button-blue", "light-button-white");
            break;
    }
};
export function addThemeLayout(bgColor) {
    switch (bgColor) {
        case "purple":
            addBodyTheme('body', 'body-blue', 'body-white');
            addheaderTheme('header', 'header-blue', 'header-white', './assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            addIntroductionTheme(bgColor);
            break;
        case "blue":
            addBodyTheme('body-blue', 'body', 'body-white');
            addheaderTheme('header-blue', 'header', 'header-white', "./assets/icons/new-icons/phone-enabled-sharp-green.svg");
            addNavbarTheme(bgColor);
            addIntroductionTheme(bgColor);
            break;
        case "white":
            addBodyTheme('body-white', 'body-blue', 'body');
            addheaderTheme('header-white', 'header', 'header-blue', './assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            addIntroductionTheme(bgColor);
            break;
    }
    return bgColor;
}
