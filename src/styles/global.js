import {createGlobalStyle} from 'styled-components';
import {GetDefaultTheme} from '../services/theme';
const defaultTheme = GetDefaultTheme();

export default createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --main-color: ${props => props.theme?.main_color || defaultTheme.main_color};
        --second-color: ${props => props.theme?.second_color || defaultTheme.main_color};
        --success-color: ${props => props.theme?.second_color || defaultTheme.main_color};
        --danger-color: ${props => props.theme?.second_color || defaultTheme.main_color};
        --warning-color: ${props => props.theme?.second_color || defaultTheme.main_color};
        --info-color: ${props => props.theme?.second_color || defaultTheme.main_color};
        --inverse-color: ${props => props.theme?.second_color || defaultTheme.main_color};
        --dark-color: ${props => props.theme?.second_color || defaultTheme.main_color};
        --light-color: ${props => props.theme?.second_color || defaultTheme.main_color};
    }

    .main_color{color: var(--main-color) !important}
    .main_background{background-color: var(--main-color) !important}
    .second_color{color: var(--second-color) !important}
    .second_background{background-color: var(--second-color) !important}

`;
