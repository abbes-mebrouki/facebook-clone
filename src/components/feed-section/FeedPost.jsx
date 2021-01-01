import React from "react"
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
import { MeAvatar } from "../raw-components"
import ProfiePic from "../../imgs/avatar-img.jpg"
import Icons from "../../icons"

export default function FeedPost({postData}) {
	const {
		MoreIcon,
		GlobeIcon,
		SoLikeIcon,
		SoLoveIcon,
		SoWowIcon,
		SoAngryIcon,
		LikeIcon,
		CommentIcon,
		ShareIcon,
	} = Icons

	const {
		id,
		username,
		pubDate,
		pubType,
    userProfilePic,
    rtl,
		textContent,
		hasMedia,
		mediaContent,
		impretions,
		comments,
		shares,
	} = postData
	return (
		<PostWrap>
			<PostHeader>
				<MeAvatar src={userProfilePic} FeedNav />
				<PostHeaderTitleWrap>
					<h4>{username}</h4>
					<div className="time-publish-type">
						<p>{pubDate} · </p>
						<GlobeIcon />
					</div>
				</PostHeaderTitleWrap>
				<MoreIcon className="post-header-moreicon" />
			</PostHeader>

			{/* ------------------------------ */}

			<PostTextContent rtl={rtl}>
				<p>
				{textContent}
				</p>
			</PostTextContent>
			<PostMediaContent hasMedia={hasMedia}>
				<img src={mediaContent} />
			</PostMediaContent>
			<PostFooter>
				<SocialCountersWrap>
					<AvatarsGroup max={3}>
						<MeAvatar src={SoLikeIcon} socialAvatar />
						<MeAvatar src={SoLoveIcon} socialAvatar />
						<MeAvatar src={SoWowIcon} socialAvatar />
						<MeAvatar src={SoAngryIcon} socialAvatar />
					</AvatarsGroup>
					<p className="social-counter">{impretions}</p>
					<CommentsAndSharesCounter>
						<p>{comments} Comments  · </p>
						<p>{shares}  Shares </p>
					</CommentsAndSharesCounter>
				</SocialCountersWrap>
				<SocialButtonsWrap>
					<FeedButton socialBtn startIcon={<LikeIcon />}>
						Like
					</FeedButton>
					<FeedButton socialBtn smallSize startIcon={<CommentIcon />}>
						Comment
					</FeedButton>
					<FeedButton socialBtn startIcon={<ShareIcon />}>
						Share
					</FeedButton>
				</SocialButtonsWrap>
			</PostFooter>
		</PostWrap>
	)
}
