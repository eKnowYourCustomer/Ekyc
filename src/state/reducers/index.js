
import { combineReducers } from "redux";
import accountreducers from "./accountReducer";

const reducers = combineReducers({

    account: accountreducers
});
    export default reducers;
