import React from "react"
import { StoriesWrap, StoryWrap } from "./feed-raw-components"
import { MeAvatar } from "../raw-components"

import { StoriesData } from "./feed-section-data"

export default function Storeis() {
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
