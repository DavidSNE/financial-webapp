import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Table} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

function App() {

    const [movements, setMovements] = useState([{
        "amount": "David",
        "description": "Smith",
        "operationDate": "Great smith"
    }, {
        "amount": "John",
        "description": "Crouch",
        "operationDate": "Mr Crouch"
    }]);

    useEffect(() => {
        getMovements(); //fetch data from api
    }, []);

    const getMovements = async () => {
        const response = await fetch("http://localhost/movement");
        const movements = await response.json();
        console.log(movements);
        setMovements(movements);
    };




    return (
        <>
            <Table striped bordered hover variant="dark" movements={movements}>
                <thead>
                <tr>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Operation Date</th>
                </tr>
                </thead>
                <tbody>
                {movements.map(m =>
                    <tr>
                        <td>{m.amount}€</td>
                        <td>{m.description}</td>
                        <td>{m.operationDate}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </>
    );
}

export default App;
