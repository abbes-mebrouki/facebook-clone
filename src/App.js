import React from "react"

import { ThemeProvider } from "styled-components"
import GlobalStyles, { darkTheme } from "./styles/global-styles"
import { AppWrap, NavBarWrap, MainWrap, RightSideWrap, LeftSideWrap } from "./components/layout-components"
import NavBar from './components/NavBar'

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<AppWrap>
        <NavBar />
        <LeftSideWrap></LeftSideWrap>
        <MainWrap></MainWrap>
        <RightSideWrap></RightSideWrap>
			</AppWrap>
		</ThemeProvider>
	)
}

export default App
