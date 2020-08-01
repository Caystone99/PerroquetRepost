import React, {Component} from 'react';
import './Menu.css';
import ReactDOM from 'react-dom';
import News from '../../News/News';
import Perro from '../../index';
import Podcast from '../Podcast/Podcast';

class Menu extends Component{
    render(){
        var visibility = 'hide';

        if (this.props.menuVisibility){
            visibility = "show";
        }

        return(
            <div id='flyoutMenu'
                onMouseDown = {this.props.handleMouseDown}
                className = {visibility}>
            
            <h2><a href="#" onClick={bodyClick}>Home</a></h2>
            <h2><a href="#" onClick = {newsClick}>News</a></h2>
            <h2><a href="#" onClick={podClick}>PodCast</a></h2>

            <div className='flyFoot'>
                <h2>&copy; PerroquetRepost</h2>
            </div>
            </div>
        );
    }
}


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

export default Menu;