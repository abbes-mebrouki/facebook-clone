import React from 'react'
import { RightSideWrap } from '../layout-components'

import {RightSidebarTopElement, ChatListItem} from './r-side-row-components'

import Icons from '../../icons'

import {ChatListData} from './r-sidebar-data'
import { MeAvatar, MeBadge } from '../raw-components'

export default function RightSidebar() {
  return (
		<RightSideWrap>
			<RightSidebarTopElement>
				<h4>Your Pages</h4>
				<Icons.MoreIcon />
			</RightSidebarTopElement>
			<RightSidebarTopElement contacts>
				<h4>Contacts</h4>
				<div className="icons-wrap">
					<Icons.AddVideoIcon />
					<Icons.SaerchIcon />
					<Icons.MoreIcon />
				</div>
			</RightSidebarTopElement>
      {/* --------------------- */}

      {
      ChatListData.map(({id, name, isOnline, img}) => (
        <ChatListItem key={id}>
          <MeBadge forChat on={isOnline}  variant='dot' anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}>
            <MeAvatar src={img} ChatAvatar/>
          </MeBadge>
          <h4>{name}</h4>
        </ChatListItem>
      ))}
		</RightSideWrap>
	)
}
