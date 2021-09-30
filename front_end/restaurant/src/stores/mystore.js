import { createStore } from "redux";

import loggedReducer from "../reducers/islogged";

const mystore = createStore(loggedReducer)

export default mystore;