import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({theme}) => theme.appBg};
    color: ${({theme}) => theme.primaryText};
    
  }

`


export const darkTheme = {
  appBg: 'rgb(24, 25, 26)',
  lightDark: 'rgb(36, 37, 38)',
  commonColor: 'rgb(58, 59, 60)',
  primaryText: 'rgb(228, 230, 235)',
  secondaryText: 'rgb(176,179,184)',
  iconBtnBgHover: 'rgb(78, 79, 80)',
  primaryBlueColor: 'rgb(45, 136, 255)',
  lighterText: 'rgb(245, 245, 245)',
  sideNavHoverBg: 'rgb(48, 48, 49)',
  deemColor: 'rgba(45, 136, 255, .2)', // temp name
  blueLink: 'rgb(69, 153, 255)',

  redColor: 'rgb(242, 62, 92)',
  greenColor: 'rgb(88, 196, 114)',
  yellowColor: 'rgb(248, 192, 62)',

  containerShadow: '0 1.4px 1px rgba(0, 0, 0, .1)',


}


export const ScreenSizes = {
  xs: '540px',
  sm: '680px',
  md: '880px',
  lg: '1360px',
  xl: '1400px'
}

export default GlobalStyles