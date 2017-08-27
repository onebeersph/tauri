import axios from 'axios';

export function fetchUsers() {
  return function(dispatch) {
    axios.get('http://localhost:1337/user')
      .then((response) => {
        dispatch({
          type: 'FETCH_USERS_FULFILLED',
          payload: response.data.users
        })
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USERS_REJECTED',
          payload: err
        })
      });
  }
}
