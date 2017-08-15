import axios from 'axios';
import { FETCH_USERS } from './types';

export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  // const users = res.data.map(user => ({
  //   name: user.name,
  //   email: user.email,
  //   company: user.company.name
  // }));
  return {
    type: FETCH_USERS,
    payload: request,
  };
}
