import React from 'react';
import { Image, Grid } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../font-awesome-4.7.0/css/font-awesome.css'

const Experience = props => {

    const { id, name, location, img_url, likes, liked } = props.experience;
    const handleOnClick = props.handleOnClick;

    return (
        <div>
            <NavLink to={`/experiences/${id}`}>
                <div className="experience-card" key={id}>
                    <Grid className="experience-img-wrapper" fluid>    
                        <Image src={img_url} alt={name} /> 
                    </Grid>
                    <h2>{name}</h2>
                    <h4>{location}</h4>
                    <h4><span className="change-icon" onClick={handleOnClick}>
                        { (liked)
                        ? <i id={id} className="fa fa-heart"></i>
                        : <i id={id} className="fa fa-heart-o"></i>
                        }
                    </span>
                    {likes} likes
                    </h4>
                </div>
            </NavLink>
        </div>
    )
}

export default Experience;