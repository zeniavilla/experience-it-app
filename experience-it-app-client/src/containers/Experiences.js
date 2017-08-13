import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './Experience.css';
import Experience from '../components/Experience';
import ExperienceShow from '../containers/ExperienceShow';

import { getExperiences } from '../actions/experienceActions';

class Experiences extends Component {

    componentDidMount() {
        this.props.getExperiences();
    }
    
    render() {
        return (
            <div>
                <Switch>
                <Route path="/experiences/:experienceId" component={ExperienceShow} />
                    <div className="experiences-main clearfix">
                        {this.props.experiences.map((experience, index) => <Experience key={index} experience={experience} />)} 
                    </div>
                </Switch>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return ({experiences: state.experiences})
}

export default connect (mapStateToProps, { getExperiences })(Experiences);