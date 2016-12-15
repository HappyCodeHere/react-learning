import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { Link } from 'react-router';


const API_KEY = 'AIzaSyAfDLcN8EkVGefFubS8G0YrYzhI-R42Itg';

class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: '',
			videos: []
		}

		this.onInputChange = this.onInputChange.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
		this.videoSearch = this.videoSearch.bind(this);
	}

	render() {

		const needVideo = this.state.videos.map((video) => {
			return <div> 
				<Link to={'/' + video.id.videoId} key={video.etag}> {video.snippet.title} </Link>
				<br/>
				</div>
		});

		return (
			<div className="main">
				<form>
					<input 
						value={this.state.data}
						onChange={this.onInputChange}
					/>
					<button onClick={this.onButtonClick}> Найти! </button>
				</form>

				<ul>
					{needVideo}
				</ul>
			</div>
		);
	}

	onInputChange(event) {
		this.setState({ data: event.target.value })
	}

	onButtonClick(event) {
		event.preventDefault();
		this.videoSearch(this.state.data);
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
			});
		});
	}
}


export default Main;