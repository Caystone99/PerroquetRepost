import React, {Component} from 'react';
import data from './data.json';

class Constructor extends Component{
    render(){
        return(
            <>
            {data.map((datas, index) => {
                return(
                    <Data 
                    newsTag={datas.newsTag}
                    newsBanner={datas.newsBanner}
                    sourceLogo={datas.sourceLogo}
                    timeStamp={datas.timeStamp}
                    newsHead={datas.newsHead}
                    newsBody={datas.newsBody}
                    newsMore={datas.newsMore}
                    newsSource={datas.newsSource}
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
            datum : data,
        }
    }

    componentDidMount(){
        console.log(data);
    }

    render(){
        return(
            <div id='content'>
            <div className='contentArea'>
                <span className='contentBanner'>
                    <h3>{this.props.newsTag}</h3>
                    <img src={this.props.newsBanner} alt='newsbanner' className='newsBanner'/>
                </span>

                <div className='contentHead'>
                    <span>
                        <img src={this.props.sourceLogo} alt='source' className='avatar'/>
                    </span>
                    <span className='time'>
                        {this.props.timeStamp}
                    </span>
                </div>

                <div className='contentBody'>
                    <h3>{this.props.newsHead}</h3>

                    <p>{this.props.newsBody}</p>
                    <p className='newsMore'>{this.props.newsMore}</p>
                </div>

                <div className='moreIcon'>
                    <a href={this.props.newsSource}>
                        Read More
                    </a>
                </div>
            </div>
        </div>
        )
    }
}

export default Constructor;