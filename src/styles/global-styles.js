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

}


export default GlobalStyles