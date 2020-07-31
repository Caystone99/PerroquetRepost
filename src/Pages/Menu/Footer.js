import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import News from '../../News/News';
import Perro from '../../index';
import Podcast from '../Podcast/Podcast';


const podClick=()=>{
    return(
        ReactDOM.render(
            <Podcast/>,
            document.getElementById('root')
        )
    )
}

const bodyClick=()=>{
    return(
        ReactDOM.render(
            <Perro/>,
            document.getElementById('root')
        )
    )
}

const newsClick=()=>{
    return(
        ReactDOM.render(
            <News/>,
            document.getElementById('root')
        )
    )
}

class Footer extends Component{
    render(){
        return(
            <>
            <br/>
            <br/>
            <div id='footer'>
                <span onClick={podClick} className="foot-nav-item">
                    <i className='fa fa-microphone'></i><br/>
                    <span>PODCAST</span>
                </span>
                
                <span onClick={bodyClick} className="foot-nav-item">
                    <i className='fa fa-home'></i><br/>
                    <span>HOME</span>
                </span>

                <span onClick = {newsClick} className="foot-nav-item">
                    <i className='fa fa-newspaper'></i><br/>
                    <span>NEWS</span>
                </span>
            </div>
            </>
        );
    }
}

export default Footer;