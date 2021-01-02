import styled, { css } from "styled-components"
import { ScreenSizes } from "../../styles/global-styles"
import Button from "@material-ui/core/Button"
import Badge from "@material-ui/core/Badge"
import { withStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"

const { xs, sm, md, lg, xl } = ScreenSizes

export const NewPostWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px 16px 10px;
	background-color: ${({ theme }) => theme.lightDark};
	border-radius: 9px;
	width: 500px;
	height: 114px;
	box-shadow: ${({ theme }) => theme.containerShadow};

	@media (min-width: ${xl}) {
		width: 680px;
	}
`

export const StoriesWrap = styled.div`
	${({ theme }) => css`
		width: 598px;
		height: 230px;
		padding: 8px 0 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	`}
`

export const StoryWrap = styled.div`
	${({ theme }) => css`
		width: 112px;
		min-width: 112px;
		height: 198px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px 16px;
		background-color: ${theme.lightDark};
		margin: 4px;
		background-size: cover;
		box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.2);
		background-repeat: no-repeat;

		h4 {
			font-size: 0.79em;
			letter-spacing: 0.5px;
		}
	`}
`

export const CreateRoomWrap = styled.div`
	${({ theme }) => css`
		width: 500px;
		height: 72px;
		padding: 8px 16px;
		border-radius: 8px;
		background-color: ${theme.lightDark};
		margin-top: 16px;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.room-avatars-wrap {
			display: grid;
			grid-template-columns: auto;
			grid-auto-flow: column;
			grid-column-gap: 16px;
		}
	`}
`

export const FeedAvatarInputWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`

export const FeedOptionButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 12px;
	padding-top: 8px;
	border-top: 1px solid ${({ theme }) => theme.commonColor};
`

export const getFeedButtonIconColor = (iconColor, theme) => {
	switch (iconColor) {
		case "red":
			return theme.redColor
		case "green":
			return theme.greenColor
		case "yellow":
			return theme.yellowColor
		case "orange":
			return theme.orangeColor
		case "blue":
			return theme.blueColor
		case "dark":
			return theme.darkColor
		default:
			return theme.primaryText
	}
}

export const FeedButton = styled(Button)`
	${({
		roundedBtn,
		theme,
		feedBtn,
		socialBtn,
		iconColor,
		smallSize,
		dialogBtn,
		clearBtn,
		disable,
	}) => css`
		color: ${theme.primaryText};
		background-color: inherit;
		flex: 1;
		font-size: 0.83em;
		color: ${theme.secondaryText};

		${clearBtn &&
		css`
			background-color: ${theme.primaryBlueColor};
			width: 100%;
			max-height: 36px;
			margin-top: 16px;
			color: ${theme.primaryText};

			${disable &&
			css`
				background-color: ${theme.disabledBgColor};
				color: ${theme.disabledTextColor};
				&:hover {
					/* background-color: red; */

					cursor: not-allowed;
				}
			`}

			.MuiButton-label {
				font-size: 14px;
				letter-spacing: -0.5px;
			}
		`}

		${dialogBtn &&
		css`
			background-color: ${theme.commonColor};
			width: 93px;
			height: 22px;
			padding: 4px 8px;
			color: ${theme.primaryText};

			.MuiButton-iconSizeMedium > *:first-child {
				font-size: 12px;
			}

			.MuiButton-label {
				font-size: 12px;
				white-space: nowrap;
				width: fit-content;
			}
		`}

		${roundedBtn &&
		css`
			height: 40px;
			border-radius: 50px;
			max-width: 142px;
			border: 2px solid ${theme.deemColor};
			padding: 12px;
			margin-right: 16px;
			color: ${theme.blueLink};

			.MuiButton-iconSizeMedium > *:first-child {
				color: #806cd8;
				font-size: 24px;
			}
		`}

		.MuiButton-iconSizeMedium > *:first-child {
			${socialBtn &&
			css`
				font-size: ${smallSize ? "17px" : "21px"};
			`}

			${feedBtn &&
			css`
				font-size: 23px;
				color: ${getFeedButtonIconColor(iconColor, theme)};
			`}
		}

		&:hover {
			background-color: ${({ theme }) => theme.commonColor};
		}
	`}
`

export const JSSChatBadge = withStyles(() => ({
	badge: {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px #000`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			content: '""',
		},
	},
}))(Badge)

export const ChatBadge = styled(Badge)`
	${({ on }) =>
		on &&
		css`
			&& {
				.MuiBadge-badge {
					background-color: rgb(50, 162, 77);
					color: rgb(50, 162, 77);
					box-shadow: 0 0 0 2px #000;
					::after {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border-radius: 50%;
						content: '"';
					}
				}
			}
		`}
`

export const PostWrap = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 500px;
		background-color: ${theme.lightDark};
		margin-top: 16px;
		border-radius: 8px;
		box-shadow: ${theme.containerShadow};
	`}
`

export const PostHeader = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px 16px 0;
		margin-bottom: 12;

		width: 100%;

		.post-header-moreicon {
			font-size: 20px;
			margin: 5px -8px 0 0;
			color: ${theme.secondaryText};
			border-radius: 50px;

			&:hover {
				background-color: ${theme.commonColor};
				cursor: pointer;
			}
		}
	`}
`

export const PostHeaderTitleWrap = styled.div`
	${({ theme }) => css`
		flex: 1;

		h4 {
			font-size: 0.9em;
			color: ${theme.primaryText};
			margin: 0 0 2px 10px;
		}

		.time-publish-type {
			margin-left: 10px;
			display: flex;
			align-items: center;
			color: ${theme.secondaryText};

			p {
				font-size: 0.8em;
			}

			svg {
				font-size: 13px;
				margin-left: 2px;
			}
		}
	`}
`

export const PostTextContent = styled.div`
	${({ theme, rtl }) => css`
		padding: 4px 16px 16px;
		width: 100%;
		p {
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			color: ${theme.primaryText};
			letter-spacing: 0.3pt;
			line-height: 19px;
			text-align: ${rtl && "right"};
		}
	`}
`

export const PostMediaContent = styled.div`
	${({ hasMedia }) =>
		hasMedia
			? css`
					width: 100%;
					max-height: 400px;
					overflow: hidden;
					background-color: #444;
					img {
						width: 100%;
						max-height: 100%;
						object-fit: cover;
					}
			  `
			: css`
					display: none;
			  `}
`

export const PostFooter = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 89px;
		padding: 0 16px;
	`}
`

export const SocialCountersWrap = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		border-bottom: 1px solid ${theme.commonColor};
		width: 100%;
		flex: 1;

		.social-counter {
			margin-left: 8px;
			font-size: 14px;
			color: ${theme.secondaryText};

			flex: 1;
		}
	`}
`

export const AvatarsGroup = styled.div`
	${({ theme, max }) => css`
		display: grid;
		grid-template-columns: repeat(${max}, 1fr);
		grid-auto-flow: column;
		align-items: center;
		justify-content: flex-start;

		.MuiAvatar-root {
			margin-right: -4px;

			box-shadow: -1px 0 1px rgba(0, 0, 0, 0.2);
			img {
			}
		}
	`}
`

export const CommentsAndSharesCounter = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: flex-start;

		p {
			font-size: 14px;
			color: ${theme.secondaryText};
			margin-left: 2px;

			&:hover {
				cursor: pointer;
				text-decoration: underline;
			}
		}
	`}
`

export const SocialButtonsWrap = styled.div`
	${() => css`
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		width: 100%;
		border-radius: 0 0 8px 8px;
		/* padding: 0 16px; */
	`}
`

// ------------------------------- Create New Post Dialog --------------------------

export const MeDialog = styled(Dialog)`
	${({ theme }) => css`
		.MuiDialog-paper {
			
			border-radius: 12px;
			background-color: ${theme.lightDark};
		}
		.MuiDialogContent-root {
			padding: 0;
		}
	`}
`

export const DialogContentWrap = styled.div`
	${({ theme }) => css`
		background-color: ${theme.lightDark};
		width: 500px;
		height: 480px;
		min-height: 430px;
		max-height: 80vh;
		max-height: 400px;
		/* overflow-y: scroll; */

		border-radius: 12px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: ${theme.primaryText};
	`}
`

export const NewPostDialogHeaderWrap = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 16px;
		width: 100%;
		height: 132px;

		.title-and-close-btn {
			display: grid;
			grid-template-columns: 1fr 36px;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid ${theme.darkerBorderColor};
			width: 100%;
			height: 50%;

			h4 {
				justify-self: center;
				margin-left: 36px;
				font-size: 20px;
			}
		}

		.user {
			padding: 16px 0;
			height: 50%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;

			.username-and-pup-type {
				/* border: 1px solid #444; */
				margin-left: 12px;

				h4 {
					font-size: 14px;
					margin-bottom: 4px;
				}
			}
		}
	`}
`

export const NewPostDialogInputWrap = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		min-height: 155px;

		padding: 0 16px;
		flex: 1;

		textarea {
			background-color: ${theme.lightDark};
			width: 100%;
			outline-width: 0;
			resize: none;
			/* height: 100%; */
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
			color: ${theme.primaryText};
			border: none;
			font-size: 24px;
			::placeholder {
				color: ${theme.secondaryText2};
				
			}
		}

		.post-bg-and-emojis {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			width: 100%;
			height: 38px;

			.bgs-btn {
				&:hover {
					cursor: pointer;
				}
				img {
					max-width: 38px;
					max-height: 38px;
				}
			}

			svg {
				font-size: 24px;
				color: ${theme.darkBorderColor};

				&:hover {
					cursor: pointer;
					color: ${theme.secondaryText2};
				}
			}
		}
	`}
`

export const NewPostDialogFooterWrap = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 16px;
		width: 100%;
		height: 142px;

		.add-to-post-wrap {
			width: 100%;
			height: 58px;
			border: 1px solid ${theme.darkBorderColor};
			border-radius: 8px;
			/* margin: 0 16px; */
			padding: 0 16px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			h4 {
				font-size: 14px;
			}
			.icons-wrap {
				display: grid;
				grid-template-columns: repeat(6, 36px);
				grid-column-gap: 4px;
			}
		}
	`}
`
