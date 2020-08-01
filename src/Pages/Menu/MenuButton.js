import React, {Component} from 'react';
import './MenuButton.css';


class MenuButton extends Component{
    render(){
        return(
            <div id='nav'>
            <span className='logoIcon'>
                <img src='../logo3.png' width='40px' alt='logo'/>
            </span>

            <button id='roundButton'
            onMouseDown={this.props.handleMouseDown}></button>
            </div>
        );
    }
}

export default MenuButton;