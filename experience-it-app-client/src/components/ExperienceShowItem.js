import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import './ExperienceShowItem.css'

const ExperienceShowItem = props => {
    
    const { name, location, category, time, recommended_times, img_url } = props.experience;

    const backgroundStyle ={
        backgroundImage: `url(${img_url})`
    };

    return (
        <div className="experience-show-main clearfix">
            <Col xs={6}>
                <h1>{name}</h1>
                <h4>{location}</h4>

                <div className="experience-show-text category">{category} experience</div>

                <div className="experience-show-text body-text">{time} total</div>

                <div className="experience-show-text body-text">
                    Recommended time:
                    <div>{recommended_times}</div>
                </div>

                <div className="experience-show-text">♥ 0 likes</div>
                
            </Col>
            
            <Col xs={6}>
                <Grid className="show-img" style={backgroundStyle} fluid></Grid> 
            </Col>

        </div>
    )
}

export default ExperienceShowItem;