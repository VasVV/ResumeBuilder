const addremovejobreducer = (state = {jobs:[]}, action, payload) => {
    switch (action.type) {
      case 'ADD_JOB':
         return { 
                ...state,
            jobs: [...state.jobs, action.payload]
        }
      case 'REMOVE_JOB':
          return {
            ...state,
            jobs: [
                ...state.jobs.slice(0, action.payload),
                ...state.jobs.slice(action.payload + 1)
            ]
          }
        case 'EDIT_JOB':
          return {
            ...state, 
            jobs: state.jobs.map((e,i) => {
                if (i === action.payload.index) {
                   return action.payload.val;
                }
    
                return e;
            }),
          }
        case 'ALL_JOBS':
          return {...state, jobs: action.payload}
      default:
        return state
    }
  }
  
  export default addremovejobreducer