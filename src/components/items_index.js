import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchItems, populateItems } from '../actions';


class ItemsIndex extends Component {

  componentWillMount() {
    this.props.fetchItems();
  }


  renderPosts() {
    return _.map(this.props.items, (item) => {
      console.log(item);
    });
  }

  render() {

    return (
      <div>
        <h3> Posts </h3>
        <ul className="list-group-item">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { items: state.items};
}

export default connect( mapStateToProps , {
  fetchItems, populateItems
})(ItemsIndex);
