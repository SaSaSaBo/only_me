import { Navbar, NavbarContent, Link, Button} from "@nextui-org/react";
import React from 'react';
import './NavbarPart.css';
import skz from '../../Assets/skz.png';
import search from '../../Assets/search.png';

interface NavbarPartProps {
    onButtonClick: () => void;
    onPClick: () => void;
}


const NavbarPart: React.FC<NavbarPartProps> = ({ onButtonClick, onPClick }) => {

    return (
        <Navbar shouldHideOnScroll className="navbar-body">
            <div className="navbar-row">
                <NavbarContent className="navbar-content-left">
                    <img src={skz} alt="" className="skz-logo" />
                    <p className="name" onClick={onPClick}>TUTORING</p>
                </NavbarContent>

                <NavbarContent className="navbar-content-center">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                        <button className="search-button">
                            <img src={search} alt="" className="search-icon" />
                        </button>
                    </div>
                </NavbarContent>

                <NavbarContent className="navbar-content-right">
                <Button as={Link} className="button" onClick={onButtonClick}>
                        Let's Start
                    </Button>
                </NavbarContent>
            </div>
        </Navbar>
    );
}

export default NavbarPart;
