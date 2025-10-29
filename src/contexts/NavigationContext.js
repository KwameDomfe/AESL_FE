import React, { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

// Action types
const NAVIGATION_ACTIONS = {
    SET_CURRENT_PATH: 'SET_CURRENT_PATH',
    SET_BREADCRUMBS: 'SET_BREADCRUMBS',
    ADD_BREADCRUMB: 'ADD_BREADCRUMB',
    SET_PAGE_TITLE: 'SET_PAGE_TITLE',
    SET_PAGE_META: 'SET_PAGE_META',
    SET_NAVIGATION_HISTORY: 'SET_NAVIGATION_HISTORY',
    GO_BACK: 'GO_BACK',
    SET_ACTIVE_SECTION: 'SET_ACTIVE_SECTION'
};

// Initial state
const initialState = {
    currentPath: '/',
    pageTitle: 'AESL - Architects, Engineers & Land Surveyors',
    pageMeta: {
        description: 'Leading architectural, engineering and surveying services',
        keywords: 'architecture, engineering, surveying, construction, Ghana'
    },
    breadcrumbs: [],
    navigationHistory: [],
    activeSection: null,
    isNavigating: false
};

// Breadcrumb configuration for different routes
const breadcrumbConfig = {
    '/': { label: 'Home', icon: 'home' },
    '/projects': { label: 'Projects', icon: 'projects' },
    '/projects/civic-and-culture': { label: 'Civic & Culture', parent: '/projects' },
    '/projects/education': { label: 'Education', parent: '/projects' },
    '/projects/health': { label: 'Health', parent: '/projects' },
    '/projects/office-retail-and-mixed-use': { label: 'Office, Retail & Mixed Use', parent: '/projects' },
    '/projects/sports-and-leisure': { label: 'Sports & Leisure', parent: '/projects' },
    '/projects/residential': { label: 'Residential', parent: '/projects' },
    '/projects/industrial-and-infrastructure': { label: 'Industrial & Infrastructure', parent: '/projects' },
    '/projects/hospitality': { label: 'Hospitality', parent: '/projects' },
    '/projects/landscape-planning-and-survey': { label: 'Landscape Planning & Survey', parent: '/projects' },
    '/practice': { label: 'Practice', icon: 'practice' },
    '/practice/history': { label: 'History', parent: '/practice' },
    '/practice/mandate': { label: 'Mandate', parent: '/practice' },
    '/practice/functions': { label: 'Functions', parent: '/practice' },
    '/practice/mission-vision-and-values': { label: 'Mission, Vision & Values', parent: '/practice' },
    '/practice/sector-ministry': { label: 'Sector Ministry', parent: '/practice' },
    '/practice/services': { label: 'Services', parent: '/practice' },
    '/practice/client-speak': { label: 'Client Speak', parent: '/practice' },
    '/practice/alliances': { label: 'Alliances', parent: '/practice' },
    '/practice/corporate-responsibilities': { label: 'Corporate Responsibilities', parent: '/practice' },
    '/practice/corporate-governance': { label: 'Corporate Governance', parent: '/practice' },
    '/practice/management': { label: 'Management', parent: '/practice' },
    '/practice/management/managing-director': { label: 'Managing Director', parent: '/practice/management' },
    '/practice/management/deputy-managing-director': { label: 'Deputy Managing Director', parent: '/practice/management' },
    '/practice/management/head-of-department': { label: 'Head of Department', parent: '/practice/management' },
    '/practice/management/regional-consultant': { label: 'Regional Consultant', parent: '/practice/management' },
    // Optional friendly labels for specific HOD sub-paths
    '/practice/management/head-of-department/structural': { label: 'Civil Structures', parent: '/practice/management/head-of-department' },
    '/people': { label: 'People', icon: 'people' },
    '/people/principal-consultants': { label: 'Principal Consultants', parent: '/people' },
    '/people/senior-consultants': { label: 'Senior Consultants', parent: '/people' },
    '/people/consultants': { label: 'Consultants', parent: '/people' },
    '/people/senior-professionals': { label: 'Senior Professionals', parent: '/people' },
    '/people/professionals': { label: 'Professionals', parent: '/people' },
    '/people/assistant-professionals': { label: 'Assistant Professionals', parent: '/people' },
    '/people/probationers': { label: 'Probationers', parent: '/people' },
    '/people/support-team': { label: 'Support Team', parent: '/people' },
    '/people/service-personnel': { label: 'Service Personnel', parent: '/people' },
    '/principles': { label: 'Principles', icon: 'principles' },
    '/news': { label: 'News', icon: 'news' },
    '/publications': { label: 'Publications', icon: 'publications' },
    // Publications categories
    '/publications/technical-reports': { label: 'Technical Reports', parent: '/publications' },
    '/publications/financial-reports': { label: 'Financial Reports', parent: '/publications' },
    '/publications/articles': { label: 'Articles', parent: '/publications' },
    '/publications/white-papers': { label: 'White Papers', parent: '/publications' },
    '/publications/reviews': { label: 'Reviews', parent: '/publications' }
};

// Reducer function
const navigationReducer = (state, action) => {
    switch (action.type) {
        case NAVIGATION_ACTIONS.SET_CURRENT_PATH:
            return {
                ...state,
                currentPath: action.payload,
                navigationHistory: [...state.navigationHistory.slice(-9), action.payload]
            };
        
        case NAVIGATION_ACTIONS.SET_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: action.payload
            };
        
        case NAVIGATION_ACTIONS.ADD_BREADCRUMB:
            return {
                ...state,
                breadcrumbs: [...state.breadcrumbs, action.payload]
            };
        
        case NAVIGATION_ACTIONS.SET_PAGE_TITLE:
            return {
                ...state,
                pageTitle: action.payload
            };
        
        case NAVIGATION_ACTIONS.SET_PAGE_META:
            return {
                ...state,
                pageMeta: {
                    ...state.pageMeta,
                    ...action.payload
                }
            };
        
        case NAVIGATION_ACTIONS.SET_NAVIGATION_HISTORY:
            return {
                ...state,
                navigationHistory: action.payload
            };
        
        case NAVIGATION_ACTIONS.GO_BACK:
            const previousPath = state.navigationHistory[state.navigationHistory.length - 2];
            return {
                ...state,
                currentPath: previousPath || '/',
                navigationHistory: state.navigationHistory.slice(0, -1)
            };
        
        case NAVIGATION_ACTIONS.SET_ACTIVE_SECTION:
            return {
                ...state,
                activeSection: action.payload
            };
        
        default:
            return state;
    }
};

// Create context
const NavigationContext = createContext();

// Utility function to generate breadcrumbs
const generateBreadcrumbs = (path) => {
    const pathSegments = path.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', path: '/', icon: 'home' }];
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const config = breadcrumbConfig[currentPath];
        
        if (config) {
            breadcrumbs.push({
                label: config.label,
                path: currentPath,
                icon: config.icon,
                isLast: index === pathSegments.length - 1
            });
        } else {
            // Generate breadcrumb for dynamic routes
            const formattedLabel = segment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            
            breadcrumbs.push({
                label: formattedLabel,
                path: currentPath,
                isLast: index === pathSegments.length - 1
            });
        }
    });
    
    return breadcrumbs;
};

// Context provider component
export const NavigationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(navigationReducer, initialState);
    const location = useLocation();

    // Update current path and breadcrumbs when location changes
    useEffect(() => {
        const currentPath = location.pathname;
        dispatch({ type: NAVIGATION_ACTIONS.SET_CURRENT_PATH, payload: currentPath });
        
        const breadcrumbs = generateBreadcrumbs(currentPath);
        dispatch({ type: NAVIGATION_ACTIONS.SET_BREADCRUMBS, payload: breadcrumbs });
        
        // Update document title
        const config = breadcrumbConfig[currentPath];
        if (config) {
            const title = `${config.label} - AESL`;
            dispatch({ type: NAVIGATION_ACTIONS.SET_PAGE_TITLE, payload: title });
            document.title = title;
        }
    }, [location.pathname]);

    // Action creators
    const actions = {
        setPageTitle: (title) => {
            const fullTitle = `${title} - AESL`;
            dispatch({ type: NAVIGATION_ACTIONS.SET_PAGE_TITLE, payload: fullTitle });
            document.title = fullTitle;
        },
        
        setPageMeta: (meta) => {
            dispatch({ type: NAVIGATION_ACTIONS.SET_PAGE_META, payload: meta });
            
            // Update meta tags
            if (meta.description) {
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) metaDesc.setAttribute('content', meta.description);
            }
            
            if (meta.keywords) {
                const metaKeywords = document.querySelector('meta[name="keywords"]');
                if (metaKeywords) metaKeywords.setAttribute('content', meta.keywords);
            }
        },
        
        addBreadcrumb: (breadcrumb) => {
            dispatch({ type: NAVIGATION_ACTIONS.ADD_BREADCRUMB, payload: breadcrumb });
        },
        
        goBack: () => {
            dispatch({ type: NAVIGATION_ACTIONS.GO_BACK });
        },
        
        setActiveSection: (section) => {
            dispatch({ type: NAVIGATION_ACTIONS.SET_ACTIVE_SECTION, payload: section });
        },
        
        getParentPath: (path) => {
            const segments = path.split('/').filter(Boolean);
            if (segments.length <= 1) return '/';
            return '/' + segments.slice(0, -1).join('/');
        },
        
        isCurrentPath: (path) => {
            return state.currentPath === path;
        },
        
        isParentPath: (path) => {
            return state.currentPath.startsWith(path) && path !== '/';
        },
        
        getNavigationHistory: () => {
            return state.navigationHistory;
        },
        
        clearHistory: () => {
            dispatch({ type: NAVIGATION_ACTIONS.SET_NAVIGATION_HISTORY, payload: [] });
        }
    };

    const value = {
        ...state,
        actions,
        breadcrumbConfig
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};

NavigationProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// Custom hook to use navigation context
export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};

export { NAVIGATION_ACTIONS };
export default NavigationContext;