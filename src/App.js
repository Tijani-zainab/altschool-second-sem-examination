import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Landing, Projects } from "././Pages";
import { Routing, Experience, ReachOut, Footer } from "./Components";

function App() {
  return (
    
      <div className="App">
        <ErrorBoundary>
          <Landing />
          <Projects />
          <Experience />
          <ReachOut />
          <Footer />
          <Routing />
        </ErrorBoundary>
      </div>
    
  );
}

export default App;
