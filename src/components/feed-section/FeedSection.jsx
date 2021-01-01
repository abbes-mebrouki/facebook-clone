import React from "react"

import { MainWrap } from "../layout-components"
import {
	PostWrap,
	PostHeader,
	PostHeaderTitleWrap,
	PostTextContent,
	PostMediaContent,
	PostFooter,
	SocialCountersWrap,
	CommentsAndSharesCounter,
	SocialButtonsWrap,
	AvatarsGroup,
	FeedButton,
} from "./feed-raw-components"

// import AvatarGroup from '@material-ui/lab/AvatarGroup';

import { InputWrap, Input, MeAvatar,  } from "../raw-components"

import ProfiePic from "../../imgs/avatar-img.jpg"

import Icons from "../../icons"
import NewPost from "./NewPost"
import { Comment } from "@material-ui/icons"
import FeedPost from "./FeedPost"
import FeedData from './feed-section-data'
import CreateRoomCard from "./CreateRoomCard"
import Storeis from "./Storeis"

export default function FeedSection() {
	const {
		MoreIcon,
		GlobeIcon,
		SoLikeIcon,
		SoLoveIcon,
		SoWowIcon,
		SoAngryIcon,
		LikeIcon, 
		CommentIcon,
		ShareIcon
	} = Icons

	return (
		<MainWrap>
			<Storeis />
			<NewPost />
			<CreateRoomCard />
			
			{FeedData.map(item => (
				<FeedPost key={item.id} postData={item}/>
			))}
			
		</MainWrap>
	)
}
