import React from 'react'
import { Link } from "react-router-dom"
import header_gif from "../../assets/header-image.gif";
import './about.css';

const About = () => {
    return (
        <>
            <section id="Home">
                <div className="row column1">
                    <div className="col-lg-6 col-md-6 first-image">
                        <img className="mr-5" height={ 450 } src="Image/designer.jpg" alt="" />
                        <div className="social_media_icon">
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
                            <Link className="social_icons" to="mailto:urmillive@gmail.com" target="_blank">
                                <i className="fab fa-google" aria-hidden="true" />
                            </Link>
                            <Link className="social_icons" to="https://www.youtube.com/@urmillive" target="_blank">
                                <i className="fab fa-youtube" aria-hidden="true" />
                            </Link>

                        </div>
                    </div>
                    <div className="col-lg-6 section-1">
                        <h2 className="hello">
                            <span className='name software_engineer'>Software Engineer</span>
                        </h2>
                        <p className='intro_header'>
                            A passionate Full Stack Developer having an experience in Web Apps & App
                            Development, want to develop sustainable and
                            scalable problem solving and technical systems to create impact.
                        </p>
                    </div>
                </div>
            </section>



            <section id="Whatido">
                <h1 className='what_do'>What I <span className='did'>did</span> Before ?</h1>

                {/* Android */ }
                <div className="row feature-2">
                    <div className="col-lg-6 col-md-6">
                        <h1 className="Feature-Heading">Android Programming🐍</h1>
                        <ul className="dev-icon">
                            <li>
                                <img className="android" src="Image/Icons/android-logo.svg" alt="" />
                            </li>
                        </ul>
                        <div className="">
                            <p className="Features-paragraph">
                                💥 Developed small and usable Java Android Apps.
                            </p>
                            <p className="Features-paragraph">
                                💥 Experience of XML and flutter UI stuff.
                                Made some cool projects on Android Java.
                            </p>
                            <p className="Features-paragraph">
                                💥 Have knowledge of debugging in android and other API integration stuff.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 Feature-first-image ">
                        <img
                            className="android_banner"
                            src="Image/android-developer.svg"
                            alt="android banner"
                            height={ 200 }
                        />
                    </div>
                </div>

                {/* Python */ }
                <div className="row feature-1">
                    <div className="col-lg-6 col-md-6 Feature-first-image ">
                        <img
                            className="Feature-svg-image"
                            src="Image/python_coding.png"
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
                                💥 Developed small and usable python scripts and projects which
                                related to real world.
                            </p>
                            <p className="Features-paragraph">
                                💥 Experience of worked with different python Libraries like
                                Numpy,Pandas,Matplotlib,pyttsx3 etc and have knowledge of Data
                                analytical algorithm and techniques.
                            </p>
                        </div>
                    </div>
                </div>



                <h1 className='what_do'>What I <span className='do'>do</span> Now days!</h1>

                {/* MERN */ }
                <div className="row feature-3">
                    <div className="col-lg-6 col-md-6 Feature-first-image ">
                        <img
                            className="Feature-svg-image"
                            src="Image/4.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h1 className="Feature-Heading">Javascript, MERN stack</h1>
                        <ul className="dev-icon">
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
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 Developed small to large scalable and usable javascript,typescript fully fledged projects which
                                can solve real world problems.
                            </p>
                            <p className="Features-paragraph">
                                💥 Experience of worked with different javascript Libraries much more like
                                Proficient in React, and Node.js,MongoDB, Express.js with expertise in building full-stack web applications and implementing RESTful APIs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Web Dev */ }
                <div className="row feature-4">
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

                        <img className="boy_image" src={ header_gif } alt="Computer guy gif" />
                    </div>
                </div>

                {/* DSA */ }
                <div className="row feature-5 my-5">
                    <div className="col-lg-6 col-md-6 Feature-third-image">
                        <img className="Feature-svg-image-3" src="Image/Coding.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 feature-coding">
                        <h1 className="Feature-Heading">Data Structures & Algorithms</h1>
                        <ul className="dev-icon">
                            <li>
                                <img className="language" src="Image/Icons/codechef.png" alt="" />
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

                {/* Open Source */ }
                <div className="row feature-6 my-5">
                    <div className="col-lg-6 col-md-6 feature-coding">
                        <h1 className="Feature-Heading">Open Source Contributions</h1>
                        <ul className="dev-icon">
                            <li>
                                <img className="language" src="Image/Icons/open-source.png" alt="" />
                            </li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 I have knowledge of Data Structure like Stack,Queue,Hash Tables,
                                Trees, Tries, Graphs, and various algorithms for solving various
                                problems efficiently.
                            </p>
                            <p className="Features-paragraph">
                                💥 Eclipse, vlc, education, codota, Eddiehub community, Python geeks, codeforcauseorg
                                Participated Project at Arctic Code Vault Contributor
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 Feature-third-image">
                        <img className="Feature-svg-image-3 w-100" src="Image/6.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About