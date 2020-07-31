import React, {Component} from 'react';


class News extends Component{
    render(){
        return(
            <>
            <Header/>
            <TimelineContent
                activities ={activities}
            />
            <Footer/>
            </>
        )
    }
}



class TimelineContent extends Component{
    render(){
        const {activities} = this.props;
        return(
            <>
            {activities.map((activities) => {
                return(
                    <ContentBuild activities = {activities}/>
            );
        })}
        </>
        );
    }
}


class ContentBuild extends Component{
    render(){
        const {activities} = this.props;

        return(
            <div id='content'>
            <div className='contentArea'>
                <span className='contentBanner'>
                    <h3>{activities.newsTag}</h3>
                    <img src={activities.newsBanner} alt='newsbanner' className='newsBanner'/>
                </span>

                <div className='contentHead'>
                    <span>
                        <img src={activities.sourceLogo} alt='source' className='avatar'/>
                    </span>
                    <span className='time'>
                        {activities.timeStamp}
                    </span>
                </div>

                <div className='contentBody'>
                    <h3>{activities.newsHead}</h3>

                    <p>{activities.newsBody}</p>
                    <p className='newsMore'>{activities.newsMore}</p>
                </div>

                <div className='moreIcon'>
                    <a href={activities.newsSource}>
                        Read More
                    </a>
                </div>
            </div>
        </div>
        )
    }
}

const activities=[
    {
        newsTag: 'Culture',
        newsBanner: '../assets/Bkh3f1d2U.jpeg',
        timeStamp: new Date().getTime(),
        sourceLogo: '../logo192.png',
        
        id:1,
        newsHead: 'China places Nigeria on ebay',
        newsBody: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        newsMore: "Here goes the read more part, its just text that means nothing.",
        newsSource: 'http://www.cnn.com'   
    },
    {
        newsTag: 'Politics',
        newsBanner: '../assets/Hk8Xr1u2L.jpeg',
        timeStamp: new Date().getTime(),
        sourceLogo: '../logo512.png',

        id:2,
        newsHead: 'Law and Order Fails, Again.',
        newsBody: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        newsMore: "Here goes the read more part, its just text that means nothing."
    },

    {
        newsTag: 'International',
        newsBanner: '../assets/S13V4JuhL.jpeg',
        timeStamp: new Date().getTime(),
        sourceLogo: '../logo512.png',

        id:3,
        newsHead: 'Nigeria fails its Citizenry.',
        newsBody: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        newsMore: "Here goes the read more part, its just text that means nothing."
    },

    {
        newsTag: 'Lifestyle',
        newsBanner: '../assets/r1ZFVyO3U.jpeg',
        timeStamp: new Date().getTime(),
        sourceLogo: '../logo512.png',

        id:4,
        newsHead: 'Lagos is a failing state.',
        newsBody: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        newsMore: "Here goes the read more part, its just text that means nothing."
    }
    
]

export default News;