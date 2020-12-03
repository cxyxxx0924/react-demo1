import { createStore } from 'redux'

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case action.type === 'add':
      return state.value + 1

    case action.type === 'minus':
      return state.value - 1

    default:
      return state;
  }
}

const store = createStore(counterReducer)
export default store