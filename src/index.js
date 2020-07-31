import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fontawesome/css/all.css';

import Header from './Pages/Menu/Header';
import Footer from './Pages/Menu/Footer';
import Podcast from './Pages/Podcast/Podcast';
import News from './Pages/News/News';

class Perro extends Component{
    render(){
        return(
            <>{/*
                <Header
                    HeaderTitle='../logo.png'
                />
                 */}
                <Podcast/>

                {/**
                <Player
                    mediaBackground='../assets/S1VeBk_h8.jpeg'
                />

                <TimelineContent
                    activities ={activities}
                />
               <Footer/>
                */}
            </>
        );
    }
}

class Player extends Component{
    render(){
        return(
            <div id='content'>
                <div className='contentArea'>
                    <span className='contentBanner'>
                        <h3>Episode 1</h3>
                        <img src={this.props.mediaBackground} alt='newsbanner' className='newsBanner'/>
                    </span>

                    <div className='contentHead'>
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

        );
    }
}


var mount = document.querySelector('#root');
ReactDOM.render(
    <Perro/>, mount
)