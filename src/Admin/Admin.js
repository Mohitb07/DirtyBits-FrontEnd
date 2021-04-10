import React from 'react'
import LineGraph from './LineGraph';
import Pie from './Pie'
import './Admin.css'

function Admin() {
    return (
        <>
        <h1 className="dashboard-title">Your Dashboard</h1>
        <div className="container">
            <LineGraph/>
            <div className="cards-pie-container">
                <div className="cards-container">
                    <div className="card card-1">
                        <h4>Rank</h4>
                        <span><h1>1</h1></span>
                    </div>
                    <div className="card card-2">
                        <h4>Partially solved</h4>
                        <span><h1>50</h1></span>
                    </div>
                    <div className="card card-3">
                        <h4>Problem solved</h4>
                        <span><h1>100</h1></span>
                    </div>
                </div>
                    <Pie/>
              
            </div>
        </div>
        </>
    )
}

export default Admin
