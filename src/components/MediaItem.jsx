/* 
MediaItem.jsx
This React component uses a Media object imported from the reactstrap library
Each Media tag is passed a parameter which is used to identify how the data will be displayed
This page is responsible for building the elements which will display the name, image and description of each place from the places-ireland.js file

I built this page with the help of a tutorial I found online which helped me with displaying items from a data source. 
Here is the link to the tutorial I used:
https://medium.com/swlh/create-a-web-page-using-react-d5ad9d03fb1f

M.Lally
16 July 2021 
*/
import React from 'react';
import { Media } from 'reactstrap';

class MediaItem extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	render(){
		
		const menu = this.props.places.map((place) => {
			return(
				<div key={place.id} id="unit" className="col-12 mt-5">					
					<Media tag="li">
						<Media left>
							<Media object className="images" src={place.image_url} alt={place.title} />
						</Media>
						<Media body className="ml-3">
							<Media heading><strong>{place.title}</strong></Media>
							<div>{place.authors}</div>
						</Media>
					</Media>
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<Media list>
						{menu}
					</Media>
				</div>
			</div>
		);
	}
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default MediaItem;