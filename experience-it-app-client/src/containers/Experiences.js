import React, { Component } from 'react';
import { connect } from 'react-redux';

import Experience from '../components/Experience';
import './Experience.css';
import { getExperiences } from '../actions/experienceActions';

class Experiences extends Component {

    componentDidMount() {
        this.props.getExperiences();
    }
    
    render() {
        return (
            <div className="experiences-main clearfix">
                 {this.props.experiences.map((experience, index) => <Experience key={index} experience={experience} />)} 
            </div>
        )
    }
};

const mapStateToProps = state => {
    return ({experiences: state.experiences})
}

export default connect (mapStateToProps, { getExperiences })(Experiences);