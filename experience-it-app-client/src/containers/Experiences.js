import React, { Component } from 'react';
import { connect } from 'react-redux';

import Experience from '../components/Experience';
import './Experience.css';
import ExperienceForm from '../containers/ExperienceForm';
import { getExperiences } from '../actions/experienceActions';

class Experiences extends Component {

    componentDidMount() {
        this.props.getExperiences();
    }
    
    render() {
        return (
            <div>
                <h3>Experiences Component</h3>
                <ExperienceForm />
                {this.props.experiences.map((experience, index) => <Experience key={index} experience={experience} />)}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return ({experiences: state.experiences})
}

export default connect (mapStateToProps, { getExperiences })(Experiences);