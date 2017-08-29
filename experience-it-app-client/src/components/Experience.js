import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import Pluralize from 'react-pluralize';
import { NavLink } from 'react-router-dom';

import '../font-awesome-4.7.0/css/font-awesome.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            likes: 0
        }
    }

    handleOnClick = event => {
        event.preventDefault();
        this.setState({likes: this.state.likes + 1})

    }
    
    render() {
        const { id, name, location, img_url, likes, liked } = this.props.experience;
        const handleOnClick = this.props.handleOnClick;
    
        const backgroundStyle = {
            backgroundImage: `url(${img_url})`
        };
        
    return (
        <div>
            <Col xs={2}>
            <NavLink to={`/experiences/${id}`}>
                <div className="experience-card" id={`experience-${id}`} key={id}>
                    <Grid className="experience-img-wrapper" style={backgroundStyle} fluid></Grid> 
                    <h2>{name}</h2>
                    <h4>{location}</h4>
                    {/* <h4><span className="change-icon">
                        { (liked)
                        ? <i id={id} className="fa fa-heart"></i>
                        : <i id={id} className="fa fa-heart-o"></i>
                        }
                    </span>
                    <Pluralize singular="like" plural="likes" count={likes} />
                    </h4> */}


                    <h4 onClick={handleOnClick}>
                        { (likes > 0)
                        ? <i id={id} className="fa fa-heart"></i>
                        : <i id={id} className="fa fa-heart-o"></i>
                        }
                        {likes} likes
                    </h4>
                </div>
            </NavLink>
            </Col>
        </div>
    )
}
}

export default Experience;