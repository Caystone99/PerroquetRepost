import React, {Component} from 'react';
import Constructor from'./Constructor';
import Header from '../Pages/Menu/Header';
import Footer from '../Pages/Menu/Footer';
import Tag from '../Pages/Assets/Tag';
class News extends Component{
    render(){
        
        return(
            <>
            <Header
                HeaderTitle='../logo3.png'
            />
            <Tag
                tag = 'Top Stories' 
            />
            <Constructor/>
            <Footer/>
        </>
        );
    }
}

export default News;