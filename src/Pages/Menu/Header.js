import React, {Component} from 'react';


class Header extends Component{
    render(){
        return(
            <>
            <div id='header'>
                <span className='logoIcon'>
                    <img src={this.props.HeaderTitle} width='40px' alt='logo'/>
                </span>

                <span className='fa fa-ellipsis-v menuIcon'></span>
            </div>
            </>
        );
    }
}


export default Header;