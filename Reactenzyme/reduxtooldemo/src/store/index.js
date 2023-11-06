import { configureStore, createSlice } from "@reduxjs/toolkit"


const slice = createSlice({
    name: "state1",
    initialState: {
         counter: 10,
         student: {id: "1001" , name: "Diana"  },
         islogin: false,
         user: {
            username: "",
            password: "",
        },
        product:[{
            productid: "",
            productname: "",
            productcost: 0,
            quantity: 0,
        },
    ],
    },
    reducers: {
        increment(state, action) {
            let data = { counter: state.counter + 1, student: state.student }
            return data
        },
        decrement(state, action) {
            let data = { counter: state.counter - 1, student: state.student }
            return data
        },
        incrementby(state, action) {
            let data = {
                counter: state.counter + action.payload,
                student: state.student,
            }
            return data
        },
        changestudent(state,action) {
            let data = { counter: state.counter, student: action.payload}
            return data
        },
        changeloginstatus(state, action){
            let data = {
                counter: state.counter, 
                student: state.student, 
                islogin: action.payload, 
                user: state.user,
            }
            return data
        },
        changeuser(state, action){
            let data = {
                counter: state.counter, 
                student: state.student, 
                islogin: state.islogin, 
                user: action.payload,
                product: state.product,
            }
            return data
    },
    addproduct(state, action) {
        let additem = [...state.product, action.payload];
        let data = {
          counter: state.counter,
          student: state.student,
          islogin: state.islogin,
          user: state.user,
          product: additem,
        };
        return data;
        }
    }
})
export const actions = slice.actions

const store = configureStore({ reducer: slice.reducer })

export default store
