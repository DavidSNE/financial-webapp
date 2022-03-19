import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Table} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import Navbar from './components/NavBar';
import Sidebar   from "./components/Sidebar";

function App() {

    const [movements, setMovements] = useState([{
        "amount": "David",
        "description": "Smith",
        "category": "Technology",
        "operationDate": "Great smith"
    }, {
        "amount": "John",
        "description": "Crouch",
        "category": "Groceries",
        "operationDate": "Mr Crouch"
    }]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        getMovements(); //fetch data from api
    }, []);

    useEffect(() => {
        getSummary(); //fetch data from api
    }, []);

    const getMovements = async () => {
        const response = await fetch("http://localhost/movement");
        const movements = await response.json();
        setMovements(movements);
    };

    const getSummary = async () => {
        const response = await fetch("http://localhost/movements/byMonth");
        const summary = await response.json();
        console.log(summary);
        setSummary(summary);
    };




    return (
        <>
            <body>
                <Navbar/>
                <div class="container-fluid ">
                    <div class="row">
                        <Sidebar/>
                        <main className="col-md-11 ms-sm-auto col-lg-11 px-md-4">
                            <h2>Summary</h2>
                            <Table striped bordered hover  summary={summary}>
                                <thead>
                                <tr>
                                    <th>Expenses</th>
                                    <th>Balance</th>
                                    <th>Income</th>
                                    <th>Period</th>
                                </tr>
                                </thead>
                                <tbody>
                                {summary.map(s =>
                                    <tr>
                                        <td>{s.expenses}€</td>
                                        <td>{s.balance}</td>
                                        <td>{s.income}</td>
                                        <td>{s.period}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                            <h2>Movements</h2>
                            <Table striped bordered hover  movements={movements}>
                                <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Operation Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {movements.map(m =>
                                    <tr>
                                        <td>{m.amount}€</td>
                                        <td>{m.description}</td>
                                        <td>{m.category}</td>
                                        <td>{m.operationDate}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                        </main>
                    </div>
                </div>
            </body>
        </>
    );
}

export default App;
