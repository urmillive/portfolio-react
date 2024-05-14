// import PropTypes from 'prop-types';
import './Project.css';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProjectCard = () => {
    const fallbackImageUrl = 'https://via.placeholder.com/400x200';
    const avtarImageUrl = 'https://via.placeholder.com/100';
    const projectDetail = useSelector(state => state.projectDetail.projectDetail);
    console.log(projectDetail);
    return (
        <Card height={ 300 } className="card card-custom bg-white shadow" border='secondary'>
            <Card.Img variant="top" src={ projectDetail.bannerUrl || avtarImageUrl } />
            <div className="card-custom-avatar">
                <img className="project-logo rounded-circle" width={ 100 } height={ 100 } src={ projectDetail.logoUrl || fallbackImageUrl } alt="Avatar" />
            </div>
            <Card.Body className="">
                <Card.Title>{ projectDetail.title }</Card.Title>
                <Card.Text>{ projectDetail.description }</Card.Text>
            </Card.Body>
        </Card>
    );
};

// ProjectCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     logoUrl: PropTypes.string.isRequired,
//     bannerUrl: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
// };

export default ProjectCard;
