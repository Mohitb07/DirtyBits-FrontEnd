import React from 'react';

class Card extends React.Component {
    render() {
        const {title, description,id} = this.props;
        return(
            <div style={{width: '50%',marginLeft: '-4%',marginTop: '-9%'}}>
                <div className="card">
                    <div className="card-header">
                        Question {id}
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Title: {title}</h3>
                        <p className="card-text">Description: {description}</p>
                        <a href="/" className="btn btn-primary">Solve Challenge</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;