import {Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";

function SummaryByCategoryTable() {

    const [summaryByCat, setSummaryByCat] = useState([]);

    useEffect(() => {
        getSummaryByCat(); //fetch data from api
    }, []);

    const getSummaryByCat = async () => {
        const response = await fetch("http://localhost/movements/byCategory");
        const summaryByCat = await response.json();
        console.log(summaryByCat);
        setSummaryByCat(summaryByCat);
    };


    return (
        <>
            <Table striped bordered hover  summaryByCat={summaryByCat}>
                <thead>
                <tr>
                    <th>Expenses</th>
                    <th>Balance</th>
                    <th>Income</th>
                    <th>Period</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {summaryByCat.map(s =>
                    <tr>
                        <td>{s.expenses}€</td>
                        <td>{s.balance}</td>
                        <td>{s.income}</td>
                        <td>{s.period}</td>
                        <td>{s.category}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </>
    )
}

export default SummaryByCategoryTable;
