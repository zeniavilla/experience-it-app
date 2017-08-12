import React from 'react';
import { Image, Grid } from 'react-bootstrap';

const Experience = (props) =>
    <div className="experience-card" key={props.experience.id}>
        <Grid className="experience-img-wrapper" fluid>    
            <Image src={props.experience.img_url} alt={props.experience.name} /> 
        </Grid>
        <h2>{props.experience.name}</h2>
        <h4>{props.experience.location}</h4>
        <h4>♥ 0 likes</h4>
    </div>

export default Experience;