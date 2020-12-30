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

//--------------------

const NavBarChildrenSharedStyles = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: red;
	padding: 10px 20px;
`

const NavBarLeftWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: inherit;

	max-height: 55px;
	overflow-y: hidden;

	img {
		max-width: 40px;
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
`
const NavBarMiddleWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: inherit;
	overflow-y: hidden;
`

export default function NavBar() {
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
				<MiddleNavButton active>
					<HomeIcon />
				</MiddleNavButton>
				<MiddleNavButton>
					<UsersIcon />
				</MiddleNavButton>
				<MiddleNavButton>
					<NavBadge badgeContent={3} color='secondary'>
            <TvIcon />
          </NavBadge>
				</MiddleNavButton>
				<MiddleNavButton>
					<RiStore2Line />
				</MiddleNavButton>
				<MiddleNavButton>
					<GroupsIcon />
				</MiddleNavButton>
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
				<NavIconButton>
          <NavBadge badgeContent={6} color='secondary'>
            <NotificationsIcon/>
          </NavBadge>
				</NavIconButton>
				<NavIconButton>
					<AccountArrowIcon />
				</NavIconButton>
			</NavBarRightWrap>
		</NavBarWrap>
	)
}
