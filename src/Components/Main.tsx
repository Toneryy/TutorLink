import React from 'react';
import m from '../Styles/App.module.scss';

import Intro from '../Components/Intro';
import AboutUs from './AboutUs';
import HowHelps from "./HowHelps"
import HowWorks from './HowWorks';
import Advantages from './Advantages';
import Stats from './Stats';

const Main: React.FC = () => {
    return(
        <main className={m.main}>
            <Intro />
            <AboutUs />
            <HowHelps />
            <HowWorks />
            <Advantages />
            <Stats />
        </main>
    );
};

export default Main;