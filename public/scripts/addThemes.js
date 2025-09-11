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
    generalSettings: document.querySelector('#general-settings'),
    introduction: {
        firstGreeting: document.getElementById('first-greeting'),
        nameLabel: document.getElementById('name-label'),
        availableToWork: document.querySelector('#available-to-work'),
        lightButton: document.querySelector("#light-button"),
        cvDownloader: document.querySelector(".cv-downloader"),
        socialMedia: document.querySelector(".social-media")
    },
    aboutMe: {
        aboutMeBg: document.querySelector('#about-me'),
        aboutMeTitle: document.querySelector("#about-me-title"),
        aboutMeRole: document.querySelector("#about-me-role")
    },
    projects: {
        projectsTitle: document.querySelector("#projects-title"),
        projectPerformance: {
            footballLegends: document.querySelector("#project-performance-football-legends"),
            todoSevale: document.querySelector("#project-performance-todo-se-vale"),
            sienna: document.querySelector("#project-performance-sienna"),
            montannaMagica: document.querySelector("#project-performance-la-montanna-magica")
        },
        projectCarouselButtons: {
            projectCarouselLeft: document.getElementById('project-carousel-left'),
            projectCarouselRight: document.getElementById('project-carousel-right'),
            projectCarouselLeftImg: document.getElementById('project-carousel-left-img'),
            projectCarouselRightimg: document.getElementById('project-carousel-right-img')
        }
    },
    stack: {
        stackBackground: document.querySelector("#stack"),
        stackContainerGrid: [
            {
                image: document.getElementById('mongo-db')
            },
            {
                image: document.getElementById('express')
            },
            {
                image: document.getElementById('react')
            },
            {
                image: document.getElementById('node')
            },
            {
                image: document.getElementById('typescript')
            },
            {
                image: document.getElementById('photoshop')
            },
            {
                image: document.getElementById('illustrator')
            },
            {
                image: document.getElementById('figma')
            },
            {
                image: document.getElementById('trello')
            },
        ]
    },
    services: {
        servicesTitle: document.querySelector("#services-title"),
        serviceContainers: [
            document.querySelector("#service-target-first"),
            document.querySelector("#service-target-second"),
        ],
        serviceContainersTitle: [
            document.querySelector("#services-skill-title-first"),
            document.querySelector("#services-skill-title-second"),
        ],
        servicContainerImages: [
            document.querySelector("#coding-skill"),
            document.querySelector("#ux-ui-skill")
        ],
        serviceCarouselIndicator: [
            document.querySelector("#service-first-button"),
            document.querySelector("#service-second-button"),
        ]
    },
    footer: {
        footerSection: document.getElementById("footer-section"),
        footerIconsList: [
            {
                figure: document.querySelector("#footer-figure-whatsapp"),
                image: document.querySelector("#whatsapp-footer")
            },
            {
                figure: document.querySelector("#footer-figure-linkedin"),
                image: document.querySelector("#linkedin-footer")
            },
            {
                figure: document.querySelector("#footer-figure-git-hub"),
                image: document.querySelector("#git-hub-footer")
            },
            {
                figure: document.querySelector("#footer-figure-email"),
                image: document.querySelector("#email-footer")
            }
        ]
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
export const { header, themesLi, themesLiHeader, contactIcon, navbar, generalSettings, introduction, aboutMe, projects, stack, services, footer } = itemsTheme;
const addheaderTheme = (mainColor, secondColor, thirdColor, contactIconImg) => {
    //header.classList.replace('header-blue','header');
    header.classList.replace(secondColor, mainColor);
    header.classList.replace(thirdColor, mainColor);
    contactIcon.src = contactIconImg;
};
/*aplicar estilos tanto al navbar en cellphone como al navbar en header */
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
const addGeneralSettingsTheme = (bgColor) => {
    if (bgColor === "purple") {
        generalSettings.classList.replace("general-settings-change-blue", "general-settings-change");
        generalSettings.classList.replace("general-settings-change-white", "general-settings-change");
    }
    if (bgColor === "blue") {
        generalSettings.classList.replace("general-settings-change", "general-settings-change-blue");
        generalSettings.classList.replace("general-settings-change-white", "general-settings-change-blue");
    }
    if (bgColor === "white") {
        generalSettings.classList.replace("general-settings-change", "general-settings-change-white");
        generalSettings.classList.replace("general-settings-change-blue", "general-settings-change-white");
    }
};
const addIntroductionTheme = (bgColor) => {
    const { firstGreeting, nameLabel, availableToWork, lightButton, cvDownloader, socialMedia } = introduction;
    const socialMediaButtons = socialMedia.children;
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
            cvDownloader.classList.replace("cv-downloader-blue", "cv-downloader");
            cvDownloader.classList.replace("cv-downloader-white", "cv-downloader");
            socialMediaButtons[0].classList.replace('linkedin-first-link-blue', 'linkedin-first-link');
            socialMediaButtons[0].classList.replace('linkedin-first-link-white', 'linkedin-first-link');
            socialMediaButtons[1].classList.replace('github-first-link-blue', 'github-first-link');
            socialMediaButtons[1].classList.replace('github-first-link-white', 'github-first-link');
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
            cvDownloader.classList.replace("cv-downloader", "cv-downloader-blue");
            cvDownloader.classList.replace("cv-downloader-white", "cv-downloader-blue");
            socialMediaButtons[0].classList.replace('linkedin-first-link', 'linkedin-first-link-blue');
            socialMediaButtons[0].classList.replace('linkedin-first-link-white', 'linkedin-first-link-blue');
            socialMediaButtons[1].classList.replace('github-first-link', 'github-first-link-blue');
            socialMediaButtons[1].classList.replace('github-first-link-white', 'github-first-link-blue');
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
            cvDownloader.classList.replace("cv-downloader", "cv-downloader-white");
            cvDownloader.classList.replace("cv-downloader-blue", "cv-downloader-white");
            socialMediaButtons[0].classList.replace('linkedin-first-link', 'linkedin-first-link-white');
            socialMediaButtons[0].classList.replace('linkedin-first-link-blue', 'linkedin-first-link-white');
            socialMediaButtons[1].classList.replace('github-first-link', 'github-first-link-white');
            socialMediaButtons[1].classList.replace('github-first-link-blue', 'github-first-link-white');
            break;
    }
};
const addboutMeTheme = (bgColor) => {
    const { aboutMeBg, aboutMeTitle, aboutMeRole } = aboutMe;
    switch (bgColor) {
        case "purple":
            aboutMeBg.classList.replace("about-me-blue", "about-me");
            aboutMeBg.classList.replace("about-me-white", "about-me");
            aboutMeTitle.classList.replace("about-me-title-blue", "about-me-title");
            aboutMeTitle.classList.replace("about-me-title-white", "about-me-title");
            aboutMeRole.classList.replace("about-me-role-blue", "about-me-role");
            aboutMeRole.classList.replace("about-me-role-white", "about-me-role");
            break;
        case "blue":
            aboutMeBg.classList.replace("about-me", "about-me-blue");
            aboutMeBg.classList.replace("about-me-white", "about-me-blue");
            aboutMeTitle.classList.replace("about-me-title", "about-me-title-blue");
            aboutMeTitle.classList.replace("about-me-title-white", "about-me-title-blue");
            aboutMeRole.classList.replace("about-me-role", "about-me-role-blue");
            aboutMeRole.classList.replace("about-me-role-white", "about-me-role-blue");
            break;
        case "white":
            aboutMeBg.classList.replace("about-me", "about-me-white");
            aboutMeBg.classList.replace("about-me-blue", "about-me-white");
            aboutMeTitle.classList.replace("about-me-title", "about-me-title-white");
            aboutMeTitle.classList.replace("about-me-title-blue", "about-me-title-white");
            aboutMeRole.classList.replace("about-me-role", "about-me-role-white");
            aboutMeRole.classList.replace("about-me-role-blue", "about-me-role-white");
            break;
    }
};
const addProjectTheme = (bgColor) => {
    const { projectsTitle, projectPerformance, projectCarouselButtons } = projects;
    const { footballLegends, todoSevale, sienna, montannaMagica } = projectPerformance;
    const { projectCarouselLeft, projectCarouselRight, projectCarouselLeftImg, projectCarouselRightimg } = projectCarouselButtons;
    switch (bgColor) {
        case "purple":
            projectsTitle.classList.replace("projects-title-blue", "projects-title");
            projectsTitle.classList.replace("projects-title-white", "projects-title");
            footballLegends.classList.replace("project-card-performance-blue", "project-card-performance");
            footballLegends.classList.replace("project-card-performance-white", "project-card-performance");
            todoSevale.classList.replace("project-card-performance-blue", "project-card-performance");
            todoSevale.classList.replace("project-card-performance-white", "project-card-performance");
            sienna.classList.replace("project-card-performance-blue", "project-card-performance");
            sienna.classList.replace("project-card-performance-white", "project-card-performance");
            montannaMagica.classList.replace("project-card-performance-blue", "project-card-performance");
            montannaMagica.classList.replace("project-card-performance-white", "project-card-performance");
            projectCarouselLeft.classList.replace("project-carousel-button-blue", "project-carousel-button");
            projectCarouselLeft.classList.replace("project-carousel-button-white", "project-carousel-button");
            projectCarouselRight.classList.replace("project-carousel-button-blue", "project-carousel-button");
            projectCarouselRight.classList.replace("project-carousel-button-white", "project-carousel-button");
            projectCarouselLeftImg.src = "../public/assets/icons/new-icons/dark-screen-icons/ep_arrow-left-bold.svg";
            projectCarouselRightimg.src = '../public/assets/icons/new-icons/dark-screen-icons/ep_arrow-right-bold.svg';
            break;
        case "blue":
            projectsTitle.classList.replace("projects-title", "projects-title-blue");
            projectsTitle.classList.replace("projects-title-white", "projects-title-blue");
            footballLegends.classList.replace("project-card-performance", "project-card-performance-blue");
            footballLegends.classList.replace("project-card-performance-white", "project-card-performance-blue");
            todoSevale.classList.replace("project-card-performance", "project-card-performance-blue");
            todoSevale.classList.replace("project-card-performance-white", "project-card-performance-blue");
            sienna.classList.replace("project-card-performance", "project-card-performance-blue");
            sienna.classList.replace("project-card-performance-white", "project-card-performance-blue");
            montannaMagica.classList.replace("project-card-performance", "project-card-performance-blue");
            montannaMagica.classList.replace("project-card-performance-white", "project-card-performance-blue");
            projectCarouselLeft.classList.replace("project-carousel-button", "project-carousel-button-blue");
            projectCarouselLeft.classList.replace("project-carousel-button-white", "project-carousel-button-blue");
            projectCarouselRight.classList.replace("project-carousel-button", "project-carousel-button-blue");
            projectCarouselRight.classList.replace("project-carousel-button-white", "project-carousel-button-blue");
            projectCarouselLeftImg.src = "../public/assets/icons/new-icons/dark-screen-icons/ep_arrow-left-bold.svg";
            projectCarouselRightimg.src = '../public/assets/icons/new-icons/dark-screen-icons/ep_arrow-right-bold.svg';
            break;
        case "white":
            projectsTitle.classList.replace("projects-title", "projects-title-white");
            projectsTitle.classList.replace("projects-title-blue", "projects-title-white");
            footballLegends.classList.replace("project-card-performance", "project-card-performance-white");
            footballLegends.classList.replace("project-card-performance-blue", "project-card-performance-white");
            todoSevale.classList.replace("project-card-performance", "project-card-performance-white");
            todoSevale.classList.replace("project-card-performance-blue", "project-card-performance-white");
            sienna.classList.replace("project-card-performance", "project-card-performance-white");
            sienna.classList.replace("project-card-performance-blue", "project-card-performance-white");
            montannaMagica.classList.replace("project-card-performance", "project-card-performance-white");
            montannaMagica.classList.replace("project-card-performance-blue", "project-card-performance-white");
            projectCarouselLeft.classList.replace("project-carousel-button", "project-carousel-button-white");
            projectCarouselLeft.classList.replace("project-carousel-button-blue", "project-carousel-button-white");
            projectCarouselRight.classList.replace("project-carousel-button", "project-carousel-button-white");
            projectCarouselRight.classList.replace("project-carousel-button-blue", "project-carousel-button-white");
            projectCarouselLeftImg.src = './assets/icons/new-icons/light-screen-icons/ep_arrow-left-bold-black.svg';
            projectCarouselRightimg.src = './assets/icons/new-icons/light-screen-icons/ep_arrow-rigtht-bold-black.svg';
            break;
    }
};
const addStackTheme = (bgColor) => {
    const lightIconsStackUrls = [
        "./assets/icons/new-icons/dark-screen-icons/devicon-plain_mongodb-wordmark.svg",
        "./assets/icons/new-icons/dark-screen-icons/simple-icons_express.svg",
        "./assets/icons/new-icons/dark-screen-icons/uil_react.svg",
        "./assets/icons/new-icons/dark-screen-icons/fa-brands_node.svg",
        "./assets/icons/new-icons/dark-screen-icons/catppuccin_typescript.svg",
        "./assets/icons/new-icons/dark-screen-icons/streamline-logos_adobe-photoshop-logo-solid.svg",
        "./assets/icons/new-icons/dark-screen-icons/streamline-logos_adobe-illustrator-logo-solid.svg",
        "./assets/icons/new-icons/dark-screen-icons/solar_figma-broken.svg",
        "./assets/icons/new-icons/dark-screen-icons/devicon-plain_trello-wordmark.svg"
    ];
    const darkIconStackUrls = [
        "./assets/icons/new-icons/light-screen-icons/devicon-plain_mongodb-wordmark.svg",
        "./assets/icons/new-icons/light-screen-icons/simple-icons_express.svg",
        "./assets/icons/new-icons/light-screen-icons/uil_react.svg",
        "./assets/icons/new-icons/light-screen-icons/fa-brands_node.svg",
        "./assets/icons/new-icons/light-screen-icons/catppuccin_typescript.svg",
        "./assets/icons/new-icons/light-screen-icons/streamline-logos_adobe-photoshop-logo-solid.svg",
        "./assets/icons/new-icons/light-screen-icons/streamline-logos_adobe-illustrator-logo-solid.svg",
        "./assets/icons/new-icons/light-screen-icons/solar_figma-broken.svg",
        "./assets/icons/new-icons/light-screen-icons/devicon-plain_trello-wordmark.svg"
    ];
    const { stackBackground, stackContainerGrid } = stack;
    const addSetImages = (stackContainerList) => {
        for (let i = 0; i < stackContainerGrid.length; i++) {
            const imageNode = stackContainerGrid[i].image;
            const imageAttribute = stackContainerList[i];
            imageNode.setAttribute("src", imageAttribute);
        }
    };
    switch (bgColor) {
        case "purple":
            stackBackground.classList.replace("stack-blue", "stack");
            stackBackground.classList.replace("stack-white", "stack");
            addSetImages(lightIconsStackUrls);
            break;
        case "blue":
            stackBackground.classList.replace("stack", "stack-blue");
            stackBackground.classList.replace("stack-white", "stack-blue");
            addSetImages(lightIconsStackUrls);
            break;
        case "white":
            stackBackground.classList.replace("stack", "stack-white");
            stackBackground.classList.replace("stack-blue", "stack-white");
            addSetImages(darkIconStackUrls);
            break;
    }
};
const addServicesTheme = (bgColor) => {
    const { servicesTitle, serviceContainers, serviceContainersTitle, servicContainerImages, serviceCarouselIndicator } = services;
    const darkSkillsImages = [
        "./assets/icons/new-icons/dark-screen-icons/coding.skill.svg",
        "./assets/icons/new-icons/dark-screen-icons/ux-ui-skill.svg"
    ];
    const lightSkillsImages = [
        "./assets/icons/new-icons/light-screen-icons/coding.skill.svg",
        "./assets/icons/new-icons/light-screen-icons/ux-ui-skill.svg"
    ];
    function setSkillsImages(skillsImages) {
        for (let i = 0; i < servicContainerImages.length; i++) {
            const imageSkill = servicContainerImages[i];
            imageSkill.setAttribute("src", skillsImages[i]);
        }
    }
    function changeColorContainers(elements, mainColor, secondColor, thirdColor) {
        for (let element of elements) {
            element.classList.replace(secondColor, mainColor);
            element.classList.replace(thirdColor, mainColor);
        }
    }
    switch (bgColor) {
        case "purple":
            servicesTitle.classList.replace("services-title-blue", "services-title");
            servicesTitle.classList.replace("services-title-white", "services-title");
            changeColorContainers(serviceContainers, "service-target", "service-target-blue", "service-target-white");
            changeColorContainers(serviceContainersTitle, "services-skill-title", "services-skill-title-blue", "services-skill-title-white");
            setSkillsImages(darkSkillsImages);
            serviceCarouselIndicator[0].classList.replace("service-outlined-blue", "service-outlined");
            serviceCarouselIndicator[0].classList.replace("service-outlined-white", "service-outlined");
            serviceCarouselIndicator[1].classList.replace("service-indicator-blue", "service-indicator");
            serviceCarouselIndicator[1].classList.replace("service-indicator-white", "service-indicator");
            break;
        case "blue":
            servicesTitle.classList.replace("services-title", "services-title-blue");
            servicesTitle.classList.replace("services-title-white", "services-title-blue");
            changeColorContainers(serviceContainers, "service-target-blue", "service-target", "service-target-white");
            changeColorContainers(serviceContainersTitle, "services-skill-title-blue", "services-skill-title", "services-skill-title-white");
            setSkillsImages(darkSkillsImages);
            serviceCarouselIndicator[0].classList.replace("service-outlined", "service-outlined-blue");
            serviceCarouselIndicator[0].classList.replace("service-outlined-white", "service-outlined-blue");
            serviceCarouselIndicator[1].classList.replace("service-indicator", "service-indicator-blue");
            serviceCarouselIndicator[1].classList.replace("service-indicator-white", "service-indicator-blue");
            break;
        case "white":
            servicesTitle.classList.replace("services-title", "services-title-white");
            servicesTitle.classList.replace("services-title-blue", "services-title-white");
            changeColorContainers(serviceContainers, "service-target-white", "service-target", "service-target-blue");
            changeColorContainers(serviceContainersTitle, "services-skill-title-white", "services-skill-title", "services-skill-title-blue");
            setSkillsImages(lightSkillsImages);
            serviceCarouselIndicator[0].classList.replace("service-outlined", "service-outlined-white");
            serviceCarouselIndicator[0].classList.replace("service-outlined-blue", "service-outlined-white");
            serviceCarouselIndicator[1].classList.replace("service-indicator", "service-indicator-white");
            serviceCarouselIndicator[1].classList.replace("service-indicator-blue", "service-indicator-white");
            break;
    }
};
const addFooterTheme = (bgColor) => {
    const { footerSection, footerIconsList } = footer;
    console.log(footerIconsList);
    switch (bgColor) {
        case "purple":
            footerSection.classList.replace("footer-section-blue", "footer-section");
            footerSection.classList.replace("footer-section-white", "footer-section");
            break;
        case "blue":
            footerSection.classList.replace("footer-section", "footer-section-blue");
            footerSection.classList.replace("footer-section-white", "footer-section-blue");
            break;
        case "white":
            footerSection.classList.replace("footer-section", "footer-section-white");
            footerSection.classList.replace("footer-section-blue", "footer-section-white");
            break;
    }
};
export function addThemeLayout(bgColor) {
    switch (bgColor) {
        case "purple":
            addBodyTheme('body', 'body-blue', 'body-white');
            addheaderTheme('header', 'header-blue', 'header-white', './assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            addGeneralSettingsTheme(bgColor);
            addIntroductionTheme(bgColor);
            addboutMeTheme(bgColor);
            addProjectTheme(bgColor);
            addStackTheme(bgColor);
            addServicesTheme(bgColor);
            addFooterTheme(bgColor);
            break;
        case "blue":
            addBodyTheme('body-blue', 'body', 'body-white');
            addheaderTheme('header-blue', 'header', 'header-white', "./assets/icons/new-icons/phone-enabled-sharp-green.svg");
            addNavbarTheme(bgColor);
            addGeneralSettingsTheme(bgColor);
            addIntroductionTheme(bgColor);
            addboutMeTheme(bgColor);
            addProjectTheme(bgColor);
            addStackTheme(bgColor);
            addServicesTheme(bgColor);
            addFooterTheme(bgColor);
            break;
        case "white":
            addBodyTheme('body-white', 'body-blue', 'body');
            addheaderTheme('header-white', 'header', 'header-blue', './assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            addGeneralSettingsTheme(bgColor);
            addIntroductionTheme(bgColor);
            addboutMeTheme(bgColor);
            addProjectTheme(bgColor);
            addStackTheme(bgColor);
            addServicesTheme(bgColor);
            addFooterTheme(bgColor);
            break;
    }
    return bgColor;
}
