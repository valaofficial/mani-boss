import { useState } from 'react';

function Nav() {
    let screen_width = window.screen.width;
    const [navMenuVisible, setNavMenuVisible] = useState(false)

    function handleNavMenu(){
        setNavMenuVisible(!navMenuVisible)
    }

  return (
    <>
        <div className="main_nav">
            <div className="nav_brand">
                <h3>Producer</h3>
            </div>
            {screen_width > 768?
            <div className="nav_links_div">
                <ul>
                    <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>TESTIMONIALS</li>
                    <li>GALLERY</li>
                    <li>CONTACT</li>
                </ul>
            </div>:
        <div className="nav_menu_div">
            <img src='/images/menu-lt.svg' onClick={handleNavMenu} alt='Menu'/>
        </div>}

        </div>
        <div className={`mobileNavMenu ${navMenuVisible?`mobileNavMenuVisible`:null}`}>
            <ul>
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>TESTIMONIALS</li>
                <li>GALLERY</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </>
  );
}

export default Nav;
