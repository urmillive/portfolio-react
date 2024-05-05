import ProjectCard from './Projectcard'; // Import the ProjectCard component
import './Project.css'; // Import your CSS file
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = () => {
    const projects = [
        {
            title: 'Project 1',
            logoUrl: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-1024.png',
            bannerUrl: 'https://www.freecodecamp.org/news/content/images/size/w2000/2024/03/React-JS-Hooks.png',
            description: 'Some quick example text to build on the card title and make up the Description of Project 1',
        },
        {
            title: 'Project 2',
            logoUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
            bannerUrl: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/8560a1a8184de8e84b512bb2a47b7e77?_a=AQAEufR',
            description: 'Description of Project 2',
        },
        {
            title: 'Project 3',
            logoUrl: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png',
            bannerUrl: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/6a90d602f5b9a06428b561f8995c57ed?_a=AQAEufR',
            description: 'Description of Project 2',
        },
        {
            title: 'Project 3',
            logoUrl: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png',
            bannerUrl: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/6a90d602f5b9a06428b561f8995c57ed?_a=AQAEufR',
            description: 'Description of Project 2',
        },
        {
            title: 'Project 3',
            logoUrl: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png',
            bannerUrl: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/6a90d602f5b9a06428b561f8995c57ed?_a=AQAEufR',
            description: 'Description of Project 2',
        },
    ];

    return (
        <Container>
            <h2 className="project-header-title">Projects</h2>
            <Row className="my-5">
                { projects.map((project, index) => (
                    <Col lg={ 3 } md={ 3 } sm={ 12 } key={ index }>
                        <Link to={ `/projects/${ index + 1 }` } className='text-decoration-none'>
                            <ProjectCard
                                title={ project.title }
                                logoUrl={ project.logoUrl }
                                bannerUrl={ project.bannerUrl }
                                description={ project.description }
                            />
                        </Link>
                    </Col>
                )) }
            </Row>
        </Container>
    );
};

export default Project;
