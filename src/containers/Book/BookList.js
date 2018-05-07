import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectBook } from '../../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderListBooks(){
    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      )
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        { this.renderListBooks() }
      </ul>
    );
  };
}

function mapStateToProps(state){
  // Whatever is returned will show up as props inside of BookList
  return{
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
