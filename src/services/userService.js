import axios from 'axios';

const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})
//fetch users from endpoint
const service = {
  fetchUsers: data => {
    return instance.get('http://www.mocky.io/v2/5e55294d31000029b7eb36fb')
      .then(res => res)
      .catch(err => err.response)
  }
}

export default service;
