import styles from './SubPage.module.css';
import PropTypes from "prop-types";
import {Navigate, useParams} from "react-router-dom"
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Start from "../start/Start.jsx";
import Packages from "../learn/Packages.jsx";
import SupportedDevices from "../learn/SupportedDevices.jsx";
import Downloads from "../learn/Downloads.jsx";
import Faq from "../learn/Faq.jsx";
import Security from "../learn/Security.jsx";
import Bugs from "../contributing/Bugs.jsx";
import SubmittingPatches from "../contributing/SubmittingPatches.jsx";
import WikiRules from "../contributing/WikiRules.jsx";
import About from "../project/About.jsx";
import Contacts from "../project/Contacts.jsx";
import Donate from "../project/Donate.jsx";
import Infrastructure from "../project/Infrastructure.jsx";
import License from "../project/License.jsx";
import Merchandise from "../project/Merchandise.jsx";
import Rules from "../project/Rules.jsx";
import Trademark from "../project/Trademark.jsx";
import Website from "../project/Website.jsx";
import LowWidthContext from "../LowWidthContext.jsx";
import {useContext} from "react";


function SubPage() {
    const {page, innerPage} = useParams();
    const { lowWidth } = useContext(LowWidthContext);

    function chooseSubpage() {
        switch (page) {
            case undefined:
                return <Start></Start>
            case "learn":
                switch (innerPage) {
                    case "supported-devices":
                        return <SupportedDevices></SupportedDevices>
                    case "packages":
                        return <Packages></Packages>
                    case "downloads":
                        return <Downloads></Downloads>
                    case "security":
                        return <Security></Security>
                    case "faq":
                        return <Faq></Faq>
                    default:
                        return <SupportedDevices></SupportedDevices>
                }
            case "contributing":
                switch (innerPage) {
                    case "submitting-patches":
                        return <SubmittingPatches></SubmittingPatches>
                    case "bugs":
                        return <Bugs></Bugs>
                    case "wikirules":
                        return <WikiRules></WikiRules>
                    default:
                        return <SubmittingPatches></SubmittingPatches>
                }
            case "project":
                switch (innerPage) {
                    case "about":
                        return <About></About>
                    case "contacts":
                        return <Contacts></Contacts>
                    case "donate":
                        return <Donate></Donate>
                    case "infrastructure":
                        return <Infrastructure></Infrastructure>
                    case "license":
                        return <License></License>
                    case "merchandise":
                        return <Merchandise></Merchandise>
                    case "rules":
                        return <Rules></Rules>
                    case "trademark":
                        return <Trademark></Trademark>
                    case "website":
                        return <Website></Website>
                    default:
                        return <About></About>
                }
            default:
                return <Navigate to="/notFound/"/>;
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className={lowWidth ? styles.subPageOverStyle : styles.subPageOverStyleHighWidth}>
                <Sidebar></Sidebar>
                <div className={styles.subPageStyle}>
                    {chooseSubpage()}
                </div>
            </div>
        </div>
    );
}

SubPage.propTypes = {
    page: PropTypes.string,
    innerPage: PropTypes.string
}

export default SubPage;