import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {


  render(){
    console.log('active book', this.props.active_book)
    if (!this.props.active_book) {
      return <div>Select Book to show the detail</div>
    }

    return(
      <div>
        <h3>Book Detail: </h3>
        <div>Title: {this.props.active_book.title}</div>
        <div>pahe: {this.props.active_book.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active_book: state.active_book
  }
}

export default connect(mapStateToProps)(BookDetail)
