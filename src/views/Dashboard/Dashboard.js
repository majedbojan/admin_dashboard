import React, { Component } from 'react';

// components
import BookList   from '../../containers/Book/BookList'
import BookDetail from '../../containers/Book/BookDetail'
import ListClients   from '../../containers/Client/ListClients';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        {/* تـجربه لقلم */}
        {/* <ListClients /> */}
        {/* <BookDetail /> */}
      </div>
    )
  }
}

export default Dashboard;
