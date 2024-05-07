import "./Skills.css";
import { Link } from "react-router-dom";

const skillsList = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'ES6+ JavaScript',
    'Responsive Web Design',
    'Bootstrap',
    'SCSS',
    'Webpack',
    'NPM and Yarn',
    'Command Line and Terminal Usage',
    'Git and Version Control',
    'RESTful APIs',
    'MongoDB',
    'Express.js',
    'Node.js',
    'React.js',
    'Angular',
    'Typescript',
    'React Bootstrap',
    'Redux',
    'Next.js',
    'GraphQL',
    'WebSockets',
    'AJAX',
    'JSON',
    'Axios',
    'JWT Authentication',
    'Passport.js',
    'OAuth',
    'Testing (Jest, Mocha, Chai)',
    'Continuous Integration (Travis CI, Jenkins)',
    'Docker',
    'AWS (Amazon Web Services)',
    'Firebase',
    'Responsive Design',
    'Cross-Browser Compatibility',
    'SEO (Search Engine Optimization)',
    'PWA (Progressive Web Apps)',
    'Performance Optimization',
    'UX/UI Design Principles',
    'Wireframing and Prototyping',
    'Material-UI',
    'Ant Design',
    'Semantic UI',
    'D3.js (Data-Driven Documents)',
    'Three.js (3D Graphics)',
    'WebGL',
    'Socket.io',
    'WebRTC',
    'Electron.js',
    'Progressive Enhancement',
    'Browser Developer Tools',
    'Android Webview Debugging',
];

const Skills = () => {
    return (
        <div className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                { skillsList.map((skill, index) => (
                    <div key={ index } className="skill-box">
                        <Link to="#" className="skill-name">
                            { skill }
                        </Link>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Skills