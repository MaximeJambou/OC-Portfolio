import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

import "./Gallery.scss";

// Initialisation de l'état local avec une valeur de tableau vide
const Gallery = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projets.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Erreur lors du chargement des projets", error));
    }, []);

    return (
        <div className="gallery">
            {projects.map((project) => (
            <Link to={`/projet/${project.id}`} key={project.id}>
                <Card project={project} />
            </Link>
        ))}
        </div>
    );
};

export default Gallery;