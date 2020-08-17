import axios from 'axios';

const updateProfile = (id, formData) => {
  return {
    type: 'PUT_PROFILE',
    payload: axios({
      method: 'PUT',
      url: `http://192.168.43.186:3000/u/${id}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  }
}

const testing = (id, formData) => {
  return {
    type: 'PUT_PROFILE',
    payload: axios({
      method: 'PUT',
      url: `http://192.168.43.186:3000/u/${id}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  }
}

export {updateProfile, testing}
