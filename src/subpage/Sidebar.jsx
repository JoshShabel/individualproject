import styles from './Sidebar.module.css';
import PropTypes from "prop-types";


import learnData from './learnData.json';
import contributingData from './contributingData.json';
import projectData from './projectData.json';


function Sidebar() {

    return (
        <div>
            <h4>Learn about OpenWrt</h4>
            <div className={styles.sidebarStyle}>
                <ul>
                    {learnData.list.map(item => (
                        <li key={item}><a key={item} href={'#/' + "learn" + '/' + item.link}>{item.text}</a>
                        </li>))}
                </ul>
            </div>
            <h4>Contributing</h4>
            <div className={styles.sidebarStyle}>
                <ul>
                    {contributingData.list.map(item => (
                        <li key={item}><a key={item} href={'#/' + "contributing" + '/' + item.link}>{item.text}</a>
                        </li>))}
                </ul>
            </div>
            <h4>Project</h4>
            <div className={styles.sidebarStyle}>
                <ul>
                    {projectData.list.map(item => (
                        <li key={item}><a key={item} href={'#/' + "project" + '/' + item.link}>{item.text}</a>
                        </li>))}
                </ul>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    id: PropTypes.string,
    innerId: PropTypes.string
}

export default Sidebar;