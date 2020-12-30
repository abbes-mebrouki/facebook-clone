import styled, {css} from 'styled-components'

export const AppWrap = styled.div`
  display: grid;
  grid-template-columns: 302px auto 302px;
  grid-template-rows: 56px auto;
  grid-template-areas: 
    'nav nav nav'
    'l-side main r-side';

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
  
`



// ------------------------ Main Feed ------------------------
export const MainWrap = styled.div`
  grid-area: main;
  width: 100%;
  background-color: inherit;
  `


// ------------------------ Left Side bar ------------------------
export const LeftSideWrap = styled.div`
  grid-area: l-side;
  width: 302px;
  height: 100vh;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 8px 8px 8px;
`

// ------------------------ Left Side bar ------------------------
export const RightSideWrap = styled.div`
  grid-area: r-side;
  width: 302px;
  height: 100vh;
  background-color: inherit;
`