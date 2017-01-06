import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  render() {
    const greetingContent = () => {
      if(this.props.currentUser) {
        return (
          <div>
            <h2>Welcome, {this.props.currentUser.username}</h2>
            <button type='button' onClick={this.handleClick}>Logout</button>
          </div>
        );
      } else {
        return (
          <div>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
          </div>
        );
      }
    };


    return greetingContent();
  }
}

export default Greeting;
