import {Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";

function MovementsTable() {

    const [movements, setMovements] = useState([]);
    useEffect(() => {
        getMovements(); //fetch data from api
    }, []);

    const getMovements = async () => {
        const response = await fetch("http://localhost/movement");
        const movements = await response.json();
        setMovements(movements);
    };

    return (
        <>
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
        </>
    );
}

export default MovementsTable;
