const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

const conversation = (state = initialState, action) => {
  switch (action.type) {
    // Get conversation
    case 'GET_CONVERSATION_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'GET_CONVERSATION_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'GET_CONVERSATION_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload.data.body
      }
    // Post conversation
    case 'POST_CONVERSATION_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'POST_CONVERSATION_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'POST_CONVERSATION_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload.data.body[0]
      }
    default:
      return state
  }
}

export default conversation;
