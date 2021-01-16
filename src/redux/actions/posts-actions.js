import {
	NEW_POST,
	LOAD_POSTS,
	LOADING_POSTS,
	LOADING_POSTS_DONE,
	SET_POST_IN_MIND,
} from "../constants"


export const newPostAction = (post) => ({
  type: NEW_POST,
  payload: post
})

export const loadPostsAction = (posts) => ({
  type: LOAD_POSTS,
  payload: posts
})


export const loadingPostsAtion = () => ({
  type: LOADING_POSTS
})


export const loadingPostsDoneAtion = () => ({
  type: LOADING_POSTS_DONE
})


export const setPostInMindAction = (postInMind) => ({
  type: SET_POST_IN_MIND,
  payload: postInMind
})



// export const  = () => ({})