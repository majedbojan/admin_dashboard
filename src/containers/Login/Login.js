import React, {Component} from 'react'
import './login.css'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      params: {
        email: '',
        password: '',
        access: 'web'
      },
      message: null,
      error: null,
      token: null
    };
    this.handleChange = this.handleChange.bind(this)
  }

  validateForm() {
    return this.state.params.email.length > 0 &&
           this.state.parapassword.length > 0;
  }

  handleChange (event) {
    this.setState({ params:{
      ...this.state.params,
      [event.target.id]: event.target.value
    }
    });
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  onSubmit (e) {
    e.preventDefault()
    this.setState({ message: null, error: null })

    axios.post(`http://localhost:3000/v1/login `, this.state.params)
    .then((response) => {
      localStorage.setItem('token', response.data.data.token)
      this.setState({ message: response.data.message, token: response.data.data.token})
    })
    .catch((error) => {
      this.setState({error: error.response.data.message})
    });
  }

  render(){
    return(
      <div className="Login">
        {
          this.state.message && <div className="alert alert-success" role="alert">
            {this.state.message}
          </div>
        }

        {
          this.state.error && <div className="alert alert-danger" role="alert">
            {this.state.error}
          </div>
        }

        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                name="email"
                type="email"
                value={this.state.params.email}
                onChange = {this.handleChange}
              />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.params.password}
              name="password"
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button
            block
            bsSize="large"
            // disabled={!this.validateForm()}
            onClick={this.onSubmit.bind(this)}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}

export default Login;
