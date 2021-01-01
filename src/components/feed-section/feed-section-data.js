import Icons from "../../icons"

import picOne from "../../imgs/faces/one.jpg"
import picTwo from "../../imgs/faces/two.jpg"
import picThree from "../../imgs/faces/three.jpg"
import picFour from "../../imgs/faces/four.jpg"
import picFive from "../../imgs/faces/five.jpg"
import picSix from "../../imgs/faces/six.jpg"
import picSeven from "../../imgs/faces/seven.jpg"

const { GlobeIcon } = Icons

const FeedData = [
	{
		id: 1,
		username: "Ahmed abbes",
		pubDate: "1h",
		pubType: GlobeIcon,
		userProfilePic: picOne,
		textContent: "Conetn one for this thin g here",
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
		textContent: "this content was publish by khaled ham for testing.",
		hasMedia: true,
		mediaContent:
			"https://images.unsplash.com/photo-1609364111454-5f6cd52170a3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
		impretions: 23,
		comments: 34,
		shares: 24,
	},
	{
		id: 3,
		username: "Taher Rakda",
		pubDate: "18h",
		pubType: GlobeIcon,
		userProfilePic: picTwo,
		rtl: true,
		textContent: "هذا المحتوى تمت كتابته باللغة العربية بهدف التجريب",
		hasMedia: true,
		mediaContent:
			"https://images.unsplash.com/photo-1609377567545-2999c0d31315?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
		impretions: 96,
		comments: 123,
		shares: 64,
	},
	{
		id: 4,
		username: "Hamza Meb",
		pubDate: "23h",
		pubType: GlobeIcon,
		userProfilePic: picThree,
		textContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim eligendi amet necessitatibus, aspernatur nam vel fuga? Accusamus ea repudiandae mollitia odio ullam tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim eligendi amet necessitatibus, aspernatur nam vel fuga? Accusamus ea repudiandae mollitia odio ullam tenetur.",
		hasMedia: true,
		mediaContent:
			"https://images.unsplash.com/photo-1579054227603-1008350a23f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=829&q=80",
		impretions: 29,
		comments: 11,
		shares: 3,
	},
	{
		id: 5,
		username: "Farok Allaoua",
		pubDate: "3d",
		pubType: GlobeIcon,
		userProfilePic: picSeven,
		textContent: `	Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim
    eligendi amet necessitatibus, aspernatur nam vel fuga? Accusamus ea
    repudiandae mollitia odio ullam tenetur deserunt dolorem, quo
    recusandae veniam sequi.`,
		hasMedia: false,
		mediaContent: "",
		impretions: 42,
		comments: 53,
		shares: 15,
	},
]


export const StoriesData = [
	{
		id: 1,
		avatarPic: picFive,
		ownerName: 'Naas Mohamed',
		title: 'Do Nothing now',
		img: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
	},
	{
		id: 2,
		avatarPic: picOne,
		ownerName: 'The Net Ninja',
		title: 'Advanced React ',
		img: 'https://www.york.ac.uk/media/news-and-events/pressreleases/2020/Random%20feat.jpg'
	},
	{
		id: 3,
		avatarPic: picSix,
		ownerName: 'Ahmed Sba',
		title: 'Teaching kids',
		img: 'https://i.pinimg.com/originals/c3/12/16/c31216424b811a9770b5b7dacb06fa3e.jpg'
	},
	{
		id: 4,
		avatarPic: picTwo,
		ownerName: 'Hamza Meb',
		title: 'I need A car?',
		img: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg'
	},
	{
		id: 5,
		avatarPic: picThree,
		ownerName: 'Some one',
		title: 'ANother Title',
		img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg'
	},

]


export default FeedData