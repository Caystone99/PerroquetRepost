import React, {Component} from 'react';
import Footer from '../Menu/Footer';
import PodConstructor from './podConstructor';
import './Podcast.css';
import MenuContainer from '../Menu/MenuContainer';

class Podcast extends Component{
    render(){
        return(
            <>
                <MenuContainer/>
                <ChannelDesc/>
                <PodConstructor/>
                <Footer/>
            </>
        );
    }
}


class ChannelDesc extends Component{
    render(){
        return(
            <div id='channel'>
                <div className='channelArea'>
                    <div className='channelHead'>
                        <img src='../assets/S1VeBk_h8.jpeg' alt='channelBanner'/>
                        <h3>Radio Rental</h3>
                        <p>Welcome to radio rental, bizzare true stories told by those who lived them.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Podcast;
