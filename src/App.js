import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Navbar';
import Body from './component/Body';
import Footer from './footer/footer';
import Details from './Details';
import About from './About';

class App extends React.Component {

  render() {
    return (
      <div className="maincontainer">
        <Navbar />
        <Body />
        <Footer />
        {/* <Details /> */}
      </div>
    )
  };
}

export default App;