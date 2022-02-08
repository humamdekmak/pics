import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(event) => this.onFormSubmit(event)}
        >
          <label>Search image</label>
          <input
            type="text"
            placeholder="image search"
            value={this.state.term}
            onChange={(e) =>
              this.setState({ term: e.target.value.toUpperCase() })
            }
          />
        </form>
        <div className="results"></div>
      </div>
    );
  }
}

export default SearchBar;
