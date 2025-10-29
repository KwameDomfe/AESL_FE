import { useApp, useProjects, useNavigation, useUI } from '../contexts';
import persons from '../data/persons';

/**
 * Custom hook for theme management
 */
export const useTheme = () => {
    const { theme, actions } = useApp();
    
    return {
        theme,
        setTheme: actions.setTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light',
        toggleTheme: () => actions.setTheme(theme === 'dark' ? 'light' : 'dark')
    };
};

/**
 * Custom hook for loading states
 */
export const useLoading = () => {
    const { isLoading, actions } = useApp();
    const { utils } = useUI();
    
    return {
        isGlobalLoading: isLoading,
        setGlobalLoading: actions.setLoading,
        isComponentLoading: utils.isLoading,
        setComponentLoading: actions.setComponentLoading
    };
};

/**
 * Custom hook for project filtering and search
 */
export const useProjectFilters = () => {
    const { 
        filteredProjects, 
        searchTerm, 
        filters, 
        sortOrder, 
        actions 
    } = useProjects();
    
    return {
        projects: filteredProjects,
        searchTerm,
        filters,
        sortOrder,
        setFilter: actions.setFilter,
        setSearchTerm: actions.setSearchTerm,
        setSortOrder: actions.setSortOrder,
        clearFilters: actions.clearFilters
    };
};

/**
 * Custom hook for project favorites
 */
export const useFavorites = () => {
    const { favorites, actions } = useProjects();
    
    return {
        favorites,
        toggleFavorite: actions.toggleFavorite,
        isFavorite: (projectId) => favorites.includes(projectId),
        getFavoriteProjects: actions.getFavoriteProjects
    };
};

/**
 * Custom hook for breadcrumb navigation
 */
export const useBreadcrumbs = () => {
    const { breadcrumbs, actions } = useNavigation();
    
    return {
        breadcrumbs,
        addBreadcrumb: actions.addBreadcrumb,
        getCurrentBreadcrumb: () => breadcrumbs[breadcrumbs.length - 1],
        getParentBreadcrumb: () => breadcrumbs[breadcrumbs.length - 2]
    };
};

/**
 * Custom hook for page metadata
 */
export const usePageMeta = () => {
    const { pageTitle, pageMeta, actions } = useNavigation();
    
    return {
        pageTitle,
        pageMeta,
        setPageTitle: actions.setPageTitle,
        setPageMeta: actions.setPageMeta
    };
};

/**
 * Custom hook for notifications
 */
export const useNotifications = () => {
    const { notifications, actions } = useUI();
    
    return {
        notifications,
        showNotification: actions.showNotification,
        hideNotification: actions.hideNotification,
        showSuccess: (message, options = {}) => 
            actions.showNotification({ type: 'success', message, ...options }),
        showError: (message, options = {}) => 
            actions.showNotification({ type: 'error', message, duration: 0, ...options }),
        showWarning: (message, options = {}) => 
            actions.showNotification({ type: 'warning', message, ...options }),
        showInfo: (message, options = {}) => 
            actions.showNotification({ type: 'info', message, ...options })
    };
};

/**
 * Custom hook for modal management
 */
export const useModal = () => {
    const { modal, actions } = useUI();
    
    return {
        modal,
        showModal: actions.showModal,
        hideModal: actions.hideModal,
        isModalOpen: modal.isOpen,
        
        // Convenience methods for common modal types
        showImageModal: (imageUrl, title) => 
            actions.showModal({ type: 'image', content: imageUrl, title }),
        showConfirmModal: (title, message, onConfirm) => 
            actions.showModal({ type: 'confirm', title, content: message, onConfirm }),
        showProjectModal: (project) => 
            actions.showModal({ type: 'project', data: project, size: 'large' })
    };
};

/**
 * Custom hook for responsive design
 */
export const useResponsive = () => {
    const { viewport, utils } = useUI();
    
    return {
        viewport,
        isMobile: utils.isMobile(),
        isTablet: utils.isTablet(),
        isDesktop: utils.isDesktop(),
        getViewportSize: utils.getViewportSize,
        
        // Convenience breakpoint checks
        isSmallScreen: () => viewport.width < 640,
        isMediumScreen: () => viewport.width >= 640 && viewport.width < 1024,
        isLargeScreen: () => viewport.width >= 1024,
        isExtraLargeScreen: () => viewport.width >= 1280
    };
};

/**
 * Custom hook for menu management
 */
export const useMenu = () => {
    const { menu, actions } = useUI();
    
    return {
        menu,
        toggleMenu: actions.toggleMenu,
        openMenu: actions.openMenu,
        closeMenu: actions.closeMenu,
        isMenuOpen: menu.isOpen,
        activeMenu: menu.activeMenu,
        isActiveMenu: (menuName) => menu.activeMenu === menuName
    };
};

/**
 * Custom hook for search functionality
 */
export const useSearch = () => {
    const { searchTerm, filteredProjects, actions } = useProjects();
    // Combine projects and people for global search
    // Each person gets a 'type' field for filtering
    const peopleResults = persons.map(person => ({
        ...person,
        name: `${person.title ? person.title + ' ' : ''}${person.firstName} ${person.lastName}${person.otherNames ? ' ' + person.otherNames : ''}`.trim(),
        type: 'person',
        thumbnail: person.image,
        category: { name: 'People' },
        location: person.nationality || '',
    }));

    // Each project gets a 'type' field for filtering
    const projectResults = filteredProjects.map(project => ({
        ...project,
        type: 'project',
        name: project.name || project.title || '',
        thumbnail: project.image || project.thumbnail || '',
        category: { name: 'Project' },
        location: project.location || '',
    }));

    // For 'all', return both; for filter, filter by type
    const getResults = (filter = 'all') => {
        if (filter === 'people') return peopleResults;
        if (filter === 'projects') return projectResults;
        return [...peopleResults, ...projectResults];
    };

    return {
        searchTerm,
        results: getResults,
        setSearchTerm: actions.setSearchTerm,
        clearSearch: () => actions.setSearchTerm(''),
        hasResults: (filter = 'all') => getResults(filter).length > 0,
        resultCount: (filter = 'all') => getResults(filter).length
    };
};

/**
 * Custom hook for user preferences
 */
export const usePreferences = () => {
    const { userPreferences, actions } = useApp();
    
    return {
        preferences: userPreferences,
        updatePreferences: actions.updateUserPreferences,
        viewMode: userPreferences.viewMode,
        setViewMode: (mode) => actions.updateUserPreferences({ viewMode: mode }),
        itemsPerPage: userPreferences.itemsPerPage,
        setItemsPerPage: (count) => actions.updateUserPreferences({ itemsPerPage: count }),
        autoSave: userPreferences.autoSave,
        toggleAutoSave: () => actions.updateUserPreferences({ autoSave: !userPreferences.autoSave })
    };
};

/**
 * Custom hook for project categories
 */
export const useCategories = () => {
    const { projectCategories, currentCategory, actions } = useProjects();
    
    return {
        categories: projectCategories,
        currentCategory,
        setCurrentCategory: actions.setCurrentCategory,
        getProjectsByCategory: actions.getProjectsByCategory
    };
};

/**
 * Custom hook for error handling
 */
export const useError = () => {
    const { error, actions: appActions } = useApp();
    const { actions: uiActions } = useUI();
    
    return {
        error,
        setError: appActions.setError,
        clearError: appActions.clearError,
        showError: (message) => uiActions.showNotification({ 
            type: 'error', 
            message, 
            duration: 0 
        }),
        handleError: (error, customMessage) => {
            console.error('Application Error:', error);
            const message = customMessage || error.message || 'An unexpected error occurred';
            appActions.setError(message);
            uiActions.showNotification({ 
                type: 'error', 
                message, 
                duration: 0 
            });
        }
    };
};