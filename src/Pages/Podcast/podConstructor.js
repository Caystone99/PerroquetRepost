import React, {Component} from 'react';
import podData from './podData.json';

class PodConstructor extends Component{
    render(){
        const {datum} = this.props;
        return(
            <>
            {podData.map((datas, index) => {
                return(
                    <Data 
                        podEpisode={datas.podEpisode}
                        podDate={datas.podDate}
                        podTitle={datas.podTitle}
                        podDesc={datas.podDesc}
                        AudioSource={datas.AudioSource}
                    />
            );
        })}
        </>
        );
    }
}



class Data extends Component{
    constructor(props){
        super(props);

        this.state = {
            datum : podData,
        }
    }

    componentDidMount(){
        console.log(podData);
    }

    render(){
        return(
            <div id='content'>
                <div className='contentArea'>
                    <div className='contentHead'>
                        <span className='contentEp'>{this.props.podEpisode}</span>
                        <span className='time'>
                            {this.props.podDate}
                        </span>
                    </div>

                    <div className='contentBody'>
                        <h3>{this.props.podTitle}</h3>

                        <p>{this.props.podDesc}</p>
                    </div>

                    <div className='playerIcon'>
                        <audio id ='audio' src={this.props.AudioSource}
                        controls preload='none'>
                            Audio element not supported by your browser
                        </audio>
                    </div>
                </div>
            </div>
        )
    }
}

export default PodConstructor;