import React, {useState} from "react"
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

export default function NewPostDialogContent(props) {

  console.log('content props: ' , props);
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
    SmileyFaceIcon
	} = Icons


  const [postTxt, setPostTxt] = useState('')

  const handlePostTxtChange = (e) => {
    setPostTxt(e.target.value);
  }

	return (
		<DialogContentWrap>
			<NewPostDialogHeaderWrap>
				<div className="title-and-close-btn">
					<h4>Create Post</h4>
					<MeIconButton>
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
          value={postTxt}
          onChange={handlePostTxtChange}
					type="textarea"
					placeholder="What's on your mind, Abbes?"
					rows="3"
				/>
        <div className="post-bg-and-emojis">
          <div className="bgs-btn">
            <img src={bgsImg} alt="bbackgrounds button image"/>
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
				<FeedButton disable={postTxt.length != 0 ? undefined : true} clearBtn>
					Post
				</FeedButton>
			</NewPostDialogFooterWrap>
		</DialogContentWrap>
	)
}
