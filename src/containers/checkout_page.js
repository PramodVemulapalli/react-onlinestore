import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import { fetchItems, populateItems, addToCart } from '../actions';
import StoreHeader from  './../components/store_header';
import { getCartProducts, getTotal } from '../reducers'



class CheckoutPage extends Component {

  componentWillMount() {
    // this.props.populateItems();
    //         <div className="subheader">
    //          </div>

    this.props.fetchItems();
  }


  render() {

    return (
      <div>
          <StoreHeader />
          <div className="subheader2">
            <div className="row">
                <div className="col-sm-4" style={{ 'background-color' : 'red'}}>
                  <p className="h2"> subheader </p>
                </div>
                <div className="col-sm-8" style={{ 'background-color' : 'green'}}>
                  <a onClick={ () => this.props.changePage('/checkout') } >
                    <p className="h2">
                      Shopping Cart + {this.props.total}
                    </p>
                  </a>
                </div>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchItems,
  populateItems,
  addToCart,
  changePage: (pagename) => push(pagename)
}, dispatch)

export default connect( mapStateToProps, mapDispatchToProps)(CheckoutPage);
