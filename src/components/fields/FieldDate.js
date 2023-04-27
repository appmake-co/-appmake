import React from 'react'
import { FieldText } from '../../index'
import moment from 'moment'

const FieldDate = ({ value, ...props }) => {

  let formattedValue = moment(value).format('MM/DD/YYYY')
	return (
		<FieldText value={formattedValue} />
	)
}

export default FieldDate

const sx = {
	root: {},
}
