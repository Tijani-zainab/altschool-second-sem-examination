import "./TestErrorBoundary.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const TestErrorBoundary = () => {
    const [error, setError] = useState(false);
    
    if (error) {
        throw new Error("Error thrown from TestErrorBoundary");
    }
    
    return (
        <div className="test-error-boundary">
            <h1>Test Error Boundary</h1>
            <button className="error-btn" onClick={() => setError(true)}>
                Throw Error
            </button>
            <Link className="back-btn" to="/">
                Back
            </Link>
        </div>
    );
};

export default TestErrorBoundary;