import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'

const Navbar = ({onNewGame, isWinner}) => (
	<header>
		<h2>
			<a>{isWinner ? 'Congratulations!': 'Memory Game'}</a>
		</h2>
		<nav>
			<li><a onClick={onNewGame}>New Game</a></li>
		</nav>
	</header>
);

Navbar.propTypes = {
	onNewGame: PropTypes.func.isRequired,
	isWinner: PropTypes.bool.isRequired
};

export default Navbar;
