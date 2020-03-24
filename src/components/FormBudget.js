import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const FormBudget = ({ setBudget, setRemaining, setShowFormBudget }) => {

    // definir el state
    const [ quantity, setQuantity ] = useState(0);
    const [ error, setError ] = useState(false);

    const saveQuantity = e => {
        setQuantity(parseInt(e.target.value, 10));
    }

    const saveBudget = e => {
        e.preventDefault();

        // validar
        if(quantity <= 0 || isNaN(quantity)) {
            setError(true);
            return;
        }

        // guardar
        setError(false);
        setBudget(quantity);
        setRemaining(quantity);
        setShowFormBudget(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Message message="Error Presupuesto Invalido"/> : null }

            <form
                onSubmit={saveBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={saveQuantity}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
    );
}

FormBudget.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowFormBudget: PropTypes.func.isRequired
}

export default FormBudget;
