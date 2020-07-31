import React, {Component} from 'react';
import Header from '../Menu/Header';
import Footer from '../Menu/Footer';

class Podcast extends Component{
    render(){
        return(
            <>
                <Header
                    HeaderTitle='../logo.png'
                />
                <ChannelDesc/>
                <ChannelContent/>
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

class ChannelContent extends Component{
    render(){
        return(
            <div id='content'>
                <div className='contentArea'>
                    <div className='contentHead'>
                        <span className='contentEp'>Episode 1</span>
                        <span className='time'>
                            June 18, 2020
                        </span>
                    </div>

                    <div className='contentBody'>
                        <h3>There is No Going Back From This Moment</h3>

                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div className='playerIcon'>
                        <audio src='../assets/audio.mp3' controls>
                            Audio element not supported by your browser
                        </audio>
                    </div>
                </div>
            </div>
        )
    }
}

export default Podcast;
