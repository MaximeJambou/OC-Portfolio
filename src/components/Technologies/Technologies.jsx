import React from 'react';
import "./Technologies.scss";

import HtmlIcon from '../../assets/icons/html.webp';
import JavascriptIcon from '../../assets/icons/javascript.webp';
import ReactIcon from '../../assets/icons/react.png';
import WordpressIcon from '../../assets/icons/wordpress.webp';
import CssIcon from '../../assets/icons/css.webp';
import GitIcon from '../../assets/icons/git.png';

const Technologies = () => {
    return (
        <div className="technologies">
            <img src={HtmlIcon} alt="HTML" className="technologies__icon" />
            <img src={CssIcon} alt="CSS" className="technologies__icon" />
            <img src={JavascriptIcon} alt="JavaScript" className="technologies__icon" />
            <img src={ReactIcon} alt="React" className="technologies__icon" />
            <img src={GitIcon} alt="Git" className="technologies__icon" />
            <img src={WordpressIcon} alt="WordPress" className="technologies__icon" />
        </div>
    );
};

export default Technologies;
