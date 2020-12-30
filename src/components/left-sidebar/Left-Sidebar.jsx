import React from "react"
import { LeftSideWrap } from "../layout-components"
import { LeftSbItemWrap, LeftSbImg, LeftSbSvg } from "./l-side-raw-components"
import Avatar from "@material-ui/core/Avatar"

import AvatarImg from "../../imgs/avatar-img.jpg"

import LeftSidebarData from "./l-sidebar-data"

export default function LeftSidebar() {
	return (
		<LeftSideWrap>
			<LeftSbItemWrap>
				<Avatar src={AvatarImg} />
				<div className="text-part">
					<h3>Abbes Trov</h3>
				</div>
			</LeftSbItemWrap>

			{LeftSidebarData.map((item) => (
				<LeftSbItemWrap key={item.id}>
					{item.moreItem ? (
            <LeftSbSvg>
              {item.icon}
            </LeftSbSvg>
					) : (
						<LeftSbImg src={item.icon}  />
					)}
					<div className="text-part">
						<h3>{item.label}</h3>
						{item.subLabel && <p><span>🔵 </span>{item.subLabel}</p>}
					</div>
				</LeftSbItemWrap>
			))}
		</LeftSideWrap>
	)
}
