import React from 'react'
import {
  FieldText
} from '../../index'

const FieldParagraph = ({ value, ...props }) => {
	return (
		<FieldText value={value} />
	)
}

export default FieldParagraph

const sx = {
	root: {},
}
