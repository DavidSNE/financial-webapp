import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/NavBar';
import Sidebar from "./components/Sidebar";
import SummaryTables from "./components/SummaryTables";
import Dashboard from "./components/Dashboard";

function App() {

    const [view, setView] = useState('dashboard');

    return (
        <>
            <body>
            <Navbar/>
            <div class="container-fluid ">
                <div class="row">
                    <Sidebar update={setView}/>
                    {view === 'dashboard' && <Dashboard/>}
                    {view === 'summaryTables' && <SummaryTables/>}
                </div>
            </div>
            </body>
        </>
    );
}

export default App;
