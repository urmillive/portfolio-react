import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();

    const project = {
        id: id,
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis suscipit lorem. Nullam sagittis velit in justo hendrerit tincidunt. Vestibulum malesuada, magna nec ullamcorper venenatis, arcu tortor pharetra sapien, at rhoncus orci eros at elit. Sed non ante eu urna consequat malesuada. Proin et odio eu elit bibendum tristique.',
        logoUrl: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png',
        bannerUrl: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/6a90d602f5b9a06428b561f8995c57ed?_a=AQAEufR',
        githubLink: 'https://github.com/username/project',
        visitLink: 'https://example.com/project'
    };

    return (
        <div className="project-detail-container">
            <div className="project-banner">
                <img src={ project.bannerUrl } alt={ project.title } />
            </div>
            <div className="project-details">
                <div className="project-info">
                    <h1 className="project-title">{ project.title }</h1>
                    <p className="project-description">{ project.description }</p>
                </div>
                <div className="project-buttons">
                    <a href={ project.githubLink } className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Source Code</a>
                    <a href={ project.visitLink } className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">View Live Project</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
