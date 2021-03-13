

export function SetDefaultConfig(){
    const defaultConfig = "{'main_color': '#c00', 'second_color': '#c00'}"
    localStorage.setItem("config", defaultConfig)
}

export const GetTheme = {
    getThemeJson: () => {
        if(localStorage.getItem("config")){
            const theme = JSON.parse(localStorage.getItem("config").replace(/'/g,'"'))
            return theme;
        }
        
    },
    getThemeLogo: () => {
        const logo = localStorage.getItem("logo_path");
    }
}

export function GetDefaultTheme(){
    return {
        main_color: "#000",
        second_color: "#fc0",
    }
}

export function GetLocalConfig(){
    const config = localStorage.getItem("config");
    return config;
}