import React from 'react'
import { Box } from '@mui/material'
import {
  FieldArray,
	FieldBoolean,
	FieldDate,
	FieldImage,
	FieldJSON,
	FieldLink,
	FieldText,
  FieldParagraph,
	FieldRating,
  FieldVideo
} from '../../index'

const Field = ({    
  variant,
  value,  
  ...params
}) => {
  
	return (
		<Box sx={ sx.root  }>
			{variant === 'boolean' && (
				<FieldBoolean value={value} />
			)}

			{variant === 'date' && (
				<FieldDate value={value} />
			)}

			{variant === 'datetime' && (
				<FieldDate value={value} />
			)}

			{variant === 'image' && (
				<FieldImage value={value?.url} />
			)}

      {variant === 'video' && (
				<FieldVideo value={value} />
			)}

			{variant === 'json' && (
				<FieldJSON value={value} />
			)}

			{variant === 'link' && (
				<FieldLink value={value} />
			)}

			{variant === 'rating' && (
				<FieldRating value={value} />
			)}

			{variant === 'paragraph' && (
				<FieldParagraph value={value} />
			)}

      {variant === 'text' && (
        <FieldText value={value} variant="body1" />
      )}

      {variant === 'tags' && (
        <FieldArray value={value} />
      )}

		</Box>
	)
}

export default Field

const sx = {
	root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
}
