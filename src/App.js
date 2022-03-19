import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Navbar from './components/NavBar';
import Sidebar from "./components/Sidebar";
import SummaryByMonthTable from "./components/SummaryByMonthTable";
import SummaryByCategoryTable from "./components/SummaryByCategoryTable";
import MovementsTable from "./components/MovementsTable";

function App() {
    return (
        <>
            <body>
                <Navbar/>
                <div class="container-fluid ">
                    <div class="row">
                        <Sidebar/>
                        <main className="col-md-11 ms-sm-auto col-lg-11 px-md-4">
                            <h2>Summary</h2>
                            <SummaryByMonthTable/>
                            <h2>Summary by category</h2>
                            <SummaryByCategoryTable/>
                            <h2>Movements</h2>
                            <MovementsTable/>
                        </main>
                    </div>
                </div>
            </body>
        </>
    );
}

export default App;
