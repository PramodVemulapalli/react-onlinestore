import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchItems, populateItems, addToCart } from '../actions';
import StoreHeader from  './../components/store_header';
import { getCartProducts, getTotal } from '../reducers'



class StorePage extends Component {

  componentWillMount() {
    // this.props.populateItems();
    this.props.fetchItems();
  }


  renderPosts() {

    const { items } = this.props.items;
    console.log(this.props.products);
    console.log(this.props.total);
    return _.map(items, (key, uid) => {

      const item = { ...key, uid};
      // console.log(uid);

      return (

        // https://github.com/twbs/bootstrap/issues/22053
        <div className="col-md-4 col-lg-3" style={{ 'marginTop': '32px'}} key={item.uid}>
          <div className="card" style={{ 'border': '1px solid rgba(0, 0, 0, 0.125)' }} >
            <img className="card-img-top" src={item.photoURL} alt="cap" />
            <div className="card-body">
              <h4 className="card-title">{item.header}</h4>
              <p className="card-text">{item.price}</p>
              <a className="btn btn-primary" onClick={() => this.props.addToCart(item.uid) }> Add </a>
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
        <div className="subheader">
          <div className="row">
            <div className="col-sm-4">
              <p className="h2">subheader</p>
            </div>
            <div className="col-sm-1 col-sm-offset-3 text-right">
              <p className="h2">{this.props.total}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="h2" style={{ 'marginTop': '125px'}} >Main Dishes</p>
          <hr />
        </div>
        <div>
            <div className="card-deck">
                { this.renderPosts() }
            </div>
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
  return {
    items: state.items,
    products: getCartProducts(state),
    total: getTotal(state)
  };
}

export default connect( mapStateToProps , {
  fetchItems, populateItems, addToCart
})(StorePage);
