import React from 'react';
import "./About.scss";

import Trainings from '../../components/Trainings/Trainings';
import Technologies from '../../components/Technologies/Technologies';

const About = () => {
    return (
        <>
            <h2>Mon parcours</h2>
            <div className="about-me">
                <p className="about-me__description">
                    Après une expérience commerciale dans le secteur de l'assurance et de la cigarette électronique, j'ai décidé de me lancer dans le développement web. J'ai toujours été fasciné par la technologie et la manière dont elle façonne notre quotidien. L'envie de créer, de résoudre des problèmes complexes, et de construire des applications qui font la différence m'ont poussé à m'orienter vers ce domaine. Aujourd'hui, je me forme activement pour devenir un développeur complet, capable de transformer des idées en solutions web concrètes et efficaces.
                </p>
            </div>
            <h2>Formations</h2>
            <Trainings />
            <h2>Compétences</h2>
            <Technologies/>

        </>
    );
};

export default About;
