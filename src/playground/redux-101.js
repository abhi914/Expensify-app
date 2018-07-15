import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}) => ({
    type: 'DECREMENT',
    decrementBy
});


const setCount = ({count = 0}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});


const reducers = (state = {count: 0}, action) => {

    switch(action.type) {
        case 'INCREMENT': {
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        };

        case 'DECREMENT': {
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            }
        };

        case 'SET': {
            return {
                count: action.count
            }
        }

        case 'RESET': {
            return {
                count: 0
            };
        };

        default: {
            return state;
        };
    };
    
};
const store = createStore(reducers);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 10}));


store.dispatch(decrementCount({decrementBy: 5}));


store.dispatch(setCount({count: 11}));

store.dispatch(resetCount());
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// unsubscribe() ;

// store.dispatch({
//     type: 'RESET'
// });
// console.log(store.getState());
