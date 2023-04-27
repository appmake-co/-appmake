import React from 'react'
import Rating from '@mui/material/Rating'

const FieldRating = ({ value, ...props }) => {

	return (
		<Rating
			readOnly
			sx={ sx.rating }
			value={value}
		/>
	)
}

export default FieldRating

const sx = {
	rating: {
		color: 'primary.main'
	},
}
