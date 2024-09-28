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
                text="Bonjour et bienvenue ! Je suis un développeur spécialisé dans la création d'applications web modernes et innovantes. J'aime relever des défis techniques, qu'il s'agisse de concevoir des interfaces dynamiques, de mettre en place des systèmes complexes, ou d'améliorer l'expérience utilisateur. Mon expertise s'étend sur des technologies comme JavaScript, React, et WordPress, me permettant de créer des solutions web efficaces, à la fois esthétiques et fonctionnelles. Découvrez mes projets ci-dessous pour en savoir plus sur mon travail et mon approche." 
            />
            <h2 className="projects-title">Mes projets</h2>
            <Gallery />
        </>
    );
};

export default Home;
