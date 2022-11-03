import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h1> Landing App </h1>
      </div>
    </ErrorBoundary>
  );
}

export default App;
