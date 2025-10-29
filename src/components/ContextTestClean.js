import React from 'react';
import { 
    useTheme, 
    useProjectFilters, 
    useFavorites, 
    useNotifications, 
    usePageMeta,
    useBreadcrumbs,
    useModal,
    useLoading
} from '../hooks/useContextHooks';

const ContextTest = () => {
    // Test theme context
    const { theme, toggleTheme } = useTheme();
    
    // Test projects context
    const { projects, searchTerm, setSearchTerm } = useProjectFilters();
    
    // Test favorites
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    
    // Test notifications
    const { showNotification } = useNotifications();
    
    // Test page meta
    const { pageTitle, setPageTitle } = usePageMeta();
    
    // Test navigation
    const { breadcrumbs } = useBreadcrumbs();
    
    // Test modals
    const { showModal } = useModal();
    
    // Test loading
    const { isLoading, setLoading } = useLoading();

    const handleTestNotification = () => {
        showNotification('Context API is working!', 'success');
    };

    const handleTestModal = () => {
        showModal('test-modal', 'Test Modal', 'This modal was opened using Context API!');
    };

    const handleTestLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    const testProject = projects.length > 0 ? projects[0] : null;

    return (
        <div style={{ 
            padding: '20px', 
            backgroundColor: theme === 'dark' ? '#333' : '#fff',
            color: theme === 'dark' ? '#fff' : '#333',
            minHeight: '100vh'
        }}>
            <h1>Context API Test Dashboard</h1>
            
            <div style={{ marginBottom: '20px' }}>
                <h2>Theme Context</h2>
                <p>Current theme: <strong>{theme}</strong></p>
                <button onClick={toggleTheme}>
                    Toggle Theme (Current: {theme})
                </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Projects Context</h2>
                <p>Total projects: <strong>{projects.length}</strong></p>
                <p>Search term: <strong>"{searchTerm || 'None'}"</strong></p>
                <input 
                    type="text" 
                    placeholder="Search projects..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '8px', marginRight: '10px' }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Favorites Context</h2>
                <p>Total favorites: <strong>{favorites.length}</strong></p>
                {testProject && (
                    <div>
                        <p>Test with project: {testProject.name}</p>
                        <button 
                            onClick={() => addToFavorites(testProject.id)}
                            style={{ marginRight: '10px' }}
                        >
                            Add to Favorites
                        </button>
                        <button onClick={() => removeFromFavorites(testProject.id)}>
                            Remove from Favorites
                        </button>
                    </div>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Page Meta Context</h2>
                <p>Current page title: <strong>{pageTitle}</strong></p>
                <button onClick={() => setPageTitle('Context Test Page')}>
                    Set Test Page Title
                </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Navigation Context</h2>
                <p>Breadcrumbs count: <strong>{breadcrumbs.length}</strong></p>
                {breadcrumbs.length > 0 && (
                    <div>
                        <p>Current breadcrumbs:</p>
                        <ul>
                            {breadcrumbs.map((crumb, index) => (
                                <li key={index}>{crumb.label}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>UI Context Tests</h2>
                <p>Loading state: <strong>{isLoading ? 'Loading...' : 'Not loading'}</strong></p>
                <div>
                    <button 
                        onClick={handleTestNotification}
                        style={{ marginRight: '10px' }}
                    >
                        Test Notification
                    </button>
                    <button 
                        onClick={handleTestModal}
                        style={{ marginRight: '10px' }}
                    >
                        Test Modal
                    </button>
                    <button onClick={handleTestLoading}>
                        Test Loading (2s)
                    </button>
                </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Context Status</h2>
                <div style={{ 
                    backgroundColor: theme === 'dark' ? '#444' : '#f5f5f5',
                    padding: '10px',
                    borderRadius: '5px'
                }}>
                    <p>✅ AppContext: {theme ? 'Working' : 'Error'}</p>
                    <p>✅ ProjectsContext: {projects ? 'Working' : 'Error'}</p>
                    <p>✅ NavigationContext: {breadcrumbs ? 'Working' : 'Error'}</p>
                    <p>✅ UIContext: {typeof showNotification === 'function' ? 'Working' : 'Error'}</p>
                </div>
            </div>
        </div>
    );
};

export default ContextTest;