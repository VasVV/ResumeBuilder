const tipsreducer = (state = '', action, payload) => {
    switch (action.type) {
      case 'UPDATE_TIP':
         return action.payload;
      default:
        return state
    }
  }
  
  export default  tipsreducer