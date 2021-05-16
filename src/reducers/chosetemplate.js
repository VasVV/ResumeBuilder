const chosetemplatereducer = (state = '', action, payload) => {
  switch (action.type) {
    case 'CHOSE_TEMPLATE':
       return action.payload;
    default:
      return state
  }
}

export default chosetemplatereducer