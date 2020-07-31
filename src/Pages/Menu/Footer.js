import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <>
            <br/>
            <br/>
            <br/>


            <div id='footer'>
                <span className="foot-nav-item">
                    <i className='fa fa-microphone'></i><br/>
                    <span>PODCAST</span>
                </span>
                
                <span className="foot-nav-item">
                    <i className='fa fa-home'></i><br/>
                    <span>HOME</span>
                </span>

                <span className="foot-nav-item">
                    <i className='fa fa-newspaper'></i><br/>
                    <span>NEWS</span>
                </span>
            </div>
            </>
        );
    }
}

export default Footer;