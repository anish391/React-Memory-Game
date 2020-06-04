import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {
	
	let style = {};
	
	if(props.showing){
		style.backGroundColor = props.backGroundColor;
	}
	
	return (
		<div className='card-container'>
			
		</div> 
	)
}

Card.propTypes = {
	showing: PropTypes.bool.isRequired,
	backGroundColor: PropTypes.string.isRequired
}

export default Card;