import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Action types
const UI_ACTIONS = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL',
    SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
    HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
    SET_LOADING: 'SET_LOADING',
    TOGGLE_MENU: 'TOGGLE_MENU',
    SET_MENU_OPEN: 'SET_MENU_OPEN',
    SHOW_TOOLTIP: 'SHOW_TOOLTIP',
    HIDE_TOOLTIP: 'HIDE_TOOLTIP',
    SET_SCROLL_POSITION: 'SET_SCROLL_POSITION',
    SET_VIEWPORT_SIZE: 'SET_VIEWPORT_SIZE',
    SHOW_CONFIRMATION: 'SHOW_CONFIRMATION',
    HIDE_CONFIRMATION: 'HIDE_CONFIRMATION'
};

// Initial state
const initialState = {
    // Modal state
    modal: {
        isOpen: false,
        type: null,
        title: '',
        content: null,
        data: null,
        size: 'medium', // small, medium, large, full
        closable: true
    },
    
    // Notification state
    notifications: [],
    
    // Loading states
    loading: {
        global: false,
        components: {}
    },
    
    // Menu state
    menu: {
        isOpen: false,
        activeMenu: null
    },
    
    // Tooltip state
    tooltip: {
        isVisible: false,
        content: '',
        position: { x: 0, y: 0 },
        placement: 'top'
    },
    
    // Scroll and viewport
    scrollPosition: 0,
    viewport: {
        width: typeof window !== 'undefined' ? window.innerWidth : 1024,
        height: typeof window !== 'undefined' ? window.innerHeight : 768,
        isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
        isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
        isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
    },
    
    // Confirmation dialog
    confirmation: {
        isOpen: false,
        title: '',
        message: '',
        onConfirm: null,
        onCancel: null,
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        type: 'default' // default, danger, warning
    }
};

// Reducer function
const uiReducer = (state, action) => {
    switch (action.type) {
        case UI_ACTIONS.SHOW_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: true,
                    ...action.payload
                }
            };
        
        case UI_ACTIONS.HIDE_MODAL:
            return {
                ...state,
                modal: {
                    ...initialState.modal
                }
            };
        
        case UI_ACTIONS.SHOW_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, {
                    id: Date.now() + Math.random(),
                    timestamp: new Date(),
                    ...action.payload
                }]
            };
        
        case UI_ACTIONS.HIDE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.filter(
                    notification => notification.id !== action.payload
                )
            };
        
        case UI_ACTIONS.SET_LOADING:
            if (action.payload.component) {
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        components: {
                            ...state.loading.components,
                            [action.payload.component]: action.payload.isLoading
                        }
                    }
                };
            } else {
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        global: action.payload.isLoading
                    }
                };
            }
        
        case UI_ACTIONS.TOGGLE_MENU:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    isOpen: !state.menu.isOpen,
                    activeMenu: !state.menu.isOpen ? action.payload : null
                }
            };
        
        case UI_ACTIONS.SET_MENU_OPEN:
            return {
                ...state,
                menu: {
                    isOpen: action.payload.isOpen,
                    activeMenu: action.payload.menu || null
                }
            };
        
        case UI_ACTIONS.SHOW_TOOLTIP:
            return {
                ...state,
                tooltip: {
                    isVisible: true,
                    ...action.payload
                }
            };
        
        case UI_ACTIONS.HIDE_TOOLTIP:
            return {
                ...state,
                tooltip: {
                    ...initialState.tooltip
                }
            };
        
        case UI_ACTIONS.SET_SCROLL_POSITION:
            return {
                ...state,
                scrollPosition: action.payload
            };
        
        case UI_ACTIONS.SET_VIEWPORT_SIZE:
            const { width, height } = action.payload;
            return {
                ...state,
                viewport: {
                    width,
                    height,
                    isMobile: width < 768,
                    isTablet: width >= 768 && width < 1024,
                    isDesktop: width >= 1024
                }
            };
        
        case UI_ACTIONS.SHOW_CONFIRMATION:
            return {
                ...state,
                confirmation: {
                    isOpen: true,
                    ...action.payload
                }
            };
        
        case UI_ACTIONS.HIDE_CONFIRMATION:
            return {
                ...state,
                confirmation: {
                    ...initialState.confirmation
                }
            };
        
        default:
            return state;
    }
};

// Create context
const UIContext = createContext();

// Context provider component
export const UIProvider = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    // Action creators
    const actions = {
        // Modal actions
        showModal: (modalConfig) => {
            dispatch({ type: UI_ACTIONS.SHOW_MODAL, payload: modalConfig });
        },
        
        hideModal: () => {
            dispatch({ type: UI_ACTIONS.HIDE_MODAL });
        },
        
        // Notification actions
        showNotification: (notification) => {
            const id = Date.now() + Math.random();
            dispatch({ 
                type: UI_ACTIONS.SHOW_NOTIFICATION, 
                payload: { 
                    id,
                    type: 'info',
                    duration: 5000,
                    ...notification 
                } 
            });
            
            // Auto-hide notification
            if (notification.duration !== 0) {
                setTimeout(() => {
                    dispatch({ type: UI_ACTIONS.HIDE_NOTIFICATION, payload: id });
                }, notification.duration || 5000);
            }
            
            return id;
        },
        
        hideNotification: (id) => {
            dispatch({ type: UI_ACTIONS.HIDE_NOTIFICATION, payload: id });
        },
        
        // Loading actions
        setGlobalLoading: (isLoading) => {
            dispatch({ type: UI_ACTIONS.SET_LOADING, payload: { isLoading } });
        },
        
        setComponentLoading: (component, isLoading) => {
            dispatch({ type: UI_ACTIONS.SET_LOADING, payload: { component, isLoading } });
        },
        
        // Menu actions
        toggleMenu: (menuName) => {
            dispatch({ type: UI_ACTIONS.TOGGLE_MENU, payload: menuName });
        },
        
        openMenu: (menuName) => {
            dispatch({ type: UI_ACTIONS.SET_MENU_OPEN, payload: { isOpen: true, menu: menuName } });
        },
        
        closeMenu: () => {
            dispatch({ type: UI_ACTIONS.SET_MENU_OPEN, payload: { isOpen: false } });
        },
        
        // Tooltip actions
        showTooltip: (content, position, placement = 'top') => {
            dispatch({ 
                type: UI_ACTIONS.SHOW_TOOLTIP, 
                payload: { content, position, placement } 
            });
        },
        
        hideTooltip: () => {
            dispatch({ type: UI_ACTIONS.HIDE_TOOLTIP });
        },
        
        // Scroll and viewport actions
        setScrollPosition: (position) => {
            dispatch({ type: UI_ACTIONS.SET_SCROLL_POSITION, payload: position });
        },
        
        setViewportSize: (width, height) => {
            dispatch({ type: UI_ACTIONS.SET_VIEWPORT_SIZE, payload: { width, height } });
        },
        
        // Confirmation actions
        showConfirmation: (config) => {
            return new Promise((resolve) => {
                dispatch({ 
                    type: UI_ACTIONS.SHOW_CONFIRMATION, 
                    payload: {
                        ...config,
                        onConfirm: () => {
                            resolve(true);
                            dispatch({ type: UI_ACTIONS.HIDE_CONFIRMATION });
                        },
                        onCancel: () => {
                            resolve(false);
                            dispatch({ type: UI_ACTIONS.HIDE_CONFIRMATION });
                        }
                    }
                });
            });
        },
        
        hideConfirmation: () => {
            dispatch({ type: UI_ACTIONS.HIDE_CONFIRMATION });
        }
    };

    // Utility functions
    const utils = {
        isLoading: (component) => {
            if (component) {
                return state.loading.components[component] || false;
            }
            return state.loading.global;
        },
        
        getNotificationCount: () => state.notifications.length,
        
        isMobile: () => state.viewport.isMobile,
        isTablet: () => state.viewport.isTablet,
        isDesktop: () => state.viewport.isDesktop,
        
        getViewportSize: () => ({
            width: state.viewport.width,
            height: state.viewport.height
        })
    };

    const value = {
        ...state,
        actions,
        utils
    };

    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    );
};

UIProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// Custom hook to use UI context
export const useUI = () => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
};

export { UI_ACTIONS };
export default UIContext;