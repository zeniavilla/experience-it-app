import React from 'react';

const Experience = (props) =>
    <div className="experience-card" key={props.experience.id}>
        <div className="experience-img-wrapper">
            <img src={props.experience.img_url} alt={props.experience.name} />
        </div>
        <h2>{props.experience.name}</h2>
        <h4>{props.experience.location}</h4>
        <h4>♥ 0 likes</h4>
    </div>

export default Experience;