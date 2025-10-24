import styles from './Sidebar.module.css';
import PropTypes from "prop-types";


import learnData from './learnData.json';
import contributingData from './contributingData.json';
import projectData from './projectData.json';
import LowWidthContext from "../LowWidthContext.jsx";
import {useContext, useState} from "react";

const SidebarList = ({lowWidth, setButtonOne}) => {
    return (
        <div>
            <h4>Learn about OpenWrt</h4>
            <div className={lowWidth ? styles.sidebarStyleLowWidth : styles.sidebarStyleHighWidth}>
                <ul>
                    {learnData.list.map(item => (
                        <li key={item}><a key={item} href={'#/' + "learn" + '/' + item.link} onClick={() => setButtonOne(false)}>{item.text}</a>
                        </li>))}
                </ul>
            </div>
            <h4>Contributing</h4>
            <div className={lowWidth ? styles.sidebarStyleLowWidth : styles.sidebarStyleHighWidth}>
                <ul>
                    {contributingData.list.map(item => (
                        <li key={item}><a key={item} href={'#/' + "contributing" + '/' + item.link} onClick={() => setButtonOne(false)}>{item.text}</a>
                        </li>))}
                </ul>
            </div>
            <h4>Project</h4>
            <div className={lowWidth ? styles.sidebarStyleLowWidth : styles.sidebarStyleHighWidth}>
                <ul>
                    {projectData.list.map(item => (
                        <li key={item}><a key={item} href={'#/' + "project" + '/' + item.link} onClick={() => setButtonOne(false)}>{item.text}</a>
                        </li>))}
                </ul>
            </div>
        </div>
    );
};

function Sidebar() {
    const {lowWidth} = useContext(LowWidthContext);
    const [buttonOne, setButtonOne] = useState(false);


    if (lowWidth) {
        return (
            <div className={styles.extraMargin}>
                <button
                    onClick={() => setButtonOne(!buttonOne)}>
                    Learn about OpenWrt
                </button>
                {buttonOne && (
                <SidebarList lowWidth={lowWidth} setButtonOne={setButtonOne} />
                )}
            </div>
        );
    } else {
        return (
            <SidebarList lowWidth={lowWidth} setButtonOne={setButtonOne} />
        );
    }
}

SidebarList.propTypes = {
    lowWidth: PropTypes.any,
    setButtonOne: PropTypes.any,
}

Sidebar.propTypes = {
    id: PropTypes.string,
    innerId: PropTypes.string
}

export default Sidebar;