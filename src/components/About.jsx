import React from 'react'
import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <section id="Home">
                <div className="row column1">
                    <div className="col-lg-6 col-md-6 first-image">
                        <img className="boyimage" src="Image/20200630_162659.gif" alt="" />
                    </div>
                    <div className="col-lg-6 section-1">
                        <h1 className="Hello">
                            Hello All <span className="wave">👋</span> I'm URMIL❤️{ " " }
                        </h1>
                        <p>
                            A passionate Android Developer having an experience in App
                            Development, Web Development and want to develop sustainable and
                            scalable social and technical systems to create impact
                        </p>
                        <div className="social_media_icon">
                            <Link
                                className="btn"
                                to="https://www.instagram.com/urmillive/"
                                target="_blank"
                            >
                                <i className="fab fa-instagram" />
                            </Link>
                            <Link
                                className="btn"
                                to="https://www.linkedin.com/in/urmillive"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </Link>
                            <Link className="btn" to="https://github.com/urmillive" target="_blank">
                                <i className="fab fa-github" />
                            </Link>
                            <Link className="btn" to="mailto:urmillive@gmail.com" target="_blank">
                                <i className="fab fa-google" />
                            </Link>
                        </div>
                    </div>
                    <div className="Image-boy col-lg-6">
                        <img className="boy" src="Image/Boy-image.png" alt="" />
                    </div>
                </div>
            </section>
            <section id="Whatido">
                <h1>What I Do ?</h1>
                <div className="row feature-1">
                    <div className="col-lg-6 col-md-6 Feature-first-image ">
                        <img
                            className="Feature-svg-image"
                            src="Image/Data_Analysis.svg"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h1 className="Feature-Heading">Python Programming🐍</h1>
                        <ul className="dev-icon">
                            <li>
                                <i className="fab fa-python fa-5x" style={ { color: "#3776ab" } } />
                            </li>
                            <li>
                                <img className="numpy" src="Image/numpy-ar21.svg" alt="" />
                            </li>
                            <li>
                                <img className="pandas" src="Image/kindpng_5747046.png" alt="" />
                            </li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 Developing small and usable python scripts and projects which
                                related to real world.
                            </p>
                            <p className="Features-paragraph">
                                💥 Experience of working with different python Libraries like
                                Numpy,Pandas,Matplotlib,pyttsx3 etc and have knowledge of Data
                                analytical algorithm and techniques.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row feature-2">
                    <div className="col-lg-6 col-md-6 feature-web">
                        <h1 className="Feature-Heading">Web Development</h1>
                        <ul className="dev-icon">
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
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 Building Fully responsive website front end using HTML, CSS,
                                Bootstrap and Javascript.
                            </p>
                            <p className="Features-paragraph">
                                💥 As of now I have knowledge only of front end but in near future I
                                will add more features to myself and excited to explore Kotlin,
                                Android,React,NodeJS and many more.
                            </p>
                            <p className="Features-paragraph">
                                💥 I have also used Canva, Abode Photoshop and Adobe XD to design
                                User interface of websites and mobile application and design of
                                logos.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 Feature-second-image ">
                        <img className="Feature-svg-image" src="Image/website.svg" alt="" />
                    </div>
                </div>
                <div className="row feature-3">
                    <div className="col-lg-6 col-md-6 Feature-third-image">
                        <img className="Feature-svg-image-3" src="Image/Coding.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 feature-coding">
                        <h1 className="Feature-Heading">Data Structure and Algorithms</h1>
                        <ul className="dev-icon">
                            <li />
                            <li>
                                <i className="fas fa-laptop-code fa-4x" />
                            </li>
                            <li>
                                <i
                                    className="fas fa-file-code fa-4x"
                                    style={ { color: "#a8afcb" } }
                                />
                            </li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 I have knowledge of Data Structure like Stack,Queue,Hash Tables,
                                Trees, Tries, Graphs, and various algorithms for solving various
                                problems efficiently.
                            </p>
                            <p className="Features-paragraph">
                                💥 As I know Data Structure and Algorithms are the heart of
                                programming, So I loves to solve programming question in different
                                competitive website like hackerrank,codechef,hackerearth and many
                                more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About