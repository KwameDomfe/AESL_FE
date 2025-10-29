import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error('Error Boundary caught an error:', error, errorInfo);
        
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return (
                <div 
                    className="error-boundary"
                    style={{
                        padding: '2rem',
                        textAlign: 'center',
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #dee2e6',
                        borderRadius: '0.375rem',
                        margin: '1rem'
                    }}
                >
                    <h2 style={{ color: '#dc3545', marginBottom: '1rem' }}>
                        Something went wrong
                    </h2>
                    <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>
                        We apologize for the inconvenience. Please try refreshing the page.
                    </p>
                    
                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <details style={{ textAlign: 'left', marginTop: '1rem' }}>
                            <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                                Error Details (Development Only)
                            </summary>
                            <pre style={{ 
                                backgroundColor: '#f1f3f4',
                                padding: '1rem',
                                borderRadius: '0.25rem',
                                overflow: 'auto',
                                fontSize: '0.875rem'
                            }}>
                                {this.state.error && this.state.error.toString()}
                                <br />
                                {this.state.errorInfo.componentStack}
                            </pre>
                        </details>
                    )}
                    
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.25rem',
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;