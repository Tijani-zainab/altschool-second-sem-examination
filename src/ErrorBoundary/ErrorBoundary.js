import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import './ErrorBoundary.scss';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className='error-boundary-page'>
      <p>Something's not right:</p>
      <pre>{error.message}</pre>
      <button className='try-again-btn' onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;

