import React from 'react';
import PropTypes from 'prop-types';

import "./Card.scss";

const Card = ({ project }) => {
    return (
        <div className="card">
        <img src={project.cover} alt={project.title} />
        <h2>{project.title}</h2>
        </div>
    );
};

Card.propTypes = {
    project: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default Card;