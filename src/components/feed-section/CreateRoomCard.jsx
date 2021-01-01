import React from "react"
import { CreateRoomWrap, FeedButton } from "./feed-raw-components"
import { MeAvatar, MeBadge } from "../raw-components"
import Icons from "../../icons"

import picOne from "../../imgs/faces/four.jpg"
import picTwo from "../../imgs/faces/two.jpg"
import picSeven from "../../imgs/faces/seven.jpg"

export default function CreateRoomCard() {
	const { VideoCallIcon } = Icons

	return (
		<CreateRoomWrap>
			<FeedButton startIcon={<VideoCallIcon />} roundedBtn>
				Create Room
			</FeedButton>
			<div className="room-avatars-wrap">
				<MeBadge
					forChat
					on
					variant="dot"
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
				>
					<MeAvatar src={picOne} />
				</MeBadge>
				<MeAvatar src={picTwo} />
				<MeBadge
					forChat
					on
					variant="dot"
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
				>
					<MeAvatar src={picSeven} />
				</MeBadge>
			</div>
		</CreateRoomWrap>
	)
}
