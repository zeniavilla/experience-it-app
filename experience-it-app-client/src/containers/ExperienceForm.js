import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateExperienceFormData } from '../actions/experienceFormActions';
import { createExperience } from '../actions/experienceActions';

class ExperienceForm extends Component {

    handleOnChange = (event) => {
        const { name, value } = event.target;
        const currentExperienceFormData = Object.assign({}, this.props.experienceFormData, {
            [name]: value
        })
        this.props.updateExperienceFormData(currentExperienceFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createExperience(this.props.experienceFormData)
    }

    render() {
        const { name, category, location, time, recommended_times, img_url } = this.props.experienceFormData;

        return (
            <form className="experience-form" onSubmit={this.handleOnSubmit}>
                <div className="form-field">
                    <input type="text" name="name" placeholder="Experience title" value={name} onChange={this.handleOnChange} />
                </div>

                <div className="form-field">
                    <input type="text" name="category" placeholder="Category" value={category} onChange={this.handleOnChange} />
                </div>

                <div className="form-field">
                    <input type="text" name="location" placeholder="Location" value={location} onChange={this.handleOnChange} />
                </div>

                <div className="form-field">
                    <input type="text" name="time" placeholder="Duration" value={time} onChange={this.handleOnChange} />
                </div>

                <div className="form-field-select">
                    <select name="recommended_times" value={recommended_times} onChange={this.handleOnChange}>
                        <option value="daytime">Daytime</option>
                        <option value="nighttime">Nighttime</option>
                    </select>
                </div>

                <div className="form-field">
                    <input type="url" name="img_url" placeholder="Image URL" value={img_url} onChange={this.handleOnChange} />
                </div>

                <div className="form-action">
                    <button type="submit">Add Experience</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return { experienceFormData: state.experienceFormData }
}

export default connect (mapStateToProps, { updateExperienceFormData, createExperience })(ExperienceForm);