import React, {Component} from 'react';
import SearchBar from './components/SearchBar'
import './App.css'


class App extends Component {
onSearchSubmit(term) {
  console.log(term);
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

