import React from 'react';
import './IntroBlock.scss'; 

const IntroBlock = ({ imageSrc, text }) => {
    return (
        <div className="intro-block">
            <img src={imageSrc} alt="Profile" className="intro-block__image" />
            <div className="intro-block__text">
                {text}
            </div>
        </div>
    );
};

export default IntroBlock;
