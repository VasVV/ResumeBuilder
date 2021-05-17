const addsummaryreducer = (state = '', action, payload) => {
    switch (action.type) {
      case 'ADD_SUMMARY':
         return action.payload
      default:
        return state
    }
  }
  
  export default addsummaryreducer