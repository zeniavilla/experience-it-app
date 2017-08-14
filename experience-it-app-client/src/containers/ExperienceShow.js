import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExperienceShowItem from '../components/ExperienceShowItem';

import { getExperienceItem } from '../actions/experienceActions';

class ExperienceShow extends Component {

    componentDidMount = () => {
        const experienceId = this.props.match.params.experienceId;
        this.props.getExperienceItem(experienceId);
    }

    render() {
        return <ExperienceShowItem experience={this.props.experience} />
    }
}

const mapStateToProps = state => {
    return ({experience: state.currentExperience})
}

export default connect (mapStateToProps, { getExperienceItem })(ExperienceShow);