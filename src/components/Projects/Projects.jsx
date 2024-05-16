import ProjectCard from './Projectcard';
import './Project.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setProjectDetail } from '../../features/projectDetailSlice';
import { useDispatch } from 'react-redux';
import projects from '../../projectsData';

const Project = () => {

    const dispatch = useDispatch();

    const handleCardClick = (project) => {
        dispatch(setProjectDetail(project));
    };

    return (
        <Container>
            <h2 className="project-header-title">Projects</h2>
            <Row className="my-5">
                { projects.map((project, index) => (
                    <Col lg={ 3 } md={ 3 } sm={ 12 } key={ index }>
                        <Link to={ `/projects/${ index + 1 }` } className='text-decoration-none'>
                            <ProjectCard
                                project={ project }
                                onClick={ () => { handleCardClick(project) } }
                            />
                        </Link>
                    </Col>
                )) }
            </Row>
        </Container>
    );
};

export default Project;
