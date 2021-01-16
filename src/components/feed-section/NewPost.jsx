import React, { useState } from "react"
import {
	FeedAvatarInputWrap,
	FeedButton,
	FeedOptionButtons,
	NewPostWrap,
} from "./feed-raw-components"
import { InputWrap, Input, MeAvatar, MeBadge } from "../raw-components"
import ProfiePic from "../../imgs/avatar-img.jpg"
import Icons from "../../icons"
import NewPostDialog from "./NewPostDialog"
import NewPostDialogContent from "./NewPostDialogContent"

import { useSelector } from "react-redux"
import { getPostInMind } from "../../redux/selectors/posts_selectors"

export default function NewPost() {
	const { FeedLiveIcon, FeedPhotoIcon, FeedFeelingIcon } = Icons

	const [open, setOpen] = useState(false)

	const openCreateNewPostDialog = () => {
		setOpen(true)
	}

	const closeCreateNewPostDialog = () => {
		setOpen(false)
	}

	const postInMind = useSelector((state) => getPostInMind(state))
	const { postContent } = postInMind

	return (
		<NewPostWrap>
			<FeedAvatarInputWrap>
				<MeBadge>
					<MeAvatar FeedNav src={ProfiePic} />
				</MeBadge>
				<InputWrap feedInput onClick={openCreateNewPostDialog}>
					<Input
						disabled
						feedInput
						placeholder={`What's in your mind, Abbes?`}
						value={postContent}
					/>
				</InputWrap>
				<NewPostDialog isOpen={open} handleClose={closeCreateNewPostDialog}>
					<NewPostDialogContent
						handleClose={closeCreateNewPostDialog}
						
					/>
				</NewPostDialog>
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
