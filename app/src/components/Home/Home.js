import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/userActions';
import Users from './Users';

class Home extends Component {
  componentWillMount() {
    this.props.dispatch.fetchUsers();
  }

  render() {
    const fetchedUsers = this.props.users;

    return (
      <div>
        <h1>Home</h1>
        <Users usersProps={fetchedUsers}/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.user.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
