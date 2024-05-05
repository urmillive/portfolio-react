import { Link } from 'react-router-dom'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer text-center fw-medium $indigo-500 bg-info  bg-opacity-25 py-2"><Link target='_blank' to="https://github.com/urmillive/" className='text-decoration-none'>Made with ❤️ by &nbsp; <span className='signature'>Urmil Rupareliya</span></Link></footer>
    )
}

export default Footer