import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
        
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc',{description:'how are you'});
    expect(action).toEqual({
        id: '123abc',
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'how are you'
        }
       
    });
}); 

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last monts rent'
    };

    const action  = addExpense(expenseData);
    expect(action).toEqual({
       type: 'ADD_EXPENSE',
       expense: {
           ...expenseData,
           id: expect.any(String)

       } 
    });


});


// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//         }
//     });
// });