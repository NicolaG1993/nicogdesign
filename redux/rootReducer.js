import { combineReducers } from "redux";
import toggleLayout from "./ToggleLayout/toggleLayout.reducer";

const rootReducer = combineReducers({
    toggleLayout: toggleLayout,
});

export default rootReducer;
