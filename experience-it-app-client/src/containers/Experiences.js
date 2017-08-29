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

        this.state = {
            experiences: []
        }
    }

    componentDidMount = () => {
        // this.props.getExperiences();
        fetch(`${process.env.REACT_APP_API_URL}/experiences`)
            .then(response => response.json())
            .then(experiences => this.setState({ experiences: experiences }))
    }

    handleOnClick = event => {
        event.preventDefault();
        const experiences = this.state.experiences

        for (var i in experiences) {
            if (experiences[i].id == event.target.id) {
                experiences[i].likes += 1;
                break;
            }
        }

        this.setState({experiences: experiences})
    }
    
    render() {
        let renderExperiences = this.state.experiences
            .sort((a, b) => {
                if (a.likes > b.likes) {
                    return -1;
                } else if (a.likes < b.likes) {
                    return 1;
                } else {
                    return 0;
                }
            })
            .map(experience =>
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