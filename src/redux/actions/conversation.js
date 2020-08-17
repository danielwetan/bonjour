import axios from 'axios';

const getConversation = (sender, receiver) => {
  return {
    type: 'GET_CONVERSATION',
    payload: axios({
      method: 'GET',
      url: `http://192.168.43.186:3000/msg?sender=${sender}&receiver=${receiver}`
    })
  }
}

const postConversation = (sender, receiver, message) => {
  return {
    type: 'POST_CONVERSATION',
    payload: axios({
      method: 'POST',
      url: 'http://192.168.43.186:3000/msg',
      data: {
        sender_id: sender,
        receiver_id: receiver,
        message: message
      }
    })
  }
}

export {
  getConversation,
  postConversation
}
