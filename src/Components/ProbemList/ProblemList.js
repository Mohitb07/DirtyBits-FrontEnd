import React from "react";
import axios from 'axios';

import Card from './Component/Card';
import Spinner from './Component/Spinner';
import Dropdown from './Component/Dropdown';
import Checkbox from './Component/Checkbox';

class ProblemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    axios.post('http://54.198.168.63/getData/',{
      "type" : "list",
      "tags" : ["String"]
    })
      .then(reponse => {
        console.log(reponse.data)
        this.setState(
          { questions:reponse.data }
        )
      })
      .catch(error => {
        console.log(error)
      })
  }

  render(){
    const {questions} = this.state;
    return (
      <div>
        <h1 className="container" style={{textAlign:'center', marginTop: '4%'}}>Problem List</h1>
        <Dropdown/>
        {
          questions.length ?
          questions.map(question => <div style={ { fontSize:30,marginTop:'10%',marginLeft:'10%' }} key={question.id}>
            <Card id={question.id} title={question.title} description={question.description}/>
            <Checkbox tags={question.tags[0]['name']}/>
            </div>
            ):<div style={{display:'flex', justifyContent: 'center', marginTop: '5%'}}><Spinner/></div>
          }
      </div>
    )
  }
}
export default ProblemList;
