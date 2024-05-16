import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import { useSelector } from 'react-redux';


const ProjectDetail = () => {
    const { id } = useParams();
    const projects = useSelector(state => state.projectDetail.projectDetail);
    const projectDetail = projects[ id - 1 ];
    const project = {
        id: id,
        title: projectDetail.title,
        description: projectDetail.description,
        logoUrl: projectDetail.logoUrl,
        bannerUrl: projectDetail.bannerUrl,
        githubLink: 'https://github.com/urmillive/TictactoeGameReact',
        visitLink: 'https://urmillive.github.io/TictactoeGameReact/'   
    };

    return (
        <div className="project-detail-container">
            <div className="project-banner">
                <img src={ project.bannerUrl } alt={ project.title } />
                <div className="project-detail-logo">
                    <img src={ project.logoUrl } alt="Logo" />
                </div>
            </div>
            <div className="project-details">
                <div className="project-info">
                    <h1 className="project-title">{ project.title }</h1>
                    <p className="project-description">{ project.description }</p>
                </div>
                <div className="project-buttons">
                    <a href={ project.githubLink } className="btn btn-dark" target="_blank" rel="noopener noreferrer">View Source Code</a>
                    <a href={ project.visitLink } className="btn btn-warning" target="_blank" rel="noopener noreferrer">View Live Project</a>
                </div>
            </div>
        </div>
    );
};
export default ProjectDetail;
