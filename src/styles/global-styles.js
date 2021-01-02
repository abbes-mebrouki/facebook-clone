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

  .MuiDialog-container { // keep it here untill I find where to put it.
    background-color: rgba(0, 0, 0, .2);
  }

  .MuiPaper-root {
    position: absolute;
    top: 50px;
    left: calc(50vw - 290px);
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
  darkBorderColor: 'rgb(62, 64, 66)',
  darkerBorderColor: 'rgb(47, 48, 49)',
  secondaryText2: 'rgb(165, 168, 173)',
  disabledBgColor: 'rgb(80, 81, 81)',
  disabledTextColor: 'rgb(132, 133, 133)',

  redColor: 'rgb(242, 62, 92)',
  greenColor: 'rgb(88, 196, 114)',
  yellowColor: 'rgb(248, 192, 62)',
  orangeColor: 'rgb(246, 101, 81)',
  blueColor: 'rgb(48, 133, 243)',
  darkColor: 'rgb(112, 119, 127)',



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