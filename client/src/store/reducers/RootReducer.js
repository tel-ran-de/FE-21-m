import {combineReducers} from "redux";
import {ErrorReducer} from "./ErrorReducer";
import {AuthReducer} from "./AuthReducer";
import {UserReducer} from "./UserReducer";
import {CompanyReducer} from "./CompanyReducer";
import {UiReducer} from "./UiReducer";
import {ProductReducer} from "./ProductReducer";

export const RootReducer = combineReducers({
    error: ErrorReducer,
    auth: AuthReducer,
    user: UserReducer,
    company: CompanyReducer,
    product: ProductReducer,
    ui: UiReducer,
})