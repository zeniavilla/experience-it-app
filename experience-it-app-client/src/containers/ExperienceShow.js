import React from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Image } from 'react-bootstrap';

import './ExperienceShow.css'


const ExperienceShow = ({ experience }) => {

const backgroundStyle ={
    backgroundImage: `url(${experience.img_url})`
};

    return (
    <div className="experience-show-main clearfix">
        <Col xs={6}>
            <h1>{experience.name}</h1>
            <h4>{experience.location}</h4>

            <div className="experience-show-text category">{experience.category} experience</div>

            <div className="experience-show-text body-text">{experience.time} total</div>

            <div className="experience-show-text body-text">
                Recommended time:
                <div>{experience.recommended_times}</div>
            </div>
            
            

            <div className="experience-show-text">♥ 0 likes</div>
            
        </Col>
        
        <Col xs={6}>
            <Grid className="show-img" style={backgroundStyle} fluid>
                {/* <Image src={experience.img_url} /> */}
            </Grid> 
        </Col>

    </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const experience = state.experiences.find(experience => experience.id == ownProps.match.params.experienceId)

    return (experience)
    ? { experience }
    : { experience: {} }
}

export default connect (mapStateToProps)(ExperienceShow);