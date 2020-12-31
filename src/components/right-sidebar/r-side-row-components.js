import styled, { css } from "styled-components"

export const RightSidebarTopElement = styled.div`
	${({ theme, contacts }) => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 44px;
		border-bottom: 1px solid ${theme.commonColor};
		padding-bottom: 10px;
    /* margin-left: 8px; */
		/* border-radius: 9px; */

		h4 {
			color: ${theme.secondaryText};
			font-size: 0.94em;
			font-weight: 600;
		}

		svg {
			font-size: 18px;
			color: ${theme.secondaryText};
		}

		&:hover {
			/* background-color: ${theme.commonColor}; */
		}

		${contacts &&
		css`
			padding-top: 16px;
			border: none;

			.icons-wrap {
				svg {
					font-size: 20px;
					margin-left: 20px;
				}
			}
		`}
	`}
`

export const ChatListItem = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 44px;
		border-radius: 7px;
    padding: 0 8px;
    
    h4{
      
      color: ${theme.primaryText};
			font-size: 0.9em;
			font-weight: 500;
      margin-left: 10px;
    }

		&:hover {
			background-color: ${theme.commonColor};
      cursor: pointer;
		}
	`}
`
