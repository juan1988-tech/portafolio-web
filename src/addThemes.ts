//definir el objeto para los nombres de estilo del primer componente: header, por cada layout
interface theme{
    body: HTMLBodyElement;
    header: HTMLHeadElement;
    themesLi: HTMLLIElement[];
    themesLiHeader: HTMLLIElement[];
    contactIcon: HTMLImageElement;
    navbar: HTMLDivElement 
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
}

//función para modificar el body
export const bodyLayout:HTMLBodyElement = document.body as HTMLBodyElement;

export const addBodyTheme = (mainBg:string,secondBg:string,thirdBg:string):void =>{
    //console.log(bodyLayout.style.background);
    bodyLayout.classList.replace(secondBg,mainBg);
    bodyLayout.classList.replace(thirdBg,mainBg);
}

//funcion para modificar los colores del header
export const { header,themesLi,themesLiHeader,contactIcon,navbar } = itemsTheme; 

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

export function addThemeLayout(bgColor:string){
    switch (bgColor) {
        case "purple":
            addBodyTheme('body','body-blue','body-white');
            addheaderTheme('header','header-blue','header-white','./assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            break;
        case "blue":
            addBodyTheme('body-blue','body','body-white');
            addheaderTheme('header-blue','header','header-white',"./assets/icons/new-icons/phone-enabled-sharp-green.svg");
            addNavbarTheme(bgColor);
            break;
        case "white":
            addBodyTheme('body-white','body-blue','body');
            addheaderTheme( 'header-white','header','header-blue','./assets/icons/new-icons/phone-enabled-sharp-blue.svg');
            addNavbarTheme(bgColor);
            break;    
    }

    return bgColor;
}









