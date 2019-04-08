import React, { Component } from "react";
import { connect } from "react-redux";
import { searchQ } from "../../../redux/store/action";
import Input from "../Form/Input/Input";

class SearchBox extends Component {
  handleSearch = query => {
    this.props.searchQ(query);
  };

  render() {
    return (
      <Input
        name="query"
        className="form-control my=3"
        placeholder="Search..."
        value={this.props.squery}
        onChange={e => this.handleSearch(e.currentTarget.value)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    squery: state.searchQuery
  };
};

export default connect(
  mapStateToProps,
  { searchQ }
)(SearchBox);
