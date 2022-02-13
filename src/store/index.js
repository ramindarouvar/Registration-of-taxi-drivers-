import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import drivers from "./../json/drivers.json";
import { initializeDriversLists } from "./../actions/driversActions";
import { reducers } from "./../reducers/index";

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// initialization of drivers information array (reading from "drivers.json")
store.dispatch(initializeDriversLists(drivers));
