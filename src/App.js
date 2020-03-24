import React, { useState, useEffect } from 'react';
import FormBudget from './components/FormBudget';
import FormExpense from './components/FormExpense';
import ListExpenses from './components/ListExpenses';
import Budget from './components/Budget';

function App() {

    // definir presupuesto
    const [ budget, setBudget ] = useState(0);
    const [ remaining, setRemaining ] = useState(0);
    const [ showFormBudget, setShowFormBudget ] = useState(true);
    const [ expenses, setExpenses ] = useState([]);
    const [ expense, setExpense ] = useState({});
    const [ createExpense, setCreateExpense ] = useState(false);

    // Actualizar el restante
    useEffect(() => {

        // agregar nuevo gasto
        if(createExpense) {
            setExpenses([
                ...expenses,
                expense
            ]);

            // resta del presupuesto actual
            const substractBudget = remaining - expense.quantity;
            setRemaining(substractBudget);

            // resetar a false
            setCreateExpense(false);
        }

    }, [ createExpense, expense, expenses, remaining ]);

    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>

                <div className="content-main content">

                    { showFormBudget ? (
                        <FormBudget
                            setBudget={setBudget}
                            setRemaining={setRemaining}
                            setShowFormBudget={setShowFormBudget}
                        />
                    )
                    : (
                        <div className="row">
                            <div className="one-half column">
                                <FormExpense
                                    setExpense={setExpense}
                                    setCreateExpense={setCreateExpense}
                                />
                            </div>

                            <div className="one-half column">
                                <ListExpenses
                                    expenses={expenses}
                                />

                                <Budget
                                    budget={budget}
                                    remaining={remaining}
                                />
                            </div>
                        </div>
                    )}

                </div>
            </header>
        </div>
    );
}

export default App;
