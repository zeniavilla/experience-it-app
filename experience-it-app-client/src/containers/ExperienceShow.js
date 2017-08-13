import React from 'react';
import { connect } from 'react-redux';

const ExperienceShow = ({ experience }) => 
    <div>
        <img src="http://ghk.h-cdn.co/assets/16/09/980x490/landscape-1457107485-gettyimages-512366437.jpg" />
        <h3>Work? {experience.name}</h3>
    </div>


const mapStateToProps = (state, ownProps) => {
    const experience = state.experiences.find(experience => experience.id == ownProps.match.params.experienceId)

    if (experience) {
        return { experience }
    } else {
        return { experience: {} }
    }
}

export default connect (mapStateToProps)(ExperienceShow);