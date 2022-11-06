import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Portfolio } from "././Pages";
import { Routing } from "./Components";

function App() {
  return (
    
      <div className="App">
        <ErrorBoundary>
          <Portfolio />
          <Routing />
        </ErrorBoundary>
      </div>
    
  );
}

export default App;
