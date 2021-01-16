import CodeEditor from './CodeEditor'
import React from 'react'
import ProblemArea from './ProblemArea';
import Navbar from './Navbar';



function Menu() {
    return (
        <div>
            <Navbar/>
            <div>
                <div className="ui two column very relaxed grid" style = {{paddingTop : "20px"}}>
                    <div className="column">
                        <div className = 'ui container'>
                            <ProblemArea />
                        </div>
                    </div>
                    <div className="column">
                        <div className = "ui container">
                            <CodeEditor/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
