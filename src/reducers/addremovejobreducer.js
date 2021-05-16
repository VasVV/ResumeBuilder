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
      default:
        return state
    }
  }
  
  export default addremovejobreducer