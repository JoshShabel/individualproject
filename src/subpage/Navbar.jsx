import styles from './Navbar.module.css';
import openwrtLogo from '../assets/OpenWrt_Logo.svg'
import LowWidthContext from "../LowWidthContext.jsx";
import {useContext} from "react";


function Navbar() {
    const { lowWidth} = useContext(LowWidthContext);
    return (
        <div className={lowWidth ? styles.navBarStyleLowWidth : styles.navBarStyleHighWidth}>
            <a href="/#/"><img style={{height: '70px'}} src={openwrtLogo} alt="OpenWRT logo"/></a>
            <ul>
                <li><a href="/#/learn">Learn about OpenWrt</a></li>
                <li><a href="/#/contributing">Contributing</a></li>
                <li><a href="/#/project">Project</a></li>
            </ul>
        </div>
    );
}

export default Navbar;