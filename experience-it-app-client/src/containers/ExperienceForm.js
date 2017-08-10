import React, { Component } from 'react';

class ExperienceForm extends Component {
    render() {
        return (
            <form className="experience-form">
                <div className="form-field">
                    <input type="text" name="name" placeholder="Experience title" />
                </div>

                <div className="form-field">
                    <input type="text" name="category" placeholder="Category" />
                </div>

                <div className="form-field">
                    <input type="text" name="location" placeholder="Location" />
                </div>

                <div className="form-field">
                    <input type="text" name="time" placeholder="Duration" />
                </div>

                <div className="form-field-select">
                    <select name="recommended_times">
                        <option value="daytime">Daytime</option>
                        <option value="nighttime">Nighttime</option>
                    </select>
                </div>

                <div className="form-field">
                    <input type="url" name="img_url" placeholder="Image URL" />
                </div>

                <div className="form-action">
                    <button>Add Experience</button>
                </div>
            </form>
        )
    }
}

export default ExperienceForm;