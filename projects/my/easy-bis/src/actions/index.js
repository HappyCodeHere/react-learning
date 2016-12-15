import { ASKING_LIST } from './types';

/*import axios from 'axios';*/
const API_KEY = 'AIzaSyAfDLcN8EkVGefFubS8G0YrYzhI-R42Itg';

export function askingList(date) {
	console.log('action recieve', date)
	return {
		type: ASKING_LIST,
		payload: date
	}
}

videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}