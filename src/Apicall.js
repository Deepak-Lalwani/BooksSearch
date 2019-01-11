import React, { Component } from 'react';
import axios from 'axios'

class Apicall extends Component {


//https://www.googleapis.com/books/v1/volumes?q=sherlock
	constructor(props){
		super(props);

		this.state = {

			ls : [],
			title : [],
			authors : [],
			publishDate : [],
			keyword : ''
		}
		
		this.getBookData = this.getBookData.bind(this);
	}

	componentDidMount(){
		this.getBookData();
	}

	getBookData(){
		console.log(this.props.location.state.keyword);
		axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.props.location.state.keyword)
		.then(res => {
			console.log('response', res);
			console.log('response data', res.data.items);
			
			const title = res.data.items;
			this.setState({title}); 
			console.log('title', this.state.title);

			const publishDate = res.data.items.map(obj => obj.volumeInfo.publishedDate);
			this.setState({publishDate});
			console.log('date', this.state.publishDate);

			var authors = res.data.items.map(obj => obj.volumeInfo.authors);
			this.setState({authors});
			console.log('date', this.state.authors);
			
		})
		.catch((error) => {
			console.log('Error', error.message);
		})
	}

	render() {
    	return (
      	<div className="App">

        	<ol>
        		{this.state.title.map(item =>
        			<li key={item.id}>{item.volumeInfo.title} 
        				<div>
        					<ul>
        						<li>{item.volumeInfo.authors}</li>
        					</ul>
        				</div>
        					</li>)}
        	</ol>
        	
        	<ul>
        		{this.state.authors.map(item =>
        		<li>{item}</li>)}
        	</ul>

      	</div>
    	);
  	}
}

export default Apicall;
