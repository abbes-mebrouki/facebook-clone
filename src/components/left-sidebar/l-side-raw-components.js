import styled, { css } from "styled-components"

export const LeftSbItemWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 8px;
	border-radius: 8px;
	background-color: inherit;
	cursor: pointer;
	width: 100%;
	height: 44px;

	.MuiAvatar-root {
		width: 28px;
		height: 28px;
	}

	.text-part {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin-left: 10px;
    height: 44px;

		h3 {
			font-size: 0.85em;
			letter-spacing: 0.25px;
			color: ${({ theme }) => theme.primaryText};
      /* margin-top: 1px; */
		}

		p {
			color: ${({ theme }) => theme.primaryBlueColor};
			font-size: 0.76em;
			margin-top: 4px;

      span{
        font-size: 7px;
        margin-bottom: 3px;
        
      }
		}
	}

	&:hover {
		background-color: ${({ theme }) => theme.sideNavHoverBg};
	}
`

export const LeftSbImg = styled.img`
	width: 28px;
	max-width: 28px;
`

export const LeftSbSvg = styled.div`
  display: grid;
  place-items: center;
	background-color: ${({ theme }) => theme.commonColor};
	border-radius: 50px;
	width: 28px;
	height: 28px;
	svg {
		font-size: 22px;
		color: ${({ theme }) => theme.primaryText};
	}
`
