import styled, {css} from 'styled-components'

import { ScreenSizes, NavSreenSizes } from '../styles/global-styles'
const { xs, sm, md, lg, xl } = ScreenSizes
const { navSc1096,navSc1100,  navSc896, navSc696, navSc596, navSc996, navSc1256} = NavSreenSizes;

export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
`


export const BodyWrap = styled.div`
  width: 100%;
  display: grid;
  padding-top: 56px;
  grid-template-columns: 302px auto 302px;
  grid-template-areas: 
    'nav nav nav'
    'l-side main r-side';
  max-width: 1440px;
  
  

    @media(max-width: ${navSc1256}){ //1096
      grid-template-columns: auto 302px;
      grid-template-areas: 
        'main r-side';
  }
    @media(max-width: ${navSc896}){

      grid-template-columns: 1fr;
      grid-template-areas: 
        'nav nav nav'
        'main';
  }

  @media (max-width: 1800px){
    max-width: unset;
  }

    /* margin-bottom: 200px; // temp margin */
    
`


// ------------------------ Nav Bar -------------------------

export const NavBarWrap = styled.div`
  grid-area: nav;
  width: 100%;
  height: 56px;
  background-color: ${({theme}) => theme.lightDark};
  border-bottom: 1px solid ${({theme}) => theme.commonColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  

  @media (max-width: 496px){
    /* background-color: yellow; */
  }
  // ------- test ----
  /* display: grid;

  grid-template-columns: */
  
`



// ------------------------ Main Feed ------------------------
export const MainWrap = styled.div`
  grid-area: main;
  width: 100%;
  min-width: 524px;
  /* max-width: 564px; */
  /* margin: 0 auto; */
  /* padding: 32px; */
  /* background-color: black; */
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 16px;
  /* flex: 1; */
  align-self: center;
  position: sticky;
  z-index: 7;


  @media (max-width: ${navSc696}) {
    padding-top: 0;
  }
  `


// ------------------------ Left Side bar ------------------------
export const LeftSideWrap = styled.div`
  grid-area: l-side;
  /* max-width: 302px; */
  width: 100%;
  height: calc(100vh - 56px);
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 8px 8px 8px;
  position: sticky;
  top: 56px;

  @media(max-width: ${navSc1256}){ 
    display: none;
    /* max-width: 280px; */
  }
  /* @media(max-width: ${navSc1100}){ // 1096
    display: none;
  } */
`

// ------------------------ Right Side bar ------------------------
export const RightSideWrap = styled.div`
  grid-area: r-side;
  /* width: 302px; */
  width: 100%;
  height: calc(100vh - 56px);
  background-color: inherit;
  /* background-color: rgb(40, 80, 240); */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 16px 10px 8px;
  position: sticky;  
  top: 56px;
  

  @media(max-width: ${navSc1256}){
    max-width: 280px
  }
  /* @media(max-width: ${navSc996}){
    width: 282px
  } */

  @media(max-width: ${navSc896}){
    display: none;
  }
`