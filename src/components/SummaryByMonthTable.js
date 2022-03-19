import {Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";

function SummaryByMonthTable() {

    const [summary, setSummary] = useState([]);

    useEffect(() => {
        getSummary(); //fetch data from api
    }, []);

    const getSummary = async () => {
        const response = await fetch("http://localhost/movements/byMonth");
        const summary = await response.json();
        setSummary(summary);
    };

    return (
        <>
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
        </>
    );
}

export default SummaryByMonthTable;
