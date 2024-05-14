import ProjectCard from './Projectcard';
import './Project.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setProjectDetail } from '../../features/projectDetailSlice';
import { useDispatch } from 'react-redux';

const Project = () => {

    const projects = [
        {
            title: 'TicTacToe Game',
            logoUrl: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-1024.png',
            bannerUrl: 'https://images.pexels.com/photos/3400795/pexels-photo-3400795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'Beginner Level Tic Tac Toe game',
        },
    ];

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
