import axios from 'axios';

const getContact = (id) => {
  return {
    type: 'GET_CONTACT',
    payload: axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/contact/'+id
    })
  }
}

const testing = (id) => {
  return {
    type: 'GET_CONTACT',
    payload: axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/contact/'+id
    })
  }
}


export {
  getContact,
  testing
}
