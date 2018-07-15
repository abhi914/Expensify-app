import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`} />
        <h1>Expense List Item </h1>
        <p>{description}</p>
        <p>{amount} - {createdAt}</p>        
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);



export default ExpenseListItem;
