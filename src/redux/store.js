import { createStore} from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
}
const reducer = (state = initialState, { type, payload }) =>{
    switch (type) {
        case 'feedback/good':
            return { ...state, good: state.good + payload };
        
        case 'feedback/neutral':
            return { ...state, neutral: state.neutral + payload };
            
        case 'feedback/bad':
            return { ...state, bad: state.bad + payload };
        
        default:return state;
    }
}

const store = createStore(reducer, composeWithDevTools());

export default store;
