import React from 'react'
import {
  CircularProgress 
} from '@mui/material'

const IconLoader = ({ loading=false }) => {
  return(
    loading ? 
      <CircularProgress
        disableShrink
        size={20}
        sx={sx.root}
      /> : null
  )
}

export default IconLoader

const sx = {
  root: {
    color: 'common.white',
  }
}