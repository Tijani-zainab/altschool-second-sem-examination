import React from 'react';
import './App.scss';
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import { Landing, Projects } from "././Pages";
import { Routing } from "./Components";

const App = () => {

  const options = {
    preset: "stars",
  };

  const initialize = (instance) => {
    loadStarsPreset(instance);
  };

  return (
    
      <div className="App">

       <div className='components-containter'> 
          <ErrorBoundary>
            {/* <Landing /> */}
            {/* <Projects /> */}
            {/* <Experience /> */}
            {/* <ReachOut /> */}
            {/* <Footer /> */}
            <Routing />
          </ErrorBoundary>
        </div>

        <div className="particles-container">
          <Particles id="tsparticles" options={options} init={initialize} />
        </div>
      </div>
    
  );
}

export default App;
