
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers/appReducer";

import { combineReducers } from "redux";
import siderReducer from "./reducers/siderbarReducer";

const rootReducer = combineReducers({
    wallet: appReducer,
    siderBar: siderReducer
});
const store = legacy_createStore(rootReducer);

export default store;
