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
    width: 100%;
    height: 100%;
    
  } 


  // Scrollbar
  /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgb(90, 90, 90);
  border-radius: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(140, 140, 140);
  border-radius: 0;
}

// -------------

  .MuiDialog-container { // keep it here untill I find where to put it.
    background-color: rgba(0, 0, 0, .2);
    

    @media (max-width: 696px){
      padding-left: 0;
      padding-right: 0;
    }
  }

  .MuiDialog-paper {
    /* position: fixed; */
    /* top: 56px; */
    /* left: calc(100% / 2 - 250px); */

  }

  .MuiPaper-root {

    @media (max-width: 696px){
      margin: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      border-radius: 12px 12px 0 0;
    }
  }
  .MuiDialog-paper{
    @media (max-width: 696px){
      border-radius: 12px 12px 0 0;
    }
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
  xl: '1400px',
}


export const NavSreenSizes = {
  navSc1366: '1366px',
  navSc1256: '1256px',
  navSc1100: '1100px',
  navSc1096: '1096px',
  navSc996: '996px',
  navSc896: '896px',
  navSc796: '796px',
  navSc696: '696px',
  navSc596: '596px',
  navSc496: '496px',
}

export default GlobalStyles


