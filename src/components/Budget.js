import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { controlBudget } from '../helpers';

const Budget = ({ budget, remaining }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={controlBudget(budget, remaining)}>
                Restante: $ {remaining}
            </div>
        </Fragment>
    );
}

Budget.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}
 
export default Budget;
