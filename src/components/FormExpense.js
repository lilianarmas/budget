import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import shortid from 'shortid';

const FormExpense = ({ setExpense, setCreateExpense }) => {

    const [ name, setName ] = useState('');
    const [ quantity, setQuantity ] = useState(0);
    const [ error, setError ] = useState(null);

    const saveExpense = e => {
        e.preventDefault();

        // validar
        if(name.trim() === '') {
            setError('Ingrese el nombre del gasto');
            return;
        }
        if(quantity <= 0 || isNaN(quantity)) {
            setError('Gasto incorrecto');
            return;
        }

        setError(null);

        // construir el gasto
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        setExpense(expense);
        setCreateExpense(true);

        // resetear el formulario
        setName('');
        setQuantity(0);
    }

    return (
        <form
            onSubmit={saveExpense}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Message message={error} /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 700"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value && !isNaN(e.target.value) ? parseInt(e.target.value, 10) : '')}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

FormExpense.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}

export default FormExpense;
