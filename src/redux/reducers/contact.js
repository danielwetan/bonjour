const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

const contact = (state = initialState, action) => {
  switch (action.type) {
    // Get Contacts
    case 'GET_CONTACT_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'GET_CONTACT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'GET_CONTACT_FULFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.body
      }
    default:
      return state
  }
}

export default contact;
