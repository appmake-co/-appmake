import React from 'react'
import { Typography } from '@mui/material'

const FieldText = ({ value, variant="body1", ...props }) => {
	return (
    <Typography variant={ variant } sx={ sx.text  }>
      {value}
    </Typography>
  )
}

export default FieldText

const sx = {
	root: {},
  text : {
    whiteSpace: 'pre-wrap',
  }
}
