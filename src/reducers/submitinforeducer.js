

const submitinforeducer = (state = [], action, payload) => {
    switch (action.type) {
      case 'SUBMIT_INFO':
         return [...state, action.payload];
      default:
        return state
    }
  }
  
  export default submitinforeducer 