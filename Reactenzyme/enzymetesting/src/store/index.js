import { legacy_createStore as createStore } from "redux"

const reducer = ( 
    state = {counter: 10, student: { id:"1001", name:"Diana"}} , 
    action
) => {
    if (action.type === "ch1") {
        return (state = { counter: state.counter + 1, student: state.student })
    }
    if (action.type === "ch2") {
        return (state = { counter: state.counter - 1, student: state.student })
    }
    if (action.type === "ch3") {
        return (state = { counter: state.counter + action.payload, student: state.student })
    }
    if (action.type === "c1") {
        return (state = { counter: state.counter, student: action.payload });
      }
      return state;
}

const store = createStore ( reducer )

export default store
