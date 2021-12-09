import {combineReducers} from "redux";
import {ErrorReducer} from "./ErrorReducer";
import {AuthReducer} from "./AuthReducer";
import {UserReducer} from "./UserReducer";
import {CompanyReducer} from "./CompanyReducer";

export const RootReducer = combineReducers({
    error: ErrorReducer,
    auth: AuthReducer,
    user: UserReducer,
    company: CompanyReducer,
})