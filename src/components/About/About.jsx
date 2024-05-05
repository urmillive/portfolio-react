import { Link } from "react-router-dom"
import './About.css';
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Container fluid className="my-5">
                <Row className="my-5">
                    <Col lg={ 6 } md={ 6 } sm={ 12 } className="d-flex flex-column justify-content-center align-items-center">
                        <img className="mr-5 sde-image img-fluid" height={ 450 } width={ 'auto' } src="Image/designer.jpg" alt="" />
                        <Col lg={ 12 } md={ 12 } sm={ 12 } className="social_media_icon">
                            <Link
                                className="social_icons"
                                to="https://www.instagram.com/urmillive/"
                                target="_blank"
                            >
                                <i className="fab fa-instagram" />
                            </Link>
                            <Link
                                className="social_icons"
                                to="https://www.linkedin.com/in/urmillive"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </Link>
                            <Link className="social_icons" to="https://github.com/urmillive" target="_blank">
                                <i className="fab fa-github" aria-hidden="true" />
                            </Link>
                            <Link className="social_icons" to="https://stackoverflow.com/users/12697583/urmil-rupareliya" target="_blank">
                                <i className="fab fa-stack-overflow"></i>
                            </Link>

                            <Link className="social_icons" to="mailto:urmillive@gmail.com" target="_blank">
                                <i className="fab fa-google" aria-hidden="true" />
                            </Link>
                            <Link className="social_icons" to="https://www.youtube.com/@urmillive" target="_blank">
                                <i className="fab fa-youtube" aria-hidden="true" />
                            </Link>

                        </Col>
                    </Col>
                    <Col className="text-center my-5 d-flex flex-column align-items-start" lg={ 6 } md={ 6 } sm={ 12 }>
                        <h2 className="hello">
                            <span className='software-engineer display-1'>Software Engineer</span>
                        </h2>
                        <div className="d-flex d-flex flex-column align-items-center">
                            <img
                                className="Feature-svg-image img-fluid"
                                src="Image/Chess/chess-board.jpg"
                                alt=""
                                height={ 'auto' }
                                width={ 400 }
                            />
                            <h6 className="display-5 text-red fw-bold software-engineer-description">Chessboard to Codebase: Unveiling the Journey of a Software Engineer, Freelancer and Storyteller.</h6>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="my-5">
                <h1 className='display-4 text-center mb-5'>What I <span className='fw-bold'>do</span> Now days..</h1>
                <Row>
                    <Col lg={ { span: 6, offset: 1 } } md={ { span: 6 } } sm={ 6 } className="text-start">
                        <ul className="dev-icon d-flex justify-content-center">
                            <li>
                                <img className="language" src="Image/Icons/javascript.png" alt="" />
                            </li>
                            <li>
                                <img className="language" src="Image/Icons/typescript.png" alt="" />
                            </li>
                            <li>
                                <img className="language" src="Image/Icons/react.png" alt="" />
                            </li>
                            <li>
                                <img className="language" src="Image/Icons/angular.png" alt="" />
                            </li>
                            <li>
                                <img className="language" src="Image/Icons/tailwind.png" alt="" />
                            </li>
                            <li>
                                <img className="language" src="Image/Icons/node.png" alt="" />
                            </li>
                            <li>
                                <img className="language" src="Image/Icons/express.png" alt="" />
                            </li>
                            <li>
                                <img className="language" src="Image/Icons/mongodb.png" alt="" />
                            </li>
                        </ul>
                        <h1 className="Feature-Heading text-center my-5">Javascript, MERN stack</h1>
                        <div className="Data-Analytic text-left">
                            <p>
                                🔘 Developing small to large scalable and usable javascript,typescript fully fledged projects which can solve real world problems.
                            </p>
                            <p>
                                🔘 Experience of worked with various javascript Libraries.
                            </p>
                            <p>
                                🔘 Building full-stack web applications and implementing RESTful APIs.
                            </p>
                        </div>
                    </Col>
                    <Col lg={ { span: 4, offset: 1 } } md={ 6 } sm={ 6 } className="d-flex flex-column justify-content-center align-items-center">
                        <img
                            className="Feature-svg-image img-fluid"
                            src="Image/Javascript/js.png"
                            alt=""
                            height={ 400 }
                        />
                    </Col>
                </Row>
                <Row className="row feature-4 my-5">
                    <Col lg={ { span: 4, offset: 1 } } md={ 6 } sm={ 12 } className="d-flex flex-column justify-content-center align-items-center">
                        <img src="Image/headphone-guy.svg" className="img-fluid" width={ 500 } alt="" />
                    </Col>
                    <Col lg={ 6 } md={ 6 } sm={ 12 }>
                        <ul className="dev-icon d-flex justify-content-center my-5">
                            <li>
                                <i className="fab fa-html5 fa-5x" style={ { color: "#e34f26" } } />
                            </li>
                            <li>
                                <i className="fab fa-css3-alt fa-5x" style={ { color: "#1572b6" } } />
                            </li>
                            <li>
                                <i
                                    className="fab fa-bootstrap fa-5x"
                                    style={ { color: "#543b79" } }
                                />
                            </li>
                            <li>
                                <i
                                    className="fab fa-js-square fa-5x"
                                    style={ { color: "#f7df1e" } }
                                />
                            </li>
                            <li>
                                <i className="fab fa-react fa-5x" style={ { color: "#61dafb" } } />
                            </li>
                            <li>
                                <i className="fab fa-node fa-5x" style={ { color: "#679e63" } } />
                            </li>
                            <li>
                                <i className="fab fa-php fa-5x" style={ { color: "#543b70" } } />
                            </li>
                        </ul>
                        <h1 className="Feature-Heading text-center my-5">Web Development</h1>
                        <Col lg={ 12 } md={ { span: 10, offset: 2 } } sm={ 6 } className="text-start">
                            <p>
                                🔘 Building Fully responsive website front end using HTML, CSS,
                                Bootstrap and Javascript.
                            </p>
                            <p>
                                🔘 As of now I have knowledge only of front end but in near future I
                                will add more features to myself and excited to explore Kotlin,
                                Android,React,NodeJS and many more.
                            </p>
                            <p>
                                🔘 I have also used Canva, Abode Photoshop and Adobe XD to design
                                User interface of websites and mobile application and design of
                                logos.
                            </p>
                        </Col>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="my-5">
                <h1 className="display-4 text-center">What I <span className="fw-bold">did</span> Before ?</h1>
                <Row className="my-5 text-center">
                    <Col lg={ 6 } md={ 6 } sm={ 6 } className="d-flex flex-column justify-content-center align-items-center">
                        <img
                            className="android_banner img-fluid"
                            src="Image/android-developer.svg"
                            alt="android banner"
                            height={ 200 }
                        />
                    </Col>
                    <Col md={ 6 } sm={ 6 }>
                        <ul className="dev-icon">
                            <li>
                                <img className="android" src="Image/Icons/android-logo.svg" alt="" />
                            </li>
                        </ul>
                        <h1 className="text-center my-5">Android Programming</h1>
                        <Col lg={ 12 } md={ { span: 10 } } sm={ 6 } className="text-start">
                            <p>
                                🔘 Developed small and usable Java Android Apps.
                            </p>
                            <p>
                                🔘 Experience with XML and Flutter UI development. Made some cool projects using Android Java.
                            </p>
                            <p>
                                🔘 Proficient in debugging Android applications and integrating various APIs.
                            </p>
                        </Col>
                    </Col>
                </Row>
                <Row className="my-5 text-center">
                    <Col lg={ 6 } md={ 6 } sm={ 6 }>
                        <ul className="dev-icon d-flex justify-content-center">
                            <li>
                                <i className="fab fa-python fa-5x" style={ { color: "#3776ab" } } />
                            </li>
                            <li>
                                <img className="numpy" src="Image/numpy-ar21.svg" alt="" />
                            </li>
                            <li>
                                <img className="pandas" src="Image/kindpng_5747046.png" width={ 300 } alt="" />
                            </li>
                        </ul>
                        <h1 className="Feature-Heading my-5">Python Programming 🐍</h1>
                        <Col lg={ 12 } md={ { span: 10, offset: 2 } } sm={ 6 } className="text-start">
                            <p>
                                🔘 Developed small and usable python scripts and projects which
                                related to real world.
                            </p>
                            <p>
                                🔘 Experience of worked with different python Libraries like
                                Numpy,Pandas,Matplotlib,pyttsx3 etc.
                            </p>
                            <p>
                                🔘 Have knowledge of python scripting.
                            </p>
                        </Col>
                    </Col>
                    <Col lg={ 6 } md={ 6 } sm={ 6 } className="text-center d-flex flex-column justify-content-center align-items-center">
                        <img
                            className="Feature-svg-image img-fluid"
                            src="Image/Python/python-banner-0.jpg"
                            width={ 400 }
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="my-5">
                <Row className="my-5">
                    <Col lg={ 6 } md={ 6 } sm={ 6 } className="text-center d-flex flex-column justify-content-center align-items-center">
                        <img src="Image/4.jpg" width={ 700 } alt="" className="img-fluid" />
                    </Col>
                    <Col lg={ 6 } md={ 6 }>
                        <h1 className="Feature-Heading text-center">Data Structures & Algorithms</h1>
                        <ul className="dev-icon d-flex align-center">
                            <li>
                                <img className="language" src="Image/Icons/codechef.png" alt="" />
                            </li>
                            <li>
                                <img className="language" src="Image/Icons/hackerrank.png" width={ 100 } alt="" />
                            </li>

                            <li>
                                <img className="language" src="Image/Icons/open-source.png" alt="" />
                            </li>
                        </ul>
                        <div className="Data-Analytic text-start">
                            <p>
                                🔘 I have knowledge of Data Structure like Stack,Queue,Hash Tables,
                                Trees, Tries, Graphs, and various algorithms for solving various
                                problems efficiently.
                            </p>
                            <p>
                                🔘 As I know Data Structure and Algorithms are the heart of
                                programming, So I loves to solve programming question in different
                                competitive website like hackerrank,codechef,hackerearth and many
                                more.
                            </p>
                            <p>🔘 I solve daily 1 Problem of DSA question.</p>
                            <p>
                                🔘 Worked on open source projects like Eclipse, vlc, education, codota, Eddiehub community, Python geeks, codeforcauseorg etc.
                            </p>
                            <p>
                                🔘 Participated Project at Arctic Code Vault Contributor of Microsoft.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About