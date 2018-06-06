import React, { Component } from 'react';
import axios from 'axios';

class ListClients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/v1/clients`)
      .then(res => {
        console.log('clients', res)
        // this.setState({ clients: res.data.data.data });
      });
  }
  render(){
    return(
      <table className="table table-sm table-light">
        <thead className="table-primary">
          <tr>
            <th scope="col">الرقم المعرف</th>
            <th scope="col">الاسم</th>
            <th scope="col">البريد الالكتروني</th>
            <th scope="col">رقم الجوال</th>
            <th scope="col">الحاله</th>
          </tr>
        </thead>
               {this.state.clients.map(function(client, index){
                return (
                  <tbody>
                   <tr>
                      <th>{client.id}</th>
                      <th>{client.name}</th>
                      <th>{client.email}</th>
                      <th>{client.mobile}</th>
                      <th>{client.status === "active" ? <a class="btn btn-success btn-sm" href="#" role="button">Active</a> :
                                                        <a class="btn btn-danger btn-sm" href="#" role="button">Inactive</a>}</th>
                      {/* <th><Link to={`/clients/${client.id}`} activeClassName="special">Show</Link></th> */}
                    </tr>
                </tbody>
                  )
                }
              )}
      </table>

    )
  }
}


export default ListClients;
