import axios from 'axios';

const getMessage = (id) => {
  return {
    type: 'GET_MESSAGE',
    payload: axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/msg/'+id
    })
  }
}

const testing = (id) => {
  return {
    type: 'GET_MESSAGE',
    payload: axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/msg/'+id
    })
  }
}

export {
  getMessage,
  testing
}
