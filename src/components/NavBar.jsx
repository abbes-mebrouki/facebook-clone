import React from "react"
import { NavBarWrap } from "./layout-components"
import styled, { css } from "styled-components"
import logo from "../imgs/logo.webp"
import {
	InputWrap,
	Input,
	MiddleNavButton,
	NavIconButton,
	NavAvatar,
	NavProfileButton,
	NavBadge,
	MeBadge,
} from "./raw-components"

// ---- icons
import { HiOutlineSearch as SearchIcon } from "react-icons/hi"
import { AiFillHome as HomeIcon } from "react-icons/ai"
import { FiUsers as UsersIcon } from "react-icons/fi"
import { CgScreen as TvIcon } from "react-icons/cg"
// import {IoStorefront} from 'react-icons/io'
import { RiStore2Line } from "react-icons/ri"
import { AiOutlinePlus as PlusIcon } from "react-icons/ai"
import { RiGroup2Line as GroupsIcon } from "react-icons/ri"
import { FaFacebookMessenger as MessengerIcon } from "react-icons/fa"
import { MdNotifications as NotificationsIcon } from "react-icons/md"
import { BsCaretDownFill as AccountArrowIcon } from "react-icons/bs"

import AvatarImg from "../imgs/avatar-img.jpg"

import Icons from "../icons"

import { NavSreenSizes } from "../styles/global-styles"

//--------------------

const { navSc696, navSc1096, navSc996 } = NavSreenSizes

const NavBarLeftWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: inherit;
	height: 55px;
	position: absolute;
	top: 0;
	left: 16px;
	z-index: 19;
	img {
		max-width: 40px;
	}

	@media (max-width: ${navSc696}) {
		position: static;
	}
`
const NavBarRightWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	background-color: inherit;
	overflow-y: hidden;
	width: fit-content;
	height: 100%;
	position: absolute;
	top: 0;
	right: 16px;
	z-index: 19;

	@media (max-width: ${navSc696}) {
		position: static;
	}
	@media (max-width: ${navSc1096}) {
		margin-left: 16px;
	}
`

const NavMidBtnsWrap = styled.div`
	${() => css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 55px;
	`}
`

const NavBarMiddleWrap = styled.div`
	/* ${() => css`
		display: grid;
		align-items: center;
		width: 100%;
		height: 56px;
		background-color: red;
	`} */
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: inherit;
	overflow-y: hidden;
	flex: 1;
	z-index: 9;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	@media (max-width: ${navSc696}) {
		justify-content: flex-start;
		position: static;
	}
`

export default function NavBar() {
	const { HumburgerIcon } = Icons

	return (
		<NavBarWrap>
			<NavBarLeftWrap>
				<img src={logo} alt="logo" />
				<InputWrap>
					<SearchIcon style={{ fontSize: 20 }} />
					<Input type="text" placeholder="Search Facebook" />
				</InputWrap>
			</NavBarLeftWrap>
			<NavBarMiddleWrap>
				{/* <NavMidBtnsWrap> */}
				<MiddleNavButton active>
					<HomeIcon />
				</MiddleNavButton>
				<MiddleNavButton>
					<UsersIcon />
				</MiddleNavButton>
					<MiddleNavButton>
						<MeBadge badgeContent={3} overlap="circle">
							<TvIcon />
						</MeBadge>
					</MiddleNavButton>
				<MiddleNavButton>
					<RiStore2Line />
				</MiddleNavButton>
				<MiddleNavButton groupsBtn>
					<MeBadge>
						<GroupsIcon />
					</MeBadge>
				</MiddleNavButton>
				<MiddleNavButton hamBtn>
					<HumburgerIcon />
				</MiddleNavButton>
				{/* </NavMidBtnsWrap> */}
			</NavBarMiddleWrap>
			<NavBarRightWrap>
				<NavProfileButton>
					<NavAvatar alt="Abbes trov" src={AvatarImg} />
					<h4>Abbes</h4>
				</NavProfileButton>
				<NavIconButton>
					<PlusIcon />
				</NavIconButton>
				<NavIconButton>
					<MessengerIcon />
				</NavIconButton>
				<MeBadge badgeContent={6} overlap="circle">
					<NavIconButton>
						<NotificationsIcon />
					</NavIconButton>
				</MeBadge>
				<NavIconButton>
					<AccountArrowIcon />
				</NavIconButton>
			</NavBarRightWrap>
		</NavBarWrap>
	)
}
