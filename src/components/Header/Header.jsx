import { NavLink } from "react-router-dom"
import { Col } from 'react-bootstrap'
import "./Header.css"

const Header = () => {
	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<Col sm={ 6 }>
					<NavLink className='header_name text-decoration-none' to='/'>
						Urmil Rupareliya
					</NavLink>
				</Col>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div
					className='menu collapse navbar-collapse my-5'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<NavLink
								className={ ({ isActive }) =>
									`nav-NavLink ${ isActive ? "menu-item-active" : "menu-item" }`
								}
								to='/'
							>
								About
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className={ ({ isActive }) =>
									`nav-NavLink ${ isActive ? "menu-item-active" : "menu-item" }`
								}
								to='experience'
							>
								Experience
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className={ ({ isActive }) =>
									`nav-NavLink ${ isActive ? "menu-item-active" : "menu-item" }`
								}
								to='skills'
							>
								Skills
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className={ ({ isActive }) =>
									`nav-NavLink ${ isActive ? "menu-item-active" : "menu-item" }`
								}
								to='projects'
							>
								Projects
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className={ ({ isActive }) =>
									`nav-NavLink ${ isActive ? "menu-item-active" : "menu-item" }`
								}
								to='contact'
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header