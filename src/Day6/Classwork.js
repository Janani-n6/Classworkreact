const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul className='nav-links'>
                <li className='nav-link'><Link className="home" to={`/`}>Home</Link></li>
                <li className='nav-link'><Link className="about" to={`/about`}>About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;