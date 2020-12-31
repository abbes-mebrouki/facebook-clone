import styled, { css } from "styled-components"
import { ScreenSizes } from "../../styles/global-styles"
import Button from "@material-ui/core/Button"
import Badge from "@material-ui/core/Badge"
import { withStyles } from "@material-ui/core/styles"

const { xs, sm, md, lg, xl } = ScreenSizes

export const NewPostWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px 16px 10px;
	background-color: ${({ theme }) => theme.lightDark};
	border-radius: 9px;
	width: 500px;
	height: 114px;

	@media (min-width: ${xl}) {
		width: 680px;
	}
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

const getFeedButtonIconColor = (iconColor, theme) => {
	switch (iconColor) {
		case "red":
			return theme.redColor
		case "green":
			return theme.greenColor
		case "yellow":
			return theme.yellowColor
		default:
			return theme.primaryText
	}
}

export const FeedButton = styled(Button)`
	&& {
		color: ${({ theme }) => theme.primaryText};
		background-color: inherit;
		flex: 1;
		font-size: 0.83em;
		color: ${({ theme }) => theme.secondaryText};

		svg {
			font-size: 23px;
			color: ${({ iconColor, theme }) =>
				getFeedButtonIconColor(iconColor, theme)};
		}

		&:hover {
			background-color: ${({ theme }) => theme.commonColor};
		}
	}
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
	${({on}) =>
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
