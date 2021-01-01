import React from "react"

import { MainWrap } from "../layout-components"
import {
	FeedAvatarInputWrap,
	FeedButton,
	FeedOptionButtons,
	NewPostWrap,
} from "./feed-raw-components"
import { InputWrap, Input, MeAvatar, MeBadge } from "../raw-components"

import ProfiePic from "../../imgs/avatar-img.jpg"

import Icons from "../../icons"

export default function NewPost() {
	const { FeedLiveIcon, FeedPhotoIcon, FeedFeelingIcon } = Icons

	return (
			<NewPostWrap>
				<FeedAvatarInputWrap>
					<MeBadge>
						<MeAvatar FeedNav src={ProfiePic} />
					</MeBadge>
					<InputWrap feedInput>
						<Input feedInput placeholder={`What's in your mind, Abbes?`} />
					</InputWrap>
				</FeedAvatarInputWrap>
				<FeedOptionButtons>
					<FeedButton
						feedBtn
						iconColor="red"
						variant="flat"
						startIcon={<FeedLiveIcon />}
					>
						Live Video
					</FeedButton>
					<FeedButton
						feedBtn
						iconColor="green"
						variant="flat"
						startIcon={<FeedPhotoIcon />}
					>
						Video/Photo
					</FeedButton>
					<FeedButton
						feedBtn
						iconColor="yellow"
						variant="flat"
						startIcon={<FeedFeelingIcon />}
					>
						Feeling/Avtivity
					</FeedButton>
				</FeedOptionButtons>
			</NewPostWrap>
	)
}
