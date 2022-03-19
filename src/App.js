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
                <header className="navbar  sticky-top  flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Financial Analyzer</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <input className="form-control  w-100" type="text" placeholder="Search"
                           aria-label="Search"/>
                    <div className="navbar-nav">
                        <div className="nav-item text-nowrap">
                            <a className="nav-link px-3" href="#">Sign out</a>
                        </div>
                    </div>
                </header>
                <div class="container-fluid ">
                    <div class="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block  sidebar collapse">
                            <div className="position-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active " aria-current="page" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-home" aria-hidden="true">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                            </svg>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-file" aria-hidden="true">
                                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                                <polyline points="13 2 13 9 20 9"></polyline>
                                            </svg>
                                            Orders
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-shopping-cart"
                                                 aria-hidden="true">
                                                <circle cx="9" cy="21" r="1"></circle>
                                                <circle cx="20" cy="21" r="1"></circle>
                                                <path
                                                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>
                                            Products
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-users" aria-hidden="true">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                            Customers
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-bar-chart-2"
                                                 aria-hidden="true">
                                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                                <line x1="6" y1="20" x2="6" y2="14"></line>
                                            </svg>
                                            Reports
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-layers" aria-hidden="true">
                                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                                <polyline points="2 17 12 22 22 17"></polyline>
                                                <polyline points="2 12 12 17 22 12"></polyline>
                                            </svg>
                                            Integrations
                                        </a>
                                    </li>
                                </ul>

                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Saved reports</span>
                                    <a className="link-secondary " href="#" aria-label="Add a new report">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" className="feather feather-plus-circle" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-2">
                                    <li className="nav-item ">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-file-text"
                                                 aria-hidden="true">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                            Current month
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-file-text"
                                                 aria-hidden="true">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                            Last quarter
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-file-text"
                                                 aria-hidden="true">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                            Social engagement
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                 stroke-linejoin="round" className="feather feather-file-text"
                                                 aria-hidden="true">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                            Year-end sale
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
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
                        </main>
                    </div>
                </div>
            </body>
        </>
    );
}

export default App;
