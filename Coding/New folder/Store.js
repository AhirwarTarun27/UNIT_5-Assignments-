import { createStore } from "redux";
import { incCount } from "./store/actions.js";
import { INC_COUNT } from "./store/actionTypes.js";
import { reducer } from "./store/reducers.js";
// const addCount = { type: "INC_COUNT", payload: 1 };
// const decCount = { type: "DEC_COUNT", payload: 1 };

// class Store {
//   constructor(reducer, init) {
//     this.reducer = reducer;
//     this.state = init;
//   }

//   getState() {
//     return this.state;
//   }

//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

const store = createStore(reducer, { count: 0, todo: [] });

console.log(store.getState());
store.dispatch(incCount(1));
console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: { id: 1, status: false, title: "tarun" },
});

console.log(store.getState());
