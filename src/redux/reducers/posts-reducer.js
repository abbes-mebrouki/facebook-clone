import {
	NEW_POST,
	LOAD_POSTS,
	LOADING_POSTS,
	LOADING_POSTS_DONE,
	SET_POST_IN_MIND,
} from "../constants"

import picOne from "../../imgs/faces/one.jpg"
import picTwo from "../../imgs/faces/two.jpg"
import picThree from "../../imgs/faces/three.jpg"
import picFour from "../../imgs/faces/four.jpg"
import picFive from "../../imgs/faces/five.jpg"
import picSix from "../../imgs/faces/six.jpg"
import picSeven from "../../imgs/faces/seven.jpg"

import Icons from "../../icons"

const { GlobeIcon } = Icons

const initState = {
	isLoading: false,
	loadingDone: false,
	postInMind: {
		uid: null,
		id: 1,
		username: "Ahmed abbes",
		pubDate: "1h",
		pubType: GlobeIcon,
		userProfilePic: picOne,
		hasMedia: false,
		postContent: "",
		mediaContent: "",
		impretions: 33,
		comments: 12,
    shares: 9,
    publishDate: Date.now()
	},
	data: [
		{
			id: 1,
			username: "Ahmed abbes",
			pubDate: "1h",
			userProfilePic: picOne,
			postContent: "this is the first post content, the content of the first post",
			hasMedia: false,
			mediaContent: "",
			impretions: 33,
			comments: 12,
			shares: 9,
		},
		{
			id: 2,
			username: "Khaled Ham",
			pubDate: "9h",
			pubType: GlobeIcon,
			userProfilePic: picFive,
			postContent: "this content was publish by khaled ham for testing.",
			hasMedia: true,
			mediaContent:
				"https://images.unsplash.com/photo-1609364111454-5f6cd52170a3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
			impretions: 23,
			comments: 34,
			shares: 24,
		},
	// 	{
	// 		id: 3,
	// 		username: "Taher Rakda",
	// 		pubDate: "18h",
	// 		pubType: GlobeIcon,
	// 		userProfilePic: picTwo,
	// 		rtl: true,
	// 		postContent: "هذا المحتوى تمت كتابته باللغة العربية بهدف التجريب",
	// 		hasMedia: true,
	// 		mediaContent:
	// 			"https://images.unsplash.com/photo-1609377567545-2999c0d31315?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
	// 		impretions: 96,
	// 		comments: 123,
	// 		shares: 64,
	// 	},
	// 	{
	// 		id: 4,
	// 		username: "Hamza Meb",
	// 		pubDate: "23h",
	// 		pubType: GlobeIcon,
	// 		userProfilePic: picThree,
	// 		postContent:
	// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim eligendi amet necessitatibus, aspernatur nam vel fuga? Accusamus ea repudiandae mollitia odio ullam tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim eligendi amet necessitatibus, aspernatur nam vel fuga? Accusamus ea repudiandae mollitia odio ullam tenetur.",
	// 		hasMedia: true,
	// 		mediaContent:
	// 			"https://images.unsplash.com/photo-1579054227603-1008350a23f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=829&q=80",
	// 		impretions: 29,
	// 		comments: 11,
	// 		shares: 3,
	// 	},
	// 	{
	// 		id: 5,
	// 		username: "Farok Allaoua",
	// 		pubDate: "3d",
	// 		pubType: GlobeIcon,
	// 		userProfilePic: picSeven,
	// 		postContent: `	Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim
  //     eligendi amet necessitatibus, aspernatur nam vel fuga? Accusamus ea
  //     repudiandae mollitia odio ullam tenetur deserunt dolorem, quo
  //     recusandae veniam sequi.`,
	// 		hasMedia: false,
	// 		mediaContent: "",
	// 		impretions: 42,
	// 		comments: 53,
	// 		shares: 15,
	// 	},
	// 	{
	// 		id: 6,
	// 		username: "Nora Molo",
	// 		pubDate: "6th",
	// 		pubType: GlobeIcon,
	// 		userProfilePic: picThree,
	// 		postContent: `This post is comming from redux store.`,
	// 		hasMedia: false,
	// 		mediaContent: "",
	// 		impretions: 999,
	// 		comments: 893,
	// 		shares: 746,
	// 	},
  ],
  
}

const postsReducer = (state = initState, action) => {
	const { type, payload } = action
	switch (type) {
		case NEW_POST:
			return {
				...state,
				data: [...state.data, payload],
			}
		case LOAD_POSTS:
			return state
		case LOADING_POSTS:
			return state
		case LOADING_POSTS_DONE:
			return state
		case SET_POST_IN_MIND:
			return {
				...state,
				postInMind: payload,
			}
		default:
			return state
	}
}

export default postsReducer
