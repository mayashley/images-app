import React, { Component } from "react";

class SearchBar extends Component {
  // using state and examples in <input> are examples of controlled form
  state = { term: "" };

  //   keep form from automaticly submitting itself and causing re-render
//   we can use these arrow functions for handlers, or we can use it in
// line handler arrow function like on line 24 onChange, either way is fine
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
// controlled forms-
// un-controlled forms-
