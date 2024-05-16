import PropTypes from 'prop-types';
import './Project.css';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
    const fallbackImageUrl = 'https://via.placeholder.com/400x200';
    const avtarImageUrl = 'https://via.placeholder.com/100';
    return (
        <Card height={ 300 } className="card card-custom bg-white shadow" border='secondary'>
            <Card.Img variant="top" src={ project.bannerUrl || avtarImageUrl } />
            <div className="card-custom-avatar">
                <img className="project-logo rounded-circle" width={ 100 } height={ 100 } src={ project.logoUrl || fallbackImageUrl } alt="Avatar" />
            </div>
            <Card.Body className="">
                <Card.Title>{ project.title }</Card.Title>
                <Card.Text>{ project.description }</Card.Text>
            </Card.Body>
        </Card>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        logoUrl: PropTypes.string.isRequired,
        bannerUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
};


export default ProjectCard;
