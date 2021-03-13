

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
    getConfigJson: (key) => {
        if(localStorage.getItem("config")){
            const theme = JSON.parse(localStorage.getItem("config").replace(/'/g,'"'));
            const color = theme[key];
            return color;
        }
    },
    getThemeLogo: () => {
        const logo = localStorage.getItem("logo");
        return logo;
    }
}

export function GetDefaultTheme(){
    return {
        main_color: "#2196F3",
        second_color: "#9C27B0",
        success_color: "#4CAF50",
        danger_color: "#F44336",
        warning_color: "#FFC107",
        info_color: "#00BCD4",
        inverse_color: "#FF5722",
        dark_color: "#333",
        light_color: "#fff",
    }
}

export function GetLocalConfig(){
    const config = localStorage.getItem("config");
    return config;
}