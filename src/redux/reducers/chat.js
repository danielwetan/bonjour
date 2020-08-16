const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

const message = (state = initialState, action) => {
  switch (action.type) {
    // Get message
    case 'GET_MESSAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'GET_MESSAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'GET_MESSAGE_FULFILLED':
    console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload.data.body
      }
    default:
      return state
  }
}

export default message;
