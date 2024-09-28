import React from 'react';
import "./Home.scss";

import ProfilePicture from "../../assets/images/ProfilePicture.webp";

import IntroBlock from '../../components/IntroBlock/IntroBlock';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => {
    return (
        <>
            <IntroBlock 
                imageSrc={ProfilePicture}
                text="Bonjour, je suis un développeur passionné par les technologies web modernes. Découvrez mes projets ci-dessous !" 
            />
            <Gallery />
        </>
    );
};

export default Home;
