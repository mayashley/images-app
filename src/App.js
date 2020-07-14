import React, {Component} from 'react';
import SearchBar from './components/SearchBar'
import Unsplash from './api/Unsplash'
import './App.css'



class App extends Component {
state = { images: [] };


 onSearchSubmit = async (term)  => {
  // console.log(term);
  const response = await Unsplash.get('/search/photos', {
    params: { query: term },
});
// console.log(response.data.results)
this.setState({ images: response.data.results });
};


  render() {
  return (
    <div className="ui container App-Wrapper">
      <SearchBar onSubmit={this.onSearchSubmit} />
      Found: {this.state.images.data.results} images
    </div>
  );
  }
}

export default App;


// props only go down from parent to child

// we convert app to class function, pass down onsearchcubmit for search bar in it

