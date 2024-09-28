import React from 'react';
import "./Trainings.scss";

const Trainings = () => {
    return (
        <div className="trainings">
            <div className="training">
                <h3 className="training__title">Licence de sociologie</h3>
                <p className="training__year">2018</p>
                <p className="training__institution">Nanterre Université</p>
            </div>
            <div className="training">
                <h3 className="training__title">Titre RNCP Intégrateur Web</h3>
                <p className="training__year">2024</p>
                <p className="training__institution">OpenClassrooms</p>
            </div>
        </div>
    );
};

export default Trainings;
