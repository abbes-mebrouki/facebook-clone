import React, { useState } from 'react'

import DialogContent from '@material-ui/core/DialogContent'
import {MeDialog} from './feed-raw-components'
import {isMobileOnly} from 'react-device-detect'

export default function NewPostDialog(props) {
	const {isOpen, handleClose, children} = props
	console.log('is mobile: ', isMobileOnly)
	
  // console.log(props)
  return (
    <MeDialog
				// fullScreen ={isMobileOnly}
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
