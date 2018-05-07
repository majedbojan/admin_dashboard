import React, { Component } from 'react';

// components
import BookList   from '../../containers/Book/BookList'
import BookDetail from '../../containers/Book/BookDetail'

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        {/* تـجربه لقلم */}
        {/* <BookList /> */}
        {/* <BookDetail /> */}
      </div>
    )
  }
}

export default Dashboard;
