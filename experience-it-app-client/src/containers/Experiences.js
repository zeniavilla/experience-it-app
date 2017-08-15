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

    componentDidMount() {
        this.props.getExperiences();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return (nextProps.experiences.length > this.props.experiences.length || nextProps.experience.length !== this.props.experience.length)
    }

    componentDidUpdate() {
        this.props.getExperiences();
    }

    handleOnClick = (event) => {
        event.preventDefault();
        
        const experienceId = event.target.id;
        const experience = this.props.experiences.find(experience => experience.id == experienceId)

        this.props.likeExperience(experience);
    }
    
    render() {
        const renderExperiences = this.props.experiences.map(experience => 
            <Experience key={experience.id} experience={experience} handleOnClick={this.handleOnClick} />)

        return (
            <div>
                <Switch>
                <Route path="/experiences/:experienceId" component={ExperienceShow} />
                    <div className="experiences-main clearfix">
                        {renderExperiences}
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

export default connect (mapStateToProps, { getExperiences, likeExperience })(Experiences);