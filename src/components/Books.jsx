
import React from 'react';
import MediaItem from './MediaItem';
import { books } from '../data/web_book_data.js';
import Recommend from '../components/Recommend'

class Books extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			books: books.splice(0,3) 
		};
	}
	
	render(){
		return (
			<div>
				<h1 class="font-weight-light text-center">May your virtual tour around Ireland begin!</h1>
				<MediaItem places={this.state.books} />
                <Recommend />
			</div>
		);
	}
}

export default Books;