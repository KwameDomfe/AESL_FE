import React from 'react';
import { Link } from 'react-router-dom';
import { useBreadcrumbs } from '../../hooks/useContextHooks';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ className = '', showIcons = true }) => {
    const { breadcrumbs } = useBreadcrumbs();

    if (breadcrumbs.length <= 1) {
        return null; // Don't show breadcrumbs for home page only
    }

    return (
        <nav 
            className={`breadcrumbs ${className}`}
            aria-label="Breadcrumb navigation"
            id="PageCrumbs"
        >
            <div className="container container90 pv0-25">
                <ol className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((crumb, index) => (
                        <li key={crumb.path} className="flex items-center">
                            {index > 0 && (
                                <span className="mx-2 white" aria-hidden="true">
                                    /
                                </span>
                            )}
                            
                            {crumb.isLast ? (
                                <span 
                                    className="ph0-75 br b--white bw2 mr0-50 white font-medium"
                                    aria-current="page"
                                >
                                    {showIcons && crumb.icon && (
                                        <span className="mr-1" aria-hidden="true">
                                            📍
                                        </span>
                                    )}
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link 
                                    to={crumb.path}
                                    className="ph0-75 br b--white bw2 mr0-50 white hover:underline"
                                >
                                    {showIcons && crumb.icon && (
                                        <span className="mr-1" aria-hidden="true">
                                            🏠
                                        </span>
                                    )}
                                    {crumb.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

Breadcrumbs.propTypes = {
    className: PropTypes.string,
    showIcons: PropTypes.bool
};

export default Breadcrumbs;
