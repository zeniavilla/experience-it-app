import React from 'react';
import Experience from '../components/Experience';
import './Experience.css';

const Experiences = props => {
    return <div>
        <h3>Experiences Component</h3>
        { props.experiences.map((experience, index) => <Experience key={index} experience={experience} /> )}
        
    </div>
};

export default Experiences;