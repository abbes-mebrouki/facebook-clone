import styled, { css } from "styled-components"

import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { Badge } from "@material-ui/core"


// -------------------- LEFT NAV BAR ------------------------------

export const InputWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;
	background-color: ${({ theme }) => theme.commonColor};
	margin-left: 8px;
	border-radius: 30px;
	width: 240px;
	height: 40px;
`

export const Input = styled.input`
	margin-left: 4px;
	background-color: inherit;
	flex: 1;
	border-radius: 30px;
	/* width: 240px; */
	height: 100%;
	border: none;
	padding-top: 1px;
	color: ${({ theme }) => theme.primaryText};
	outline-width: 0;

	caret- ::placeholder {
		/* font-weight: 400; */

		font-size: 1.13em;
		color: rgb(166, 169, 174);
	}
`

// -------------------- MIDDLE NAV BAR ------------------------------

export const MiddleNavButton = styled.div`
	height: 55px;
	width: 112px;
	display: grid;
	place-items: center;
  cursor: pointer;
  svg {
		font-size: 25px;
    color: ${({ theme }) => theme.secondaryText};
	}

	${(props) =>
		props.active &&
		css`
			border-bottom: 3px solid ${({ theme }) => theme.primaryBlueColor};
			svg {
        font-size: 25px;
				color: ${({ theme }) => theme.primaryBlueColor};
			}
		`}

	&:hover {
		${(props) =>
			props.active
				? css``
				: css`
						background-color: ${({ theme }) => theme.commonColor};
						border-radius: 12px;
            border: 4px solid ${({theme}) => theme.lightDark};
				`}
	}
`




// ------------------- Right NavBar -------------------------


export const NavBadge = styled(Badge)`
	
`


export const NavIconButton = styled(IconButton)`
	&&{
		background-color: ${({theme}) => theme.commonColor};
		/* width: 40px;
		height: 40px; */
		margin-left: 8px;

		svg{
			color: ${({ theme }) => theme.lighterText};
			/* color: #fff; */
			font-size: 17px;
		}


		&:hover{
			background-color: ${({theme}) => theme.iconBtnBgHover};
		}
	}
`

export const NavProfileButton = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 38px;
	border-radius: 30px;
	padding: 3px 10px 3px 4px; 
	margin-right: 8px;

	h4{
		/* font-weight: 400; */
		font-size: .85em;
		margin-left: 8px;
	}

	&:hover{
		background-color: ${({theme}) => theme.commonColor};
		cursor: pointer;
	}
`

export const NavAvatar = styled(Avatar)`
	&&{
		height: 28px;
		width: 28px;
	}

`

