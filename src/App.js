import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import './App.css'


class App extends Component {
async onSearchSubmit(term) {
  // console.log(term);
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query: term },
headers: {
  Authorization: 'Client-ID ZzA9YqGCgDezaqVcf8I5jgjc4B5-a5hzq9lBykwlO0I'
}
});
console.log(response.data.results)
}


  render() {
  return (
    <div className="ui container App-Wrapper">
      <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
  );
  }
}

export default App;


// props only go down from parent to child

// we convert app to class function, pass down onsearchcubmit for search bar in it

