import { useEffect, useState } from 'react';
import './header.css';
const Header = () => {
    const [isStickyDown, setIsStickyDown] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsStickyDown(scrollTop > 10);
    };

    return (
        <div id="header" className={isStickyDown ? 'sticky' : ''}>
            <h1>James McMullen</h1> 
        </div>
    );
};

export default Header;