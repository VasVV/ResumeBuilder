const currpagereducer = (state = [[false, false], [false, false],[false, false],[false, false],[false, false],[false, false],[false, false]], action, payload) => {
    switch (action.type) {//curr, already
      case 'SET_CURRPAGE':
          const stateCopyOne = [...state].map((e,i) => i == action.payload ? [e[0] = true, e[1]] : [e[0] = false, e[1]] );
          return stateCopyOne
          
      case 'SET_ALREADY':
        const stateCopyTwo = [...state].map((e,i) => i == action.payload ? [e[0], e[1] = true] : e );
          return stateCopyTwo;
      case 'UNSET_ALREADY':
        const stateCopyThree = [...state].map((e,i) => i == action.payload ? [e[0], e[1] = false] : e );
        return stateCopyThree;
      default:
        return state
    }
  }
  
  export default currpagereducer