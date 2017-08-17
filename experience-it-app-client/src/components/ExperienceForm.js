import React from 'react';

import { Grid, Col } from 'react-bootstrap';

import '../font-awesome-4.7.0/css/font-awesome.css'
import './ExperienceForm.css'

const ExperienceForm = props => {
    
    const { name, category, location, time, recommended_times, img_url } = props.experienceFormData;

    return (
        <Grid className="form-main" fluid>
            <Col xs={4}>
                <h1>Pitch an experience</h1>
                <div className="form-body">As you write, remember that Experience It users are some of the most novelty-driven, curious, adventure-seekers. We strive to showcase the best LA has to offer, whether it's hikes with scenic views, the best places to bike ride, or the newest food festivals. Share your unique experience.</div>

                <form className="experience-form" onSubmit={props.handleOnSubmit}>

                    <label htmlFor="name"><h2>What's the experience?</h2></label>
                    <div className="form-field">
                        <input type="textarea" name="name" id="name" placeholder="Downtown LA Art Walk" value={name} onChange={props.handleOnChange} />
                    </div>

                    <label htmlFor="category"><h2>Select a category</h2></label>
                    <div className="form-field-select">
                        <select name="category" id="category" value={category} onChange={props.handleOnChange}>
                            {['Arts', 'Entertainment', 'Food & Drink', 'Lifestyle', 'Nature', 'Social Impact', 'Technology', 'Business', 'Fashion', 'History', 'Music', 'Nightlife', 'Sports', 'Wellness'].sort().map(category => {
                                return <option key={category}>{category}</option>
                                })
                            }
                        </select>
                    </div>

                    <label htmlFor="location"><h2>Where's it located?</h2></label>
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
                        <button className="btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </Col>
            
            <Col xs={2} className="form-sidebar">
                <i className="fa fa-eye"></i>
                <h2>Perspective</h2>
                <div className="form-body">Users learn about your unique point of view and can gain a fresh outlook.</div>
                            
                <i className="fa fa-handshake-o"></i>
                <h2>Credibility</h2>
                <div className="form-body">You’re passionate and deeply knowledgeable about the experience’s theme.</div>

                <i className="fa fa-ticket"></i>
                <h2>Insight</h2>
                <div className="form-body">You can provide behind-the-scenes insight to people, places, or activities that a user couldn’t find on their own.</div>
            </Col>
        </Grid>
    )
}

export default ExperienceForm;