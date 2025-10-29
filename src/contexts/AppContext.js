import React, { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

// Action types
const APP_ACTIONS = {
    SET_THEME: 'SET_THEME',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR',
    SET_USER_PREFERENCES: 'SET_USER_PREFERENCES',
    TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
    SET_LANGUAGE: 'SET_LANGUAGE'
};

// Initial state
const initialState = {
    theme: 'light',
    isLoading: false,
    error: null,
    userPreferences: {
        viewMode: 'grid', // grid or list
        itemsPerPage: 12,
        autoSave: true
    },
    sidebar: {
        isOpen: true,
        isPinned: false
    },
    language: 'en',
    appVersion: '1.0.0'
};

// Reducer function
const appReducer = (state, action) => {
    switch (action.type) {
        case APP_ACTIONS.SET_THEME:
            return {
                ...state,
                theme: action.payload
            };
        
        case APP_ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        
        case APP_ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        
        case APP_ACTIONS.CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        
        case APP_ACTIONS.SET_USER_PREFERENCES:
            return {
                ...state,
                userPreferences: {
                    ...state.userPreferences,
                    ...action.payload
                }
            };
        
        case APP_ACTIONS.TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    isOpen: !state.sidebar.isOpen
                }
            };
        
        case APP_ACTIONS.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        
        default:
            return state;
    }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Load preferences from localStorage on mount
    useEffect(() => {
        const savedPreferences = localStorage.getItem('aeslAppPreferences');
        if (savedPreferences) {
            try {
                const preferences = JSON.parse(savedPreferences);
                dispatch({
                    type: APP_ACTIONS.SET_USER_PREFERENCES,
                    payload: preferences
                });
            } catch (error) {
                console.warn('Failed to load user preferences:', error);
            }
        }
    }, []);

    // Save preferences to localStorage when they change
    useEffect(() => {
        localStorage.setItem('aeslAppPreferences', JSON.stringify(state.userPreferences));
    }, [state.userPreferences]);

    // Action creators
    const actions = {
        setTheme: (theme) => {
            dispatch({ type: APP_ACTIONS.SET_THEME, payload: theme });
        },
        
        setLoading: (isLoading) => {
            dispatch({ type: APP_ACTIONS.SET_LOADING, payload: isLoading });
        },
        
        setError: (error) => {
            dispatch({ type: APP_ACTIONS.SET_ERROR, payload: error });
        },
        
        clearError: () => {
            dispatch({ type: APP_ACTIONS.CLEAR_ERROR });
        },
        
        updateUserPreferences: (preferences) => {
            dispatch({ type: APP_ACTIONS.SET_USER_PREFERENCES, payload: preferences });
        },
        
        toggleSidebar: () => {
            dispatch({ type: APP_ACTIONS.TOGGLE_SIDEBAR });
        },
        
        setLanguage: (language) => {
            dispatch({ type: APP_ACTIONS.SET_LANGUAGE, payload: language });
        }
    };

    const value = {
        ...state,
        actions
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// Custom hook to use app context
export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};

export { APP_ACTIONS };
export default AppContext;