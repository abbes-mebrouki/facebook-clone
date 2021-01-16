import React, {useState, useEffect} from "react"
import { MeAvatar, MeIconButton, NavIconButton } from "../raw-components"
import {
	DialogContentWrap,
	NewPostDialogHeaderWrap,
	NewPostDialogInputWrap,
	NewPostDialogFooterWrap,
	FeedButton,
} from "./feed-raw-components"
import Icons from "../../icons"

import bgsImg from '../../imgs/new-post-dialog-fonts-img.png'

import AvatarPic from "../../imgs/avatar-img.jpg"
import {useDispatch, useSelector} from 'react-redux'
import {setPostInMindAction, newPostAction} from '../../redux/actions/posts-actions'
import {getPostInMind} from '../../redux/selectors/posts_selectors'



export default function NewPostDialogContent({handleClose}) {

	const dispatch = useDispatch()
	
	const {
		CloseIcon,
		FeedPhotoIcon,
		FeedFeelingIcon,
		FeedLiveIcon,
		DownIcon,
    LockIcon,
    LocationIcon,
    PersonIcon,
    MoreIcon,
		SmileyFaceIcon,
		
	} = Icons

	const postInMind = useSelector((state) => getPostInMind(state))
	
	const [postToPublish, setPostToPublish] = useState(postInMind)
	const {postContent} = postToPublish
	
	useEffect(() => {
		setPostToPublish(postInMind)
	}, [postInMind])

  const handlePostTxtChange = (e) => {
		setPostToPublish(
			{
				...postToPublish, 
				postContent: e.target.value
			}
			);
  }


	const closeDialog = () => {
		dispatch(setPostInMindAction(postToPublish))
		handleClose()
	}

	function publishPost(){
		dispatch(newPostAction(postToPublish))
		dispatch(setPostInMindAction({...postToPublish, postContent: ''}))
		handleClose()
	}

	return (
		<DialogContentWrap>
			<NewPostDialogHeaderWrap>
				<div className="title-and-close-btn">
					<h4>Create Post</h4>
					<MeIconButton onClick={closeDialog}>
						<CloseIcon />
					</MeIconButton>
				</div>
				<div className="user">
					<MeAvatar FeedAvatar src={AvatarPic} />
					<div className="username-and-pup-type">
						<h4>Abbes Trov</h4>
						<FeedButton
							dialogBtn
							startIcon={<LockIcon />}
							endIcon={<DownIcon />}
						>
							Only me
						</FeedButton>
					</div>
				</div>
			</NewPostDialogHeaderWrap>

			<NewPostDialogInputWrap>
				<textarea
					value={postToPublish}
					onChange={handlePostTxtChange}
					type="textarea"
					placeholder="What's on your mind, Abbes?"
					rows="3"
					value={postContent}
				/>
				<div className="post-bg-and-emojis">
					<div className="bgs-btn">
						<img src={bgsImg} alt="bbackgrounds button image" />
					</div>
					<SmileyFaceIcon />
				</div>
			</NewPostDialogInputWrap>

			<NewPostDialogFooterWrap>
				<div className="add-to-post-wrap">
					<h4>Add to Your Post</h4>
					<div className="icons-wrap">
						<MeIconButton defaultBtn iconColor="green">
							<FeedPhotoIcon />
						</MeIconButton>
						<MeIconButton defaultBtn iconColor="blue">
							<PersonIcon />
						</MeIconButton>
						<MeIconButton defaultBtn iconColor="yellow">
							<FeedFeelingIcon />
						</MeIconButton>
						<MeIconButton defaultBtn iconColor="orange">
							<LocationIcon />
						</MeIconButton>
						<MeIconButton defaultBtn iconColor="red">
							<FeedLiveIcon />
						</MeIconButton>
						<MeIconButton defaultBtn iconColor="dark">
							<MoreIcon />
						</MeIconButton>
					</div>
				</div>
				<FeedButton
					disable={postToPublish.postContent ? undefined : true}
					clearBtn
					onClick={publishPost}
				>
					Post
				</FeedButton>
			</NewPostDialogFooterWrap>
		</DialogContentWrap>
	)
}
