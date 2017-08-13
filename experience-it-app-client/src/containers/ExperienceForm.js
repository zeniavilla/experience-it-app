import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateExperienceFormData } from '../actions/experienceFormActions';
import { createExperience } from '../actions/experienceActions';
import './ExperienceForm.css'

class ExperienceForm extends Component {

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
            <div className="form-main">
                <h1>Pitch an experience</h1>
                <div className="form-body">As you write, remember that Experience It users are some of the most novelty-driven, curious, adventure-seekers. We showcase the best LA has to offer. Share your unique experience.</div>

                <form className="experience-form" onSubmit={this.handleOnSubmit}>

                    <label htmlFor="name"><h2>What is the experience?</h2></label>
                    <div className="form-field">
                        <input type="textarea" name="name" id="name" placeholder="Downtown LA Art Walk" value={name} onChange={this.handleOnChange} />
                    </div>

                    <label htmlFor="category"><h2>Select a category</h2></label>
                    <div className="form-field-select">
                        <select name="category" id="category" value={category} placeholder="Nature" onChange={this.handleOnChange}>
                            <option value="arts">Arts</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="food-drink">Food & Drink</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="nature">Nature</option>
                            <option value="social-impact">Social Impact</option>
                            <option value="technology">Technology</option>
                            <option value="business">Business</option>
                            <option value="fashion">Fashion</option>
                            <option value="history">History</option>
                            <option value="music">Music</option>
                            <option value="nightlife">Nightlife</option>
                            <option value="sports">Sports</option>
                            <option value="wellness">Wellness</option>
                        </select>
                    </div>

                    <label htmlFor="location"><h2>Where is it located?</h2></label>
                    <div className="form-field">
                        <input type="text" name="location" id="location" placeholder="Financial District" value={location} onChange={this.handleOnChange} />
                    </div>

                    <label htmlFor="time"><h2>How long does it take?</h2></label>
                    <div className="form-field">
                        <input type="text" name="time" id="time" placeholder="3 hours" value={time} onChange={this.handleOnChange} />
                    </div>

                    <label htmlFor="recommended_times"><h2>What's the best time to do this?</h2></label>
                    <div className="form-field-select">
                        <select name="recommended_times" id="recommended_times" value={recommended_times} onChange={this.handleOnChange}>
                            <option value="anytime">Any time</option>
                            <option value="daytime">Day</option>
                            <option value="nighttime">Night</option>
                        </select>
                    </div>

                    <label htmlFor="img_url"><h2>Add an image URL</h2></label>
                    <div className="form-field">
                        <input type="url" name="img_url" id="img_url" placeholder="www.awesome-picture.com/art.jpg" value={img_url} onChange={this.handleOnChange} />
                    </div>

                    <div className="form-action">
                        <button className="btn-form" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { experienceFormData: state.experienceFormData }
}

export default connect (mapStateToProps, { updateExperienceFormData, createExperience })(ExperienceForm);