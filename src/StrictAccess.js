import React from 'react';
// import { Link } from 'react-router-dom';

class StrictAccess extends React.Component {
  strict() {
    if ((this.props.user.username === 'Joao') && (this.props.user.password === 1234)) {
      return ( <p> Welcome { this.props.user.username }! </p> )
    }
    return ( 
      alert("Access denied"),
      this.props.history.go(-1)
    );
  } 

  render() {
    return (
      <div>
        {this.strict()}
      </div>
    );
  }
}

export default StrictAccess;