import SummaryByMonthTable from "./SummaryByMonthTable";
import SummaryByCategoryTable from "./SummaryByCategoryTable";
import MovementsTable from "./MovementsTable";
import React from "react";

function SummaryTables() {
    return (
        <>
            <main className="col-md-11 ms-sm-auto col-lg-11 px-md-4">
                <h2>Summary</h2>
                <SummaryByMonthTable/>
                <h2>Summary by category</h2>
                <SummaryByCategoryTable/>
                <h2>Movements</h2>
                <MovementsTable/>
            </main>
        </>
    );
}

export default SummaryTables;
