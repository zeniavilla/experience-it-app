import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import '../font-awesome-4.7.0/css/font-awesome.css'

import './ExperienceShowItem.css'

const ExperienceShowItem = props => {
    
    const { name, location, category, time, recommended_times, img_url, likes } = props.experience;

    const backgroundStyle = {
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
                    <div className="recommended-times-icons">
                        {recommended_times === 'daytime' &&
                            <span className="fa fa-sun-o"></span>
                        }
                        {recommended_times === 'nighttime' &&
                            <span className="fa fa-moon-o"></span>
                        }
                        {recommended_times === 'daytime, nighttime' &&
                            <div>
                                <span className="fa fa-sun-o"></span><span className="fa fa-moon-o"></span>
                            </div>
                        }
                    </div>
                </div>

                <div className="experience-show-text">
                    <span className="fa fa-heart"></span> {likes} likes
                </div>
                
            </Col>
            
            <Col xs={6}>
                <Grid className="show-img" style={backgroundStyle} fluid></Grid> 
            </Col>

        </div>
    )
}

export default ExperienceShowItem;