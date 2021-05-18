const changereducer = (state = '', action, payload) => {
    switch (action.type) {
      case 'CHANGE':
         return action.payload;
      default:
        return state
    }
  }
  
  export default changereducer