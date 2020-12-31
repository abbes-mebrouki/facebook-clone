import React from "react"

import { ThemeProvider } from "styled-components"
import GlobalStyles, { darkTheme } from "./styles/global-styles"
import {
	AppWrap,
	NavBarWrap,
	MainWrap,
	RightSideWrap,
	LeftSideWrap,
	BodyWrap,
} from "./components/layout-components"
import NavBar from "./components/NavBar"
import LeftSidebar from "./components/left-sidebar/Left-Sidebar"
import FeedSection from "./components/feed-section/FeedSection"
import { ThemeProvider as MuiThemeProcider } from "@material-ui/core/styles"
import MuiCustomTheme from './MuiCustomTheme'
import { StylesProvider } from '@material-ui/core/styles';
import RightSidebar from "./components/right-sidebar/RightSidebar"


function App() {
	return (
		<StylesProvider injectFirst>
		<MuiThemeProcider theme={MuiCustomTheme}>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyles />
				<AppWrap>
					<NavBar />
					<BodyWrap>
						<LeftSidebar />
						<FeedSection />
						<RightSidebar />
					</BodyWrap>
				</AppWrap>
			</ThemeProvider>
		</MuiThemeProcider>
		</StylesProvider>
	)
}

export default App
