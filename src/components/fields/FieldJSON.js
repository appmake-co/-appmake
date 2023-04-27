import React from 'react'
import {
	FieldText
} from '../../index'

const FieldJSON = ({ value, ...props }) => {

	return (
		<FieldText value={JSON.stringify(value, null, 2)} />
	)
}

export default FieldJSON
