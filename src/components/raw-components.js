import styled, { css } from "styled-components"

// -------------------- LEFT NAV BAR ------------------------------

export const InputWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
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
						border-radius: 9px;
            border: 4px solid ${({theme}) => theme.lightDark};
				`}
	}
`
