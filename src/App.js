import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import { Landing, Projects } from "././Pages";
import { Routing } from "./Components";

const App = () => {
  return (
    
      <div className="App">
        <ErrorBoundary>
          {/* <Landing /> */}
          {/* <Projects /> */}
          {/* <Experience /> */}
          {/* <ReachOut /> */}
          {/* <Footer /> */}
          <Routing />
        </ErrorBoundary>
      </div>
    
  );
}

export default App;
