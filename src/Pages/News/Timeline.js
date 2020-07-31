import React, {Component} from 'react';
import ContentBuild from './ContentBuild';

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


export default TimelineContent;