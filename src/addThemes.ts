//definir el objeto para los nombres de estilo del primer componente: header, por cada layout
interface theme{
    body: HTMLBodyElement;
    header: HTMLHeadElement;
    themesLi: HTMLLIElement[];
    themesLiHeader: HTMLLIElement[];
    contactIcon: HTMLImageElement;
    navbar: HTMLDivElement;
    introduction:{
        firstGreeting:HTMLTitleElement,
        nameLabel:HTMLTitleElement,
        availableToWork: HTMLDivElement,
        lightButton: HTMLSpanElement,
        cvDownloader: HTMLButtonElement,
        socialMedia: HTMLDivElement;
    },
    aboutMe:{
        aboutMeBg: HTMLDivElement,
        aboutMeTitle: HTMLTitleElement,
        aboutMeRole: HTMLTitleElement,
    } 
}

let itemsTheme: theme ={
    body: document.body as HTMLBodyElement,
    /*header*/
    header: document.getElementById('header') as HTMLHeadElement,
    themesLi: [
        document.querySelector('#add-violet-theme') as HTMLLIElement,
        document.querySelector('#add-blue-theme') as HTMLLIElement,
        document.querySelector('#add-white-theme') as HTMLLIElement
    ],
    themesLiHeader:[
        document.querySelector('#add-violet-theme-header') as HTMLLIElement,
        document.querySelector('#add-blue-theme-header') as HTMLLIElement,
        document.querySelector('#add-white-theme-header') as HTMLLIElement
    ],
    contactIcon: document.querySelector('.contact-li img') as HTMLImageElement,
    navbar: document.querySelector('#navbar') as HTMLDivElement,
    introduction:{
        firstGreeting: document.getElementById('first-greeting') as HTMLTitleElement,
        nameLabel: document.getElementById('name-label') as HTMLTitleElement,
        availableToWork: document.querySelector('#available-to-work') as HTMLDivElement,
        lightButton: document.querySelector("#light-button") as HTMLSpanElement,
        cvDownloader: document.querySelector(".cv-downloader") as HTMLButtonElement,
        socialMedia: document.querySelector(".social-media") as HTMLDivElement
    },
    aboutMe:{
        aboutMeBg: document.querySelector('#about-me') as HTMLDivElement,
        aboutMeTitle: document.querySelector("#about-me-title") as HTMLTitleElement,
        aboutMeRole: document.querySelector("#about-me-role") as HTMLTitleElement
    }
    
}

//función para modificar el body
export const bodyLayout:HTMLBodyElement = document.body as HTMLBodyElement;

export const addBodyTheme = (mainBg:string,secondBg:string,thirdBg:string):void =>{
    //console.log(bodyLayout.style.background);
    bodyLayout.classList.replace(secondBg,mainBg);
    bodyLayout.classList.replace(thirdBg,mainBg);
}

//funcion para modificar los colores del header
export const { header,themesLi,themesLiHeader,contactIcon,navbar,introduction,aboutMe } = itemsTheme; 

const addheaderTheme = (mainColor:string,secondColor:string,thirdColor:string,contactIconImg:string):void =>{
    //header.classList.replace('header-blue','header');
    header.classList.replace(secondColor,mainColor);
    header.classList.replace(thirdColor,mainColor);

    contactIcon.src = contactIconImg;
}

export const addNavbarTheme = (bgColor:string):void =>{
    if(bgColor==="purple"){
        navbar.classList.replace("navbar-change-blue","navbar-change")
        navbar.classList.replace("navbar-change-white","navbar-change")  
    }
    if(bgColor==="blue"){
        navbar.classList.replace("navbar-change","navbar-change-blue")
        navbar.classList.replace("navbar-change-white","navbar-change-blue")      
    }
    if(bgColor==="white"){
        navbar.classList.replace("navbar-change","navbar-change-white")
        navbar.classList.replace("navbar-change-blue","navbar-change-white")
    }
}

const addIntroductionTheme = (bgColor:string) =>{
    const { firstGreeting, nameLabel, availableToWork, lightButton,cvDownloader,socialMedia } = introduction;
    
    const socialMediaButtons:HTMLCollection = socialMedia.children as HTMLCollection;
    
    switch (bgColor) {
        case "purple":
            firstGreeting.classList.replace("first-greeting-blue","first-greeting");
            firstGreeting.classList.replace("first-greeting-white","first-greeting");

            nameLabel.classList.replace("name-label-blue","name-label");
            nameLabel.classList.replace("name-label-white","name-label");

            availableToWork.classList.replace("available-to-work-blue","available-to-work");
            availableToWork.classList.replace("available-to-work-white","available-to-work");

            lightButton.classList.replace("light-button-blue","light-button");
            lightButton.classList.replace("light-button-white","light-button");

            cvDownloader.classList.replace("cv-downloader-blue","cv-downloader");
            cvDownloader.classList.replace("cv-downloader-white","cv-downloader");

            socialMediaButtons[0].classList.replace('linkedin-first-link-blue','linkedin-first-link');
            socialMediaButtons[0].classList.replace('linkedin-first-link-white','linkedin-first-link');

            socialMediaButtons[1].classList.replace('github-first-link-blue','github-first-link');
            socialMediaButtons[1].classList.replace('github-first-link-white','github-first-link');
            break;
        case "blue":
            firstGreeting.classList.replace("first-greeting","first-greeting-blue");
            firstGreeting.classList.replace("first-greeting-white","first-greeting-blue");

            nameLabel.classList.replace("name-label","name-label-blue");
            nameLabel.classList.replace("name-label-white","name-label-blue");

            availableToWork.classList.replace("available-to-work","available-to-work-blue");
            availableToWork.classList.replace("available-to-work-white","available-to-work-blue");

            lightButton.classList.replace("light-button","light-button-blue");
            lightButton.classList.replace("light-button-white","light-button-blue");

            cvDownloader.classList.replace("cv-downloader","cv-downloader-blue");
            cvDownloader.classList.replace("cv-downloader-white","cv-downloader-blue")

            socialMediaButtons[0].classList.replace('linkedin-first-link','linkedin-first-link-blue');
            socialMediaButtons[0].classList.replace('linkedin-first-link-white','linkedin-first-link-blue');

            socialMediaButtons[1].classList.replace('github-first-link','github-first-link-blue');
            socialMediaButtons[1].classList.replace('github-first-link-white','github-first-link-blue');
            break;
        case "white":
            firstGreeting.classList.replace("first-greeting","first-greeting-white");
            firstGreeting.classList.replace("first-greeting-blue","first-greeting-white");

            nameLabel.classList.replace("name-label","name-label-white");
            nameLabel.classList.replace("name-label-blue","name-label-white");

            availableToWork.classList.replace("available-to-work","available-to-work-white");
            availableToWork.classList.replace("available-to-work-blue","available-to-work-white");

            lightButton.classList.replace("light-button","light-button-white");
            lightButton.classList.replace("light-button-blue","light-button-white");

            cvDownloader.classList.replace("cv-downloader","cv-downloader-white");
            cvDownloader.classList.replace("cv-downloader-blue","cv-downloader-white");

            socialMediaButtons[0].classList.replace('linkedin-first-link','linkedin-first-link-white');
            socialMediaButtons[0].classList.replace('linkedin-first-link-blue','linkedin-first-link-white');

            socialMediaButtons[1].classList.replace('github-first-link','github-first-link-white');
            socialMediaButtons[1].classList.replace('github-first-link-blue','github-first-link-white');
            break;
    }
}

const addboutMeTheme = (bgColor:String) =>{
    const {aboutMeBg,aboutMeTitle,aboutMeRole} = aboutMe;
    switch (bgColor) {
        case "purple":
            aboutMeBg.classList.replace("about-me-blue","about-me");
            aboutMeBg.classList.replace("about-me-white","about-me");

            aboutMeTitle.classList.replace("about-me-title-blue","about-me-title");
            aboutMeTitle.classList.replace("about-me-title-white","about-me-title");

            aboutMeRole.classList.replace("about-me-role-blue","about-me-role");
            aboutMeRole.classList.replace("about-me-role-white","about-me-role");
            break;
        case "blue":
            aboutMeBg.classList.replace("about-me","about-me-blue");
            aboutMeBg.classList.replace("about-me-white","about-me-blue");

            aboutMeTitle.classList.replace("about-me-title","about-me-title-blue");
            aboutMeTitle.classList.replace("about-me-title-white","about-me-title-blue");

            aboutMeRole.classList.replace("about-me-role","about-me-role-blue");
            aboutMeRole.classList.replace("about-me-role-white","about-me-role-blue");
            break;
       case "white":
            aboutMeBg.classList.replace("about-me","about-me-white");
            aboutMeBg.classList.replace("about-me-blue","about-me-white");

            aboutMeTitle.classList.replace("about-me-title","about-me-title-white");
            aboutMeTitle.classList.replace("about-me-title-blue","about-me-title-white");

            aboutMeRole.classList.replace("about-me-role","about-me-role-white");
            aboutMeRole.classList.replace("about-me-role-blue","about-me-role-white");
            break;     
    }
}

export function addThemeLayout(bgColor:string){
    switch (bgColor) {
        case "purple":
            addBodyTheme('body','body-blue','body-white');
            addheaderTheme('header','header-blue','header-white','./assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            addIntroductionTheme(bgColor);
            addboutMeTheme(bgColor);
            break;
        case "blue":
            addBodyTheme('body-blue','body','body-white');
            addheaderTheme('header-blue','header','header-white',"./assets/icons/new-icons/phone-enabled-sharp-green.svg");
            addNavbarTheme(bgColor);
            addIntroductionTheme(bgColor);
            addboutMeTheme(bgColor);
            break;
        case "white":
            addBodyTheme('body-white','body-blue','body');
            addheaderTheme( 'header-white','header','header-blue','./assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            addIntroductionTheme(bgColor);
            addboutMeTheme(bgColor);
            break;    
    }

    return bgColor;
}









