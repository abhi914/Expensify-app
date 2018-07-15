import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';










    







// const expenses = store.dispatch(addExpense({ description: 'rent', note: 'pay it ASAP', amount: 10000, createdAt: 131}));
// console.log(expense);


// store.dispatch(editExpense(expenses.expense.id, {amount: 200, note: 'Tu Chutiya'}));

// store.dispatch(setTextFilter('rent'));


// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(111));
console.log(store.getState());




const demoState = {
    expenses: [{
        id: 'asdasd13123',
        description: 'January Rent',
        note: 'This was the final address for the payment',
        amount: 1231,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined

    }

};