import { useParams, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import "./ProjectPage.scss";

import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';

function ProjectPage() {
    const { id } = useParams();
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/projets.json')
            .then(response => response.json())
            .then(data => {
                const selectedProject = data.find(project => project.id === id);
                if (selectedProject) {
                    setProjectData(selectedProject);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors du chargement des données du logement', error);
                setLoading(false);
            });
    }, [id]);



    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (projectData === null) {
        return <Navigate replace to="/404" />;
    }

    // Rendre le composant normalement si les données sont présentes
    return (
        <div className='project-page'>
            <Slideshow slides={projectData.pictures} />
            <div className='project-info'>
                <div className='project-info__title'>
                    <h1>{projectData.title}</h1>
                    <div className='project-info__title--tags'>
                        {projectData.tags.map(tag => (
                            <Tag key={tag} tag={tag} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='project-collapses'>
                <div className="project-collapses__container">
                    <Collapse title="Description" >
                        {projectData.description}
                    </Collapse>
                </div>
                <div className="project-collapses__container">
                    <Collapse title="Découvrir" >
                        {projectData.websites.map((website, index) => (
                            <a key={index} href={website} target="_blank" rel="noopener noreferrer">
                            {website}
                            </a>
                        ))}
                    </Collapse>
                </div>     
            </div>
            

        </div>
    );
}

export default ProjectPage;
