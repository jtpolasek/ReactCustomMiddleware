import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class UserList extends Component {

componentWillMount(){
  this.props.fetchUsers();
}
  

  renderUser = () => { 
    return this.props.users.map( user => {
      return( 
      <div key={user.name} className="card card-block">
      <h4 className="card-title">{user.name}</h4>
      <p className="card-text">{user.company.name}</p>
      <a className="btn btn-primary" href={user.website}>Website</a>
    </div>
      );      
    });   
  };
  
  render() {
    return(
      <div className="user-list">
          {this.renderUser()}
      </div>
    );
  }
}

function mapPropsToState(state){
  return {
    users: state.users
  }
}

export default connect(mapPropsToState, actions)(UserList);