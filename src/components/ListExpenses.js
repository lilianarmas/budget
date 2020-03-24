import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

const ListExpenses = ({ expenses }) => (
    <div className="expenses-incurred">
        <h2>Listado</h2>
        {expenses && expenses.map(expense => (
            <Expense
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
)

ListExpenses.propTypes = {
    expenses: PropTypes.array.isRequired
}
 
export default ListExpenses;
