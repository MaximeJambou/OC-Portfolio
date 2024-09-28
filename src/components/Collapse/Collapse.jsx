import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrowUp from "../../assets/images/arrow_up.png";

import "./Collapse.scss";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-title" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img src={arrowUp} alt="Toggle" className={isOpen ? "rotate" : ""} />
            </div>
            <div className="collapse-content">
                {children}
            </div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Collapse;