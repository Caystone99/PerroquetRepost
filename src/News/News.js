import React, {Component} from 'react';
import Constructor from'./Constructor';
import Footer from '../Pages/Menu/Footer';
import Tag from '../Pages/Assets/Tag';

import MenuContainer from '../Pages/Menu/MenuContainer';

class News extends Component{
    render(){
        
        return(
            <>
            <MenuContainer/>
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