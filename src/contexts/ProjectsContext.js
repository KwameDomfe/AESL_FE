import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { projects as projectsData, projectCategories } from '../data/projectsInfo';

// Action types
const PROJECTS_ACTIONS = {
    SET_PROJECTS: 'SET_PROJECTS',
    SET_FILTERED_PROJECTS: 'SET_FILTERED_PROJECTS',
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',
    SET_FILTER: 'SET_FILTER',
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
    SET_SORT_ORDER: 'SET_SORT_ORDER',
    SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY',
    ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
    REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
    SET_VIEW_MODE: 'SET_VIEW_MODE'
};

// Initial state
const initialState = {
    projects: projectsData,
    filteredProjects: projectsData,
    currentProject: null,
    currentCategory: null,
    searchTerm: '',
    filters: {
        category: 'all',
        status: 'all',
        year: 'all',
        location: 'all'
    },
    sortOrder: {
        field: 'name',
        direction: 'asc'
    },
    favorites: [],
    viewMode: 'grid', // grid, list, map
    isLoading: false,
    error: null
};

// Reducer function
const projectsReducer = (state, action) => {
    switch (action.type) {
        case PROJECTS_ACTIONS.SET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                filteredProjects: action.payload
            };
        
        case PROJECTS_ACTIONS.SET_FILTERED_PROJECTS:
            return {
                ...state,
                filteredProjects: action.payload
            };
        
        case PROJECTS_ACTIONS.SET_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: action.payload
            };
        
        case PROJECTS_ACTIONS.SET_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.type]: action.payload.value
                }
            };
        
        case PROJECTS_ACTIONS.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            };
        
        case PROJECTS_ACTIONS.SET_SORT_ORDER:
            return {
                ...state,
                sortOrder: action.payload
            };
        
        case PROJECTS_ACTIONS.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            };
        
        case PROJECTS_ACTIONS.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        
        case PROJECTS_ACTIONS.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(id => id !== action.payload)
            };
        
        case PROJECTS_ACTIONS.SET_VIEW_MODE:
            return {
                ...state,
                viewMode: action.payload
            };
        
        default:
            return state;
    }
};

// Create context
const ProjectsContext = createContext();

// Utility functions
const filterProjects = (projects, filters, searchTerm) => {
    return projects.filter(project => {
        // Search filter
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = 
                project.name.toLowerCase().includes(searchLower) ||
                project.location.toLowerCase().includes(searchLower) ||
                project.client.toLowerCase().includes(searchLower) ||
                project.category.name.toLowerCase().includes(searchLower);
            
            if (!matchesSearch) return false;
        }
        
        // Category filter
        if (filters.category !== 'all') {
            if (project.category.url !== filters.category) return false;
        }
        
        // Status filter
        if (filters.status !== 'all') {
            if (project.status !== filters.status) return false;
        }
        
        // Year filter
        if (filters.year !== 'all') {
            const projectYear = new Date(project.startDate || '2020').getFullYear().toString();
            if (projectYear !== filters.year) return false;
        }
        
        // Location filter
        if (filters.location !== 'all') {
            if (!project.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
        }
        
        return true;
    });
};

const sortProjects = (projects, sortOrder) => {
    return [...projects].sort((a, b) => {
        const { field, direction } = sortOrder;
        let aValue = a[field];
        let bValue = b[field];
        
        // Handle nested properties
        if (field.includes('.')) {
            const fields = field.split('.');
            aValue = fields.reduce((obj, key) => obj?.[key], a);
            bValue = fields.reduce((obj, key) => obj?.[key], b);
        }
        
        // Convert to lowercase for string comparison
        if (typeof aValue === 'string') aValue = aValue.toLowerCase();
        if (typeof bValue === 'string') bValue = bValue.toLowerCase();
        
        if (direction === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });
};

// Context provider component
export const ProjectsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, initialState);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const savedFavorites = localStorage.getItem('aeslFavoriteProjects');
        if (savedFavorites) {
            try {
                const favorites = JSON.parse(savedFavorites);
                favorites.forEach(projectId => {
                    dispatch({ type: PROJECTS_ACTIONS.ADD_TO_FAVORITES, payload: projectId });
                });
            } catch (error) {
                console.warn('Failed to load favorite projects:', error);
            }
        }
    }, []);

    // Save favorites to localStorage when they change
    useEffect(() => {
        localStorage.setItem('aeslFavoriteProjects', JSON.stringify(state.favorites));
    }, [state.favorites]);

    // Filter and sort projects whenever dependencies change
    const processedProjects = useMemo(() => {
        const filtered = filterProjects(state.projects, state.filters, state.searchTerm);
        return sortProjects(filtered, state.sortOrder);
    }, [state.projects, state.filters, state.searchTerm, state.sortOrder]);


    // Action creators
    const actions = {
        setCurrentProject: (project) => {
            if (state.currentProject !== project) {
                dispatch({ type: PROJECTS_ACTIONS.SET_CURRENT_PROJECT, payload: project });
            }
        },
        setFilter: (type, value) => {
            if (state.filters[type] !== value) {
                dispatch({ type: PROJECTS_ACTIONS.SET_FILTER, payload: { type, value } });
            }
        },
        setSearchTerm: (term) => {
            if (state.searchTerm !== term) {
                dispatch({ type: PROJECTS_ACTIONS.SET_SEARCH_TERM, payload: term });
            }
        },
        setSortOrder: (field, direction = 'asc') => {
            if (state.sortOrder.field !== field || state.sortOrder.direction !== direction) {
                dispatch({ type: PROJECTS_ACTIONS.SET_SORT_ORDER, payload: { field, direction } });
            }
        },
        setCurrentCategory: (category) => {
            if (state.currentCategory !== category) {
                dispatch({ type: PROJECTS_ACTIONS.SET_CURRENT_CATEGORY, payload: category });
            }
        },
        toggleFavorite: (projectId) => {
            if (state.favorites.includes(projectId)) {
                dispatch({ type: PROJECTS_ACTIONS.REMOVE_FROM_FAVORITES, payload: projectId });
            } else {
                dispatch({ type: PROJECTS_ACTIONS.ADD_TO_FAVORITES, payload: projectId });
            }
        },
        setViewMode: (mode) => {
            if (state.viewMode !== mode) {
                dispatch({ type: PROJECTS_ACTIONS.SET_VIEW_MODE, payload: mode });
            }
        },
        clearFilters: () => {
            dispatch({ type: PROJECTS_ACTIONS.SET_FILTER, payload: { type: 'category', value: 'all' } });
            dispatch({ type: PROJECTS_ACTIONS.SET_FILTER, payload: { type: 'status', value: 'all' } });
            dispatch({ type: PROJECTS_ACTIONS.SET_FILTER, payload: { type: 'year', value: 'all' } });
            dispatch({ type: PROJECTS_ACTIONS.SET_FILTER, payload: { type: 'location', value: 'all' } });
            dispatch({ type: PROJECTS_ACTIONS.SET_SEARCH_TERM, payload: '' });
        },
        getProjectById: (id) => {
            return state.projects.find(project => project.id === id);
        },
        getProjectsByCategory: (categoryUrl) => {
            return state.projects.filter(project => project.category.url === categoryUrl);
        },
        getFavoriteProjects: () => {
            return state.projects.filter(project => state.favorites.includes(project.id));
        }
    };

    const value = {
        ...state,
        filteredProjects: processedProjects,
        actions,
        projectCategories,
        stats: {
            totalProjects: state.projects.length,
            filteredCount: processedProjects.length,
            favoriteCount: state.favorites.length,
            categoriesCount: projectCategories.length
        }
    };

    return (
        <ProjectsContext.Provider value={value}>
            {children}
        </ProjectsContext.Provider>
    );
};

ProjectsProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// Custom hook to use projects context
export const useProjects = () => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error('useProjects must be used within a ProjectsProvider');
    }
    return context;
};

export { PROJECTS_ACTIONS };
export default ProjectsContext;