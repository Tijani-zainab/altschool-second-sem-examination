import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Portfolio } from "././Pages";

function App() {
  return (
    
      <div className="App">
        <ErrorBoundary>
          <Portfolio />
        </ErrorBoundary>
      </div>
    
  );
}

export default App;
