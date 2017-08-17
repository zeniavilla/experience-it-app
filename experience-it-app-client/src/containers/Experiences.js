import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './Experience.css';
import Experience from '../components/Experience';
import ExperienceShow from '../containers/ExperienceShow';

import { getExperiences, likeExperience } from '../actions/experienceActions';

class Experiences extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getExperiences();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.experience.updated_at !== this.props.experience.updated_at) {
        this.props.getExperiences();
        }
    }

    handleOnClick = event => {
        event.preventDefault();
        
        let experienceId = event.target.id;
        let experience = this.props.experiences.find(experience => experience.id == experienceId)

        this.props.likeExperience(experience);
    }
    
    render() {
        let renderExperiences = this.props.experiences.map(experience =>
            <Experience key={experience.id} experience={experience} handleOnClick={this.handleOnClick} />)

        return (
            <Switch>
            <Route path="/experiences/:experienceId" component={ExperienceShow} />
                
                <div className="clearfix">
                    {renderExperiences}
                </div>
            </Switch>
        )
    }
};

const mapStateToProps = state => {
    return ({ 
        experiences: state.experiences,
        experience: state.currentExperience 
    })
}

export default connect (mapStateToProps, { getExperiences, likeExperience })(Experiences);