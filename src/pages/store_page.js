import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchItems, populateItems } from '../actions';
import StoreHeader from  './../components/store_header';


class StorePage extends Component {

  componentWillMount() {
    this.props.fetchItems();
  }


  renderPosts() {

    const { items } = this.props.items;
    return _.map(items, (key, uid) => {
      const item = { ...key, uid};
        return (
          // https://github.com/twbs/bootstrap/issues/22053
          <div className="col-md-4 col-lg-3" style={{ 'marginTop': '32px'}} key={item.uid}>
            <div className="card" style={{ 'border': '1px solid rgba(0, 0, 0, 0.125)' }} >
              <img className="card-img-top" src={item.photoURL} alt="cap" />
              <div className="card-body">
                <h4 className="card-title">{item.header}</h4>
                <p className="card-text">{item.time}</p>
              </div>
            </div>
          </div>

        );
    });
  }



  render() {

    return (
      <div>
        <StoreHeader />
        <div>
          <p className="h2" style={{ 'marginTop': '75px'}} >Main Dishes</p>
          <hr />
        </div>

        <div className="card-deck">
            { this.renderPosts() }
        </div>
      </div>
    );
  }
}


/*
<div className="col-md-4 col-lg-3" style={{ 'marginTop': '32px'} } key={item.uid}>
  <div className="card" >
    <img className="card-img-top" src={item.photoURL} alt="cap" />
    <div className="card-body">
      <h4 className="card-title">{item.header}</h4>
      <p className="card-text">{item.time}</p>
    </div>
  </div>
</div>
*/

function mapStateToProps(state) {
  return { items: state.items};
}

export default connect( mapStateToProps , {
  fetchItems, populateItems
})(StorePage);
