import React, { Component } from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchItems, populateItems } from '../actions';
import WelcomeHeader from  './../components/welcome_header';


class WelcomePage extends Component {

  componentWillMount() {
    this.props.fetchItems();
  }

  renderPosts() {

    var rows = [];
    for (var i=0; i < 250; i++) {
        rows.push(<li key={i}> {i}  </li>);
    }
    return <ul>{rows}</ul>;

  }

  render() {

    return (
      <div>
        <div>
          <WelcomeHeader />
          <div>
            <p className="h2" style={{ 'marginTop': '75px'}} >Main Dishes</p>
            <hr />
          </div>
          <div>
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
  return { items: state.items};
}

export default connect( mapStateToProps , {
  fetchItems, populateItems
})(WelcomePage);
