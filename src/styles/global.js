import {createGlobalStyle} from 'styled-components';
import {GetDefaultTheme} from '../services/theme';
const defaultTheme = GetDefaultTheme();

export default createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        outline: 0;
        box-sizing: border-box;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-size: 16px;
    }

    p{
        margin: 0px;
    }

    :root {
        --main-color: ${props => props.theme?.main_color || defaultTheme.main_color};
        --second-color: ${props => props.theme?.second_color || defaultTheme.second_color};
        --success-color: ${props => props.theme?.success_color || defaultTheme.success_color};
        --danger-color: ${props => props.theme?.danger_color || defaultTheme.danger_color};
        --warning-color: ${props => props.theme?.warning_color || defaultTheme.warning_color};
        --info-color: ${props => props.theme?.info_color || defaultTheme.info_color};
        --inverse-color: ${props => props.theme?.inverse_color || defaultTheme.inverse_color};
        --dark-color: ${props => props.theme?.dark_color || defaultTheme.dark_color};
        --light-color: ${props => props.theme?.light_color || defaultTheme.light_color};
        --default-main-color: #2196F3;
        --default-second-color: #9C27B0;
        --default-success-color: #4CAF50;
        --default-danger-color: #F44336;
        --default-warning-color: #FFC107;
        --default-info-color: #00BCD4;
        --default-inverse-color: #FF5722;
        --default-dark-color: #333;
        --default-light-color: #fff;
        --default-gray-color: #666;
    }

    .main_color{color: var(--main-color) !important}
    .main_background{background-color: var(--main-color) !important}
    .second_color{color: var(--second-color) !important}
    .second_background{background-color: var(--second-color) !important}

    .success_color{color: var(--success-color) !important}
    .success_background{background-color: var(--success-color) !important}
    
    .danger_color{color: var(--danger-color) !important}
    .danger_background{background-color: var(--danger-color) !important}
    
    .warning_color{color: var(--info-color) !important}
    .warning_background{background-color: var(--info-color) !important}
    
    .info_color{color: var(--info-color) !important}
    .info_background{background-color: var(--info-color) !important}
    
    .inverse_color{color: var(--inverse-color) !important}
    .inverse_background{background-color: var(--inverse-color) !important}
    
    .dark_color{color: var(--dark-color) !important}
    .dark_background{background-color: var(--dark-color) !important}

    .light_color{color: var(--light-color) !important}
    .light_background{background-color: var(--light-color) !important}

    .default_main_color{color: var(--default-main-color) !important}
    .default_main_background{background-color: var(--default-main-color) !important}
    .default_second_color{color: var(--default-second-color) !important}
    .default_second_background{background-color: var(--default-second-color) !important}

    .default_success_color{color: var(--default-success-color) !important}
    .default_success_background{background-color: var(--default-success-color) !important}
    
    .default_danger_color{color: var(--default-danger-color) !important}
    .default_danger_background{background-color: var(--default-danger-color) !important}
    
    .default_warning_color{color: var(--default-info-color) !important}
    .default_warning_background{background-color: var(--default-info-color) !important}
    
    .default_info_color{color: var(--default-info-color) !important}
    .default_info_background{background-color: var(--default-info-color) !important}
    
    .default_inverse_color{color: var(--default-inverse-color) !important}
    .default_inverse_background{background-color: var(--default-inverse-color) !important}
    
    .default_dark_color{color: var(--default-dark-color) !important}
    .default_dark_background{background-color: var(--default-dark-color) !important}

    .default_light_color{color: var(--default-light-color) !important}
    .default_light_background{background-color: var(--default-light-color) !important}

    .default_gray_color{color: var(--default-gray-color) !important}
    .default_gray_background{background-color: var(--default-gray-color) !important}

    @media(max-width: 959px){
        .hide-tablet{
            display: none !important;
        }
    }

    @media(max-width: 766px){
        .hide-mobile{
            display: none !important;
        }
    }

`;
