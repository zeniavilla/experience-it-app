import React from 'react';

import './ExperienceForm.css'

const ExperienceForm = props => {
    
    const { name, category, location, time, recommended_times, img_url } = props.experienceFormData;

    return (
        <div className="form-main">
            <h1>Pitch an experience</h1>
            <div className="form-body">As you write, remember that Experience It users are some of the most novelty-driven, curious, adventure-seekers. We showcase the best LA has to offer. Share your unique experience.</div>

            <form className="experience-form" onSubmit={props.handleOnSubmit}>

                <label htmlFor="name"><h2>What is the experience?</h2></label>
                <div className="form-field">
                    <input type="textarea" name="name" id="name" placeholder="Downtown LA Art Walk" value={name} onChange={props.handleOnChange} />
                </div>

                <label htmlFor="category"><h2>Select a category</h2></label>
                <div className="form-field-select">
                    <select name="category" id="category" value={category} onChange={props.handleOnChange}>
                        {['Arts', 'Entertainment', 'Food & Drink', 'Lifestyle', 'Nature', 'Social Impact', 'Technology', 'Business', 'Fashion', 'History', 'Music', 'Nightlife', 'Sports', 'Wellness'].map(category => {
                            return <option key={category}>{category}</option>
                            })
                        }
                    </select>
                </div>

                <label htmlFor="location"><h2>Where is it located?</h2></label>
                <div className="form-field">
                    <input type="text" name="location" id="location" placeholder="Financial District" value={location} onChange={props.handleOnChange} />
                </div>

                <label htmlFor="time"><h2>How long does it take?</h2></label>
                <div className="form-field">
                    <input type="text" name="time" id="time" placeholder="3 hours" value={time} onChange={props.handleOnChange} />
                </div>

                <label htmlFor="recommended_times"><h2>What's the best time to do this?</h2></label>
                <div className="form-field-select">
                    <select name="recommended_times" id="recommended_times" value={recommended_times} onChange={props.handleOnChange}>
                        <option value="anytime">Any time</option>
                        <option value="daytime">Day</option>
                        <option value="nighttime">Night</option>
                    </select>
                </div>

                <label htmlFor="img_url"><h2>Add an image URL</h2></label>
                <div className="form-field">
                    <input type="url" name="img_url" id="img_url" placeholder="http://www.awesome-picture.com/art.jpg" value={img_url} onChange={props.handleOnChange} />
                </div>

                <div className="form-action">
                    <button className="btn-form" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExperienceForm;