
import React from 'react';
import { Link, animateScroll} from 'react-scroll';
import './header.css';


const Navbar = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };
    
    return (
        <header className="nav">
            <div className="blur_background"/> 
            <div className='title_card' onClick={scrollToTop} >
                <h2>James McMullen</h2>
                <p>
                    Software Developer
                </p>
            </div>
            
            <nav className="nav__container__actions">
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="jobs">
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        CONTACT ME
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
