import PropTypes from 'prop-types';
import './Project.css';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, logoUrl, bannerUrl, description }) => {
    const fallbackImageUrl = 'https://via.placeholder.com/400x200';
    const avtarImageUrl = 'https://via.placeholder.com/100';
    const handleCardClick = () => {

    }
    return (
        <Card height={ 300 } className="card card-custom bg-white shadow" border='secondary' onClick={ handleCardClick }>
            <Card.Img variant="top" src={ bannerUrl || avtarImageUrl } />
            <div className="card-custom-avatar">
                <img className="project-logo rounded-circle" width={ 100 } height={ 100 } src={ logoUrl || fallbackImageUrl } alt="Avatar" />
            </div>
            <Card.Body className="">
                <Card.Title>{ title }</Card.Title>
                <Card.Text>{ description }</Card.Text>
            </Card.Body>
        </Card>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    bannerUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ProjectCard;
