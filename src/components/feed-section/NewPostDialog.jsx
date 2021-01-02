import React, { Children } from 'react'

import DialogContent from '@material-ui/core/DialogContent'
import {MeDialog} from './feed-raw-components'

export default function NewPostDialog(props) {
	const {isOpen, handleClose, children} = props
	
  console.log(props)
  return (
    <MeDialog
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogContent>
					{children }
				</DialogContent>
		</MeDialog>
  )
}
