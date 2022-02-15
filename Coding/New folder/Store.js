import { createStore } from "redux";
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

//store: {count: 0, todo: []}
const reducer = (store, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return { ...store, count: store.count + action.payload };
    case "ADD_TODO":
      return { ...store, todo: [...store.todo, action.payload] };
    default:
      return store;
  }
};

const store = createStore(reducer, { count: 0, todo: [] });

console.log(store.getState());
store.dispatch({ type: "INC_COUNT", payload: 1 });
console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: { id: 1, status: false, title: "tarun" },
});

console.log(store.getState());
