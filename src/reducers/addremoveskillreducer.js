const addremoveskillreducer = (state = {skills:[]}, action, payload) => {
    switch (action.type) {
      case 'ADD_SKILL':
         return action.payload
      
      default:
        return state
    }
  }
  
  export default addremoveskillreducer