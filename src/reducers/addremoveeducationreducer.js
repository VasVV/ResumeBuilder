const addremoveeducationreducer = (state = {education:[]}, action, payload) => {
    switch (action.type) {
      case 'ADD_EDUCATION':
         return { 
                ...state,
            education: [...state.education, action.payload]
        }
      case 'REMOVE_EDUCATION':
          return {
            ...state,
            education: [
                ...state.education.slice(0, action.payload),
                ...state.education.slice(action.payload + 1)
            ]
        }
        case 'EDIT_EDUCATION':
          return {
            ...state, 
            education: state.education.map((e,i) => {
                if (i === action.payload.index) {
                   return action.payload.val;
                }
    
                return e;
            }),
            
          }  
      default:
        return state
    }
  }
  
  export default addremoveeducationreducer