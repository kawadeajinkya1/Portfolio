import React, { useState, useEffect } from 'react';
import { a } from 'react-router-dom';


import classes from './Nav.module.css'; // Importing CSS module

const NavBar = () => {
    const [active, setActive] = useState(classes.nav__menu);
    const [icon, setIcon] = useState(classes.nav__toggler);
    const [scrolled, setScrolled] = useState(false);

    const navToggle = () => {
        if (active === classes.nav__menu) {
            setActive(`${classes.nav__menu} ${classes.nav__active}`);
        } else {
            setActive(classes.nav__menu);
        }

        if (icon === classes.nav__toggler) {
            setIcon(`${classes.nav__toggler} ${classes.toggle}`);
        } else {
            setIcon(classes.nav__toggler);
        }
    };

    const resetNavbar = () => {
        setActive(classes.nav__menu);
        setIcon(classes.nav__toggler);
    };

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={classes.nasv}>
            <nav className={`${classes.nav} ${scrolled ? classes['nav--scrolled'] : ''}`}>
                
                <div className={classes.header2}>
                    <div className={classes.logoR}>
                       
                         AJINKYA KAWADE
                
                    </div>
                    <div className={classes.nd}>
                        <div className={active}>
                            <ul className={classes.ul}>
                                <li ><a href='#home' className={classes.list} onClick={resetNavbar}>Home</a></li>
                                <li ><a href='#about' className={classes.list} onClick={resetNavbar}>About</a></li>
                                <li ><a href='#project' className={classes.list} onClick={resetNavbar}>Project</a></li>
                                <li ><a href='#contact' className={classes.list} onClick={resetNavbar}>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={navToggle} className={icon}>
                        <div className={classes.line1}></div>
                        <div className={classes.line2}></div>
                        <div className={classes.line3}></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;