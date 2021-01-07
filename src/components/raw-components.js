import styled, { css } from "styled-components"
import { getFeedButtonIconColor } from "./feed-section/feed-raw-components"
import { ScreenSizes, NavSreenSizes } from "../styles/global-styles"

import IconButton from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"
import { Badge, Button } from "@material-ui/core"

const { md } = ScreenSizes
const { navSc1366, navSc1256, navSc1096, navSc996, navSc896 ,navSc696 } = NavSreenSizes

// -------------------- LEFT NAV BAR ------------------------------

export const InputWrap = styled.div`
	${({ theme, feedInput }) => css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 10px;
		padding-right: 10px;
		background-color: ${theme.commonColor};
		margin-left: 8px;
		border-radius: 30px;
		width: 240px;
		height: 40px;

		${feedInput &&
		css`
			width: 100%;
			padding: 0;
		`}

		@media (max-width: ${navSc1256}) {
			width: ${!feedInput && "40px"};
		} ;
	`}
`

export const Input = styled.input`
	${({ theme, feedInput }) => css`
		margin-left: 4px;
		background-color: inherit;
		flex: 1;
		border-radius: 30px;
		/* width: 240px; */
		height: 100%;
		border: none;
		padding-top: 1px;
		color: ${theme.primaryText};
		outline-width: 0;

		cursor: pointer;
		::placeholder {
			font-size: 1.13em;
			color: rgb(166, 169, 174);
		}

		${feedInput &&
		css`
			margin-left: 0;
			padding: 0 12px;
			::placeholder {
				font-size: 1.3em;
				color: rgb(166, 169, 174);
			}
			&:hover {
				background-color: ${({ theme }) => theme.iconBtnBgHover};
			}
		`}

		@media (max-width: ${navSc1256}) {
			display: ${!feedInput && "none"};
		}
	`}
`

// -------------------- MIDDLE NAV BAR ------------------------------

export const MiddleNavButton = styled(Button)`
	${({ theme, active, groupsBtn, hamBtn}) => css`
		height: 49px;
		background-color: inherit;
		width: 130px;
		max-width: 130px;
		display: grid;
		place-items: center;
		cursor: pointer;
		margin: 0 4px;

		svg {
			font-size: 25px;
			color: ${theme.secondaryText};
		}

	

		${hamBtn &&  css`
			display: none;
		`}

		${active &&
		css`
			height: 55px;
			border-radius: 0;
			border-bottom: 3px solid ${({ theme }) => theme.primaryBlueColor};
			
			svg {
				font-size: 25px;
				color: ${({ theme }) => theme.primaryBlueColor};
			}
		`}

		&:hover {
			background-color: ${active ? "inherit" : theme.commonColor};
		}

		@media (max-width: ${navSc1366}) {
			width: 112px;
		}
		@media (max-width: ${navSc1256}) { // default 1096
			display: ${hamBtn && 'grid'};
			max-width: 109px;

			${groupsBtn && css`
				display: none;
			`}
		}
		@media (max-width: ${navSc696}) {
			display: ${!hamBtn && 'none'}
			
			
		}

		@media (max-width: ${navSc996}) {
			width: 95px
		}
		@media (max-width: ${navSc896}) {
			width: 78px;
		}
		@media (max-width: 820px) {
			width: 66px;
		}
		@media (max-width: 756px) {
			width: 56px;
		}
	`}
`

// ------------------- Right NavBar -------------------------

export const NavBadge = styled(Badge)`
	.MuiBadge-badge {
		background-color: ${({ theme }) => theme.redColor};
	}
`

export const MeBadge = styled(Badge)`
	.MuiBadge-badge {
		${({ forChat, on, theme }) =>
			forChat
				? on &&
				  css`
						background-color: rgb(50, 162, 77);
						color: rgb(50, 162, 77);
						box-shadow: 0 0 0 2px ${theme.appBg};

						::after {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							border-radius: 50%;
							content: '"';
						}
				  `
				: css`
						background-color: ${({ theme }) => theme.redColor};
						color: ${theme.primaryText};
				  `}
	}
`

export const NavIconButton = styled(IconButton)`
	&& {
		background-color: ${({ theme }) => theme.commonColor};
		/* width: 40px;
		height: 40px; */
		margin-left: 8px;

		svg {
			color: ${({ theme }) => theme.lighterText};
			/* color: #fff; */
			font-size: 17px;
		}

		&:hover {
			background-color: ${({ theme }) => theme.iconBtnBgHover};
		}
	}
`

export const NavProfileButton = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 38px;
		border-radius: 30px;
		padding: 3px 10px 3px 4px;
		margin-right: 8px;

		h4 {
			/* font-weight: 400; */
			font-size: 0.85em;
			margin-left: 8px;
		}

		&:hover {
			background-color: ${theme.commonColor};
			cursor: pointer;
		}

		@media (max-width: ${navSc1256}) {
			display: none;
		}
	`}
`

export const NavAvatar = styled(Avatar)`
	&& {
		height: 28px;
		width: 28px;
	}
`

// ------------------ Global Components ----------------

export const MeAvatar = styled(Avatar)`
	&& {
		${(props) =>
			props.NavAvatar &&
			css`
				height: 28px;
				width: 28px;
			`}
		${(props) =>
			props.ChatAvatar &&
			css`
				height: 28px;
				width: 28px;
			`}
		${(props) =>
			props.FeedAvatar &&
			css`
				height: 40px;
				width: 40px;
			`}
		${(props) =>
			props.socialAvatar &&
			css`
				height: 18px;
				width: 18px;
			`}
		${(props) =>
			props.roomAvatar &&
			css`
				height: 40px;
				width: 40px;
				margin-right: 16px;
			`}
			${(props) =>
			props.storyAvatar &&
			css`
				height: 40px;
				width: 40px;
				border: 3px solid ${props.theme.blueLink};
			`}
	}
`

export const MeIconButton = styled(IconButton)`
	${({ theme, iconColor, defaultBtn }) => css`
		background-color: ${defaultBtn ? theme.lightDark : theme.commonColor};
		width: 36px;
		height: 36px;
		padding: 0;
		/* box-shadow: 0 0 2px rgba(0, 0, 0, .06); */

		svg {
			color: ${getFeedButtonIconColor(iconColor, theme)};
			font-size: 24px;
		}

		&:hover {
			background-color: ${theme.iconBtnBgHover};
		}
	`}
`
