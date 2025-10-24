import {createContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";

const LowWidthContext = createContext();
export default LowWidthContext;

function isWindowLowWidth() {
    if (window.innerWidth >= 1070) {
        return false;
    }
    else {
        return true;
    }
}

export const LowWidthProvider = ({children}) => {
    const [lowWidth, setLowWidth] = useState(isWindowLowWidth());

    useEffect(() => {
        function handleResize() {
            setLowWidth(isWindowLowWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        < LowWidthContext.Provider value={{lowWidth, setLowWidth}}>
            {children}
        </LowWidthContext.Provider>
    );
};

LowWidthProvider.propTypes = {
    children: PropTypes.any,
}