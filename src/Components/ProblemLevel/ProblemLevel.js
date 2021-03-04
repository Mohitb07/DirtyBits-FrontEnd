import React from 'react';

import style from './Style.css';
import Card from './Card';

class ProblemLevel extends React.Component {
    render(){
        return(
            <div className="section">
            <div className="hero">
                <div className="cont">
                    <h1>Practice More And Level up Fast</h1>
                    <p>Learn Data Structures and Algorithms from basic to advanced level

                    </p>

                </div>
            </div>
            <div className="cards">
                <Card title={'Basic level'} description={'Basic level Data Structures and Algorithms'}/>
                <Card title={'Intermediate level'} description={'Intermediate level Data Structures and Algorithms'}/>
                <Card title={'Advance level'} description={'Advance level Data Structures and Algorithms'}/>
            </div>
            </div>
        )
    }
}

export default ProblemLevel;