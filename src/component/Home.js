import React from 'react';

import Navbar from './Navbar';
import Body from './Body';
import Footer from '../footer/footer';

function Home() {
    return (
        <>
            <div className="maincontainer">
                <Navbar />
                <Body />
                <Footer />
            </div>

        </>
    );
}

export default Home;