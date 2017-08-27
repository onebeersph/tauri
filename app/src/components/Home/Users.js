import React, { Component } from 'react';

class Users extends Component {
  render() {
    const users = this.props.usersProps;

    return (
      <div>
        <h2>Users</h2>
          {
            users.map((user, key) =>
              <ul key={key}>
                <li>{user.email}</li>
                <li>{user.firstName}</li>
                <li>{user.lastName}</li>
              </ul>
            )
          }
      </div>
    );
  }
}

export default Users;
