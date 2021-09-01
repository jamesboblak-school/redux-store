import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'   
import reducers from './reducers'

const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
};
const store = createStore(reducers, initialState);

export default store