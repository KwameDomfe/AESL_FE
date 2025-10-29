
import MainHeader from '../components/organisms/headers/AESL_MainHeader';
import MainFooter from '../components/organisms/footers/AESLMainFooter';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../components/shared/ErrorBoundary';
import { CombinedContextProvider } from '../contexts';

import ScrollToTop from '../ScrollToTop';
import { Suspense } from 'react';



const FallbackUI = () => (
    <div style={
            { padding: '2rem', 
                textAlign: 'center', 
                color: '#007bff'
            }
        }
    >
        <div className="spinner" 
            style={
                { margin: '2rem auto', 
                    width: 48, 
                    height: 48, 
                    border: '6px solid #eee', 
                    borderTop: '6px solid #007bff', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite' 
                }
            } 
        />
        <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}
        >
            Loading content...
        </div>
        <style>
            {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
        </style>
    </div>
);

const RootLayout = () => {
    return (
        <CombinedContextProvider>
            <ErrorBoundary>
                <div
                    id="layout-two-column"
                    className="flex flex-column flex-row-l min-vh-100-m w-100"
                    role="application"
                    aria-label="Main application layout"
                >
                    {/* Main Header Start */}
                    <header
                        id="layout-main-header"
                        role="banner"
                        aria-label="Site header"
                    >
                        
                            <MainHeader />
                        
                    </header>
                    {/* Main Header End */}

                    {/* Main Content Start */}
                    <main
                        id="layout-main-content"
                        className="vh-100 w-100 of-y-scroll"
                        role="main"
                        aria-label="Main content area"
                        tabIndex={-1}
                        style={{ outline: 'none' }}
                    >
                        {/* Page Content Start */}
                        {/* Remove test div for production, keep for debug if needed */}
                        {/* <div style={{background:'red',height:'40px',color:'white',textAlign:'center',zIndex:9999}}>TEST DIV: If you see this, main content is visible</div> */}
                        <ScrollToTop />
                        <Suspense fallback={<FallbackUI />}>
                            <Outlet />
                        </Suspense>
                        {/* Page Content End */}
                        <MainFooter />
                    </main>
                    {/* Main Content End */}
                    
                </div>
            </ErrorBoundary>
        </CombinedContextProvider>
    );
};

export default RootLayout;
