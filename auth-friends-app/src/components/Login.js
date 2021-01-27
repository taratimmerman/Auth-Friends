import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/api/friends');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.login} className='form'>
          <h1>Welcome back to Auth-Friend! Please login below.</h1>
          <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder='Enter your username'
          />
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder='Enter your password'
          />
          </div>
          <button className='form-input-btn'>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;