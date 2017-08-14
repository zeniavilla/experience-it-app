import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ExperienceForm.css'
import ExperienceForm from '../components/ExperienceForm';

import { updateExperienceFormData } from '../actions/experienceFormActions';
import { createExperience } from '../actions/experienceActions';

class ExperienceNew extends Component {

    handleOnChange = event => {
        const { name, value } = event.target;
        
        const currentExperienceFormData = Object.assign({}, this.props.experienceFormData, {
            [name]: value
        })
        
        this.props.updateExperienceFormData(currentExperienceFormData);
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const { createExperience, history } = this.props;

        createExperience(this.props.experienceFormData);
        history.push('/experiences');
    }

    render() {
        const { name, category, location, time, recommended_times, img_url } = this.props.experienceFormData;

        return (
            <ExperienceForm experienceFormData={this.props.experienceFormData} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
        )
    }
}

const mapStateToProps = state => {
    return { experienceFormData: state.experienceFormData }
}

export default connect (mapStateToProps, { updateExperienceFormData, createExperience })(ExperienceNew);