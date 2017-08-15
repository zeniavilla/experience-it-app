import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './Experience.css';
import Experience from '../components/Experience';
import ExperienceShow from '../containers/ExperienceShow';

import { getExperiences, getExperienceItem, likeExperience } from '../actions/experienceActions';

class Experiences extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getExperiences();
    }

    handleOnClick = (event) => {
        event.preventDefault();
        
        const experienceId = event.target.id;
        const experience = this.props.experiences.find(experience => experience.id == experienceId)

        // this.props.getExperienceItem(experienceId);
        this.props.likeExperience(experience);
    }
    
    render() {
        return (
            <div>
                <Switch>
                <Route path="/experiences/:experienceId" component={ExperienceShow} />
                    <div className="experiences-main clearfix">
                        {this.props.experiences.map((experience, index) => <Experience key={index} experience={experience} handleOnClick={this.handleOnClick} />)} 
                    </div>
                </Switch>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return ({
        experiences: state.experiences,
        experience: state.currentExperience
    })
}

export default connect (mapStateToProps, { getExperiences, getExperienceItem, likeExperience })(Experiences);