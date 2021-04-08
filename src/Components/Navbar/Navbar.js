import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div id="oNavSpacer"></div>
		    <nav>
				<ul>
                    <li><a style={{color: 'inherit', textDecoration: 'inherit'}} href="#scroll_view">MY WORK</a></li>
                    <li><a style={{color: 'inherit', textDecoration: 'inherit'}} href="#about-me">ABOUT</a></li>
                    <li><a style={{color: 'inherit', textDecoration: 'inherit'}} href="#oBox4">CONTACT</a></li>
                    <li><a style={{color: 'inherit', textDecoration: 'inherit'}} href="https://shop.simplehappykitchen.com/?ref=mm" target="_blank" rel="noopener noreferrer">SHOP</a></li>
			    </ul>
		    </nav>
        </>
    )
}

export default Navbar;