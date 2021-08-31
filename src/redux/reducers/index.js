import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    productSelected: selectedProductReducer
})

export default reducers;