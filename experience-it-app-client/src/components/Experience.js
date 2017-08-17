import React from 'react';
import { Image, Grid, Col } from 'react-bootstrap';
import Pluralize from 'react-pluralize';
import { NavLink } from 'react-router-dom';

import '../font-awesome-4.7.0/css/font-awesome.css';

const Experience = props => {

    const { id, name, location, img_url, likes, liked } = props.experience;

    const backgroundStyle = {
        backgroundImage: `url(${img_url})`
    };

    const handleOnClick = props.handleOnClick;

    return (
        <div>
            <Col xs={2}>
            <NavLink to={`/experiences/${id}`}>
                <div className="experience-card" id={`experience-${id}`} key={id}>
                    <Grid className="experience-img-wrapper" style={backgroundStyle} fluid></Grid> 
                    <h2>{name}</h2>
                    <h4>{location}</h4>
                    <h4><span className="change-icon" onClick={handleOnClick}>
                        { (liked)
                        ? <i id={id} className="fa fa-heart"></i>
                        : <i id={id} className="fa fa-heart-o"></i>
                        }
                    </span>
                    <Pluralize singular="like" plural="likes" count={likes} />
                    </h4>
                </div>
            </NavLink>
            </Col>
        </div>
    )
}

export default Experience;