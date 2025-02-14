import React from 'react';
import unsplash from './api/Unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    console.log(response);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;