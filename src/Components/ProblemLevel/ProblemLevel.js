import React from 'react';

import style from './Style.css';
import Card from './Card';
import Typical from 'react-typical'

import Loginbutton from '../Buttons/Login';
import AOS from 'aos';
import "aos/dist/aos.css";

class ProblemLevel extends React.Component {
    componentDidMount(){
        AOS.init({
            duration : 2000,
            offset:400
          });
    }
    render(){
        return(
            <div className="section">
            <div className="hero">
                <div className="cont">
                <Typical className='title'
                    steps={['Hello Programmers', 5000, 'Level up fast', 10000]}
                    loop={Infinity}
                    wrapper="h5"
                    >
                </Typical>
                               
                    <p> 
                        Learn Data Structures and Algorithms from basic to advance level
                    </p>
                    <Loginbutton/>
                </div>
            </div>
            <div  className="cards">
                <Card img={'https://appodeal.com/wp-content/uploads/2020/12/meetstack-1280x640-1.jpg'} value={'Arrays'} title={'Array'} description={'Basic level Data Structures and Algorithms'}/>
                <Card img={'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/layers-icon.png'} value={'Stacks'} title={'Stack'} description={'Intermediate level Data Structures and Algorithms'}/>
                <Card img={'https://miro.medium.com/max/2416/0*4Id-3IMNQHihLJAg.png'} value={'Linked List'} title={'Linked List'} description={'Advance level Data Structures and Algorithms'}/>
                <Card img={'http://www.crondose.com/wp-content/uploads/2016/09/Slide2-1024x576.png'} value={'Trees'} title={'Trees'} description={'Advance level Data Structures and Algorithms'}/>
                <Card img={'https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg'} value={'Graphs'} title={'Graphs'} description={'Advance level Data Structures and Algorithms'}/>
                <Card img={'https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg'} value={'String'} title={'Strings'} description={'Advance level Data Structures and Algorithms'}/>
            </div>
        </div>
        )
    }
}

export default ProblemLevel;