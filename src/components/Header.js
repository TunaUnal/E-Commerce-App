import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="p-3 text-bg-dark">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        Online React App
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 px-5 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                        <li><Link to="/card" className="nav-link px-2 text-white">Card</Link></li>
                    </ul>


                </div>
        </header>
    )
}

export default Header