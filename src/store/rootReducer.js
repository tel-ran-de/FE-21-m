import {combineReducers} from "redux";
import {reducer as DealReducer} from "./Deals/reducer";
import {PostReducer} from "./Posts/postReducer";

export const RootReducer = combineReducers({
    deals: DealReducer,
    posts: PostReducer
})