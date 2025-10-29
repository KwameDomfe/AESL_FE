import React from 'react';
import PropTypes from 'prop-types';
import { AppProvider } from './AppContext';
import { ProjectsProvider } from './ProjectsContext';
import { NavigationProvider } from './NavigationContext';
import { UIProvider } from './UIContext';

/**
 * Combined Context Provider
 * 
 * This component wraps all context providers in the correct order
 * to provide global state management throughout the application.
 * 
 * Provider hierarchy:
 * 1. AppProvider - Global app state (theme, preferences, etc.)
 * 2. UIProvider - UI state (modals, notifications, loading, etc.)
 * 3. NavigationProvider - Navigation state (breadcrumbs, routing, etc.)
 * 4. ProjectsProvider - Projects data and filtering
 */
const CombinedContextProvider = ({ children }) => {
    return (
        <AppProvider>
            <UIProvider>
                <NavigationProvider>
                    <ProjectsProvider>
                        {children}
                    </ProjectsProvider>
                </NavigationProvider>
            </UIProvider>
        </AppProvider>
    );
};

CombinedContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default CombinedContextProvider;