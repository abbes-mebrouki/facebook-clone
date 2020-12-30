import React from 'react'
import {NavBarWrap} from './layout-components'
import styled, {css} from 'styled-components'
import logo from '../imgs/logo.webp'
import {InputWrap, Input, MiddleNavButton} from './raw-components'

// ---- icons
import {HiOutlineSearch as SearchIcon} from 'react-icons/hi'
import {AiFillHome as HomeIcon} from 'react-icons/ai'
import {FiUsers as UsersIcon} from 'react-icons/fi'
import {CgScreen as TvIcon} from 'react-icons/cg'
// import {IoStorefront} from 'react-icons/io'
import {RiStore2Line} from 'react-icons/ri'

import {RiGroup2Line as GroupsIcon} from 'react-icons/ri'


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

  img{
    max-width: 40px;
  }
`
const NavBarRightWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: inherit;
  overflow-y: hidden;
  width: 280px;
  
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
        <img src={logo} alt="logo"/>
        <InputWrap>
          <SearchIcon style={{fontSize: 20}} />
          <Input type='text' placeholder="Search Facebook"/>
        </InputWrap>
      </NavBarLeftWrap>
      <NavBarMiddleWrap>
        <MiddleNavButton active><HomeIcon /></MiddleNavButton>
        <MiddleNavButton><UsersIcon /></MiddleNavButton>
        <MiddleNavButton><TvIcon /></MiddleNavButton>
        <MiddleNavButton><RiStore2Line /></MiddleNavButton>
        <MiddleNavButton><GroupsIcon /></MiddleNavButton>
      </NavBarMiddleWrap>
      <NavBarRightWrap></NavBarRightWrap>
    </NavBarWrap>
  )
}
