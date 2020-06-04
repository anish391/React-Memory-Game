import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Card from './Card';
import Navbar from './Navbar';
import './MemoryApp.css';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

class MemoryApp extends Component{
	constructor(props){
		super(props);
		
		let cards = [
		  {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
		  {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
		  {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
		  {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
		  {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
		  {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
		  {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
		  {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
		  {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
		  {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
		  {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
		  {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
		  {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
		  {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
		  {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
		  {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
		];
		this.state = {cards: shuffle(cards)};
	}
	
	
	render() {
		const cards = this.state.cards.map(card => (<Card key={card.id} />));
		return(
			<div>
				<Navbar />
				<div className='grid'>
					{cards}
				</div>
				
			</div>
		);
	}
}

export default MemoryApp;