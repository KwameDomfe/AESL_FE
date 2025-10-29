import React from 'react';
import { 
    useProjectFilters, 
    useFavorites, 
    useSearch, 
    usePreferences,
    useNotifications,
    useTheme 
} from '../hooks/useContextHooks';

/**
 * Demo component showing how to use various context hooks
 * This component demonstrates the Context API implementation
 */
const ContextDemo = () => {
    const { projects, filters, setFilter, clearFilters } = useProjectFilters();
    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const { searchTerm, setSearchTerm, resultCount } = useSearch();
    const { preferences, setViewMode, toggleAutoSave } = usePreferences();
    const { showSuccess, showError, showInfo } = useNotifications();
    const { theme, toggleTheme, isDark } = useTheme();

    const handleFilterChange = (type, value) => {
        setFilter(type, value);
        showInfo(`Filter applied: ${type} = ${value}`);
    };

    const handleToggleFavorite = (projectId) => {
        toggleFavorite(projectId);
        const action = isFavorite(projectId) ? 'removed from' : 'added to';
        showSuccess(`Project ${action} favorites!`);
    };

    const handleThemeToggle = () => {
        toggleTheme();
        showInfo(`Theme switched to ${isDark ? 'light' : 'dark'} mode`);
    };

    return (
        <div className={`context-demo p-6 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-2xl font-bold mb-6">Context API Demo</h2>
            
            {/* Theme Section */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Theme Management</h3>
                <button 
                    onClick={handleThemeToggle}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Toggle Theme (Current: {theme})
                </button>
            </section>

            {/* Search Section */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Search Projects</h3>
                <div className="flex gap-4 items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search projects..."
                        className="px-3 py-2 border rounded w-64"
                    />
                    <span className="text-sm text-gray-600">
                        {resultCount} results found
                    </span>
                </div>
            </section>

            {/* Filters Section */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Filter Projects</h3>
                <div className="flex gap-4 items-center mb-3">
                    <select 
                        value={filters.category} 
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="px-3 py-2 border rounded"
                    >
                        <option value="all">All Categories</option>
                        <option value="civic-and-culture">Civic & Culture</option>
                        <option value="education">Education</option>
                        <option value="health">Health</option>
                    </select>
                    
                    <button 
                        onClick={clearFilters}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Clear Filters
                    </button>
                </div>
                <p className="text-sm text-gray-600">
                    Active filters: {JSON.stringify(filters)}
                </p>
            </section>

            {/* Preferences Section */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">User Preferences</h3>
                <div className="flex gap-4 items-center">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="viewMode"
                            checked={preferences.viewMode === 'grid'}
                            onChange={() => setViewMode('grid')}
                        />
                        Grid View
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="viewMode"
                            checked={preferences.viewMode === 'list'}
                            onChange={() => setViewMode('list')}
                        />
                        List View
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={preferences.autoSave}
                            onChange={toggleAutoSave}
                        />
                        Auto Save
                    </label>
                </div>
            </section>

            {/* Projects List */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Projects ({projects.length})</h3>
                <div className={`grid gap-4 ${preferences.viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'}`}>
                    {projects.slice(0, 6).map(project => (
                        <div key={project.id} className="border p-4 rounded">
                            <h4 className="font-medium">{project.name}</h4>
                            <p className="text-sm text-gray-600">{project.location}</p>
                            <button 
                                onClick={() => handleToggleFavorite(project.id)}
                                className={`mt-2 px-3 py-1 rounded text-sm ${
                                    isFavorite(project.id) 
                                        ? 'bg-red-500 text-white' 
                                        : 'bg-gray-200 text-gray-800'
                                }`}
                            >
                                {isFavorite(project.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Favorites Section */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Favorites ({favorites.length})</h3>
                <div className="flex gap-2">
                    {favorites.slice(0, 5).map(projectId => (
                        <span key={projectId} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                            Project {projectId}
                        </span>
                    ))}
                </div>
            </section>

            {/* Notification Buttons */}
            <section>
                <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                <div className="flex gap-2">
                    <button 
                        onClick={() => showSuccess('Success message!')}
                        className="px-3 py-2 bg-green-500 text-white rounded"
                    >
                        Show Success
                    </button>
                    <button 
                        onClick={() => showError('Error message!')}
                        className="px-3 py-2 bg-red-500 text-white rounded"
                    >
                        Show Error
                    </button>
                    <button 
                        onClick={() => showInfo('Info message!')}
                        className="px-3 py-2 bg-blue-500 text-white rounded"
                    >
                        Show Info
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ContextDemo;