import React from "react"
import { StoriesWrap, StoryWrap } from "./feed-raw-components"
import { MeAvatar } from "../raw-components"

import { StoriesData } from "./feed-section-data"

import {isMobilelOnly} from 'react-device-detect'

export default function Storeis() {

	// const stories = isMobilelOnly ? StoriesData.slice(0, 3) : StoriesData
	
	

	return (
		<StoriesWrap>
			{StoriesData.map(({id, ownerName, avatarPic, img}) => (
				<StoryWrap key={id} style={{
          backgroundImage: `url(${img})`,
        }}>
          <MeAvatar storyAvatar src={avatarPic} />
          <h4>{ownerName}</h4>
				</StoryWrap>
			))}
		</StoriesWrap>
	)
}
