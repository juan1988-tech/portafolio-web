//hacer un tipo personalizado para los íconos del footer
export type foooterIconsType ={
    figure: HTMLDivElement,
    image: HTMLImageElement
}

export interface Introduction{
    firstGreeting:HTMLTitleElement,
    nameLabel:HTMLTitleElement,
    availableToWork: HTMLDivElement,
    lightButton: HTMLSpanElement,
    cvDownloader: HTMLButtonElement,
    socialMedia: HTMLDivElement;
}

export interface AboutMe{
    aboutMeBg: HTMLDivElement,
    aboutMeTitle: HTMLTitleElement,
    aboutMeRole: HTMLTitleElement,
}

export interface Projects{
    projectsTitle: HTMLTitleElement
        projectPerformance:{
            footballLegends: HTMLDivElement,
            todoSevale: HTMLDivElement,
            sienna: HTMLDivElement,
            montannaMagica: HTMLDivElement
        }
        projectCarouselButtons:{
            projectCarouselLeft: HTMLButtonElement,
            projectCarouselRight: HTMLButtonElement,
            projectCarouselLeftImg: HTMLImageElement,
            projectCarouselRightimg: HTMLImageElement
        }
}

export interface Stack{
    stackBackground: HTMLDivElement,
        stackContainerGrid: [
            { image: HTMLImageElement },
            { image: HTMLImageElement },
            { image: HTMLImageElement },
            { image: HTMLImageElement },
            { image: HTMLImageElement },
            { image: HTMLImageElement },
            { image: HTMLImageElement },
            { image: HTMLImageElement },
            { image: HTMLImageElement },
        ]
}

export interface Services{
    servicesTitle: HTMLTitleElement,
    serviceContainers: HTMLDivElement[],
    serviceContainersTitle: HTMLTitleElement[],
    servicContainerImages: HTMLImageElement[],
    serviceCarouselIndicator: HTMLButtonElement[];
}

export interface Footer{
    footerSection: HTMLDivElement,
    footerInitialTitle: HTMLTitleElement,
    footerIconsList: foooterIconsType[],
    footerMainForm: HTMLFormElement,
    footerFinalCredits:{
        footerFinalContainer: HTMLDivElement,
        footerLabelnameDev: HTMLTitleElement,
    }
}