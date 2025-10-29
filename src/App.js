// CSS
import './App.css';
import './css/utilities.css';
import './css/gdb_normalize.css';
import { HelmetProvider } from 'react-helmet-async';

/* React Router Dom */
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

// Context Providers (removed unused imports)

// Layouts
import RootLayout from './layouts/RootLayout';
// import HelpLayout from './layouts/TwoColumn_3_9_Layout';
// import BlogsLayout from './layouts/BlogsLayout';

/* 
    Pages Imports 
*/

// Home Page Start
import Index from './pages/Index';
// Home Page End

// Project Pages Start
import ProjectsIndex from './pages/projects/Index';
import ProjectFilms from './pages/projects/ProjectFilms';
import ProjectsMap from './pages/projects/ProjectsMap';
import ProjectsList from './pages/projects/ProjectsList';
import ProjectCategoryDetail from './pages/projects/ProjectCategoryDetail';
import ProjectDetails from './pages/projects/projectDetails/ProjectDetails';

// Project Pages End

// Practice Pages Start
import PracticeIndex from './pages/practice/Index';
import History from './pages/practice/history/History';
import Mandate from './pages/practice/mandate/Mandate';
import Functions from './pages/practice/functions/Functions';
import MVV from './pages/practice/mvv/MVV';
import SectorMinistry from './pages/practice/sector_ministry/SectorMinistry';
import Management from './pages/practice/management/Management';
import ManagingDirectorDetails from './pages/practice/management/ManagingDirectorDetails';
import HODDetails from './pages/practice/management/HODDetails';
import DeputyManagingDirectorDetails from './pages/practice/management/DeputyManagingDirectorDetails';
import RegionalConsultantDetails from './pages/practice/management/RegionalConsultantDetails';
import CorporateGovernance from './pages/practice/corporate_governance/CorporateGovernance';
import BoardChairman from './pages/practice/corporate_governance/BoardChairman';
import BoardMember from './pages/practice/corporate_governance/BoardMember';
import Services from './pages/practice/services/Services';
import ClientSpeak from './pages/practice/client_speak/ClientSpeak';
import Alliances from './pages/practice/alliances/Alliances';
import CorporateResponsibilities from './pages/practice/corporate_responsibilities/CorporateResponsibilities';
// Practice Pages End

// Principles Pages Start
import PrinciplesIndex from './pages/principles/Index';
// Principles Pages End

// People Pages Start
import PeopleIndex from './pages/people/Index';
import PrincipalConsultants from './pages/people/principal_consultants/PrincipalConsultants';
import PrincipalConsultantDetails from './pages/people/principal_consultants/PrincipalConsultantDetails';
import Consultants from './pages/people/consultants/Consultants';
import ConsultantDetails from './pages/people/consultants/ConsultantDetails';
import SeniorConsultants from './pages/people/senior_consultants/SeniorConsultants';
import SeniorConsultantDetails from './pages/people/senior_consultants/SeniorConsultantDetails';
import SeniorProfessionals from './pages/people/senior_professionals/SeniorProfessionals';
import Professionals from './pages/people/Professionals';
import AssistantProfessionals from './pages/people/AssistantProfessionals';
import Probationers from './pages/people/Probationers';
import SupportTeam from './pages/people/SupportTeam';
import NationalServicePersonnel from './pages/people/NationalServicePersonnel';
import SeniorProfessionalDetails from './pages/people/senior_professionals/SeniorProfessionalDetails';
// People Pages End

// News Pages Start
import NewsIndex from './pages/news/Index';
// News Pages End

// Publications Pages Start
import PublicationsIndex from './pages/publications/Index';
import PublicationsCategory from './pages/publications/Category';
// Publications Pages End

// Test Components Start
import ContextTest from './components/ContextTestClean';
import SimpleTest from './components/SimpleTest';
import MinimalContextTest from './components/MinimalContextTest';
// Test Components End

// Page Not Found Start
import PageNotFound from './pages/miscPages/PageNotFound';
// Page Not Found End

const aeslRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <Index />,
                handle: {
                    crumb: () => "Home"
                }
            },
            {
                path: "projects",
                handle: {
                    crumb: () => "Projects"
                },
                children: [
                    {
                        index: true,
                        element: <ProjectsIndex />
                    },
                    {
                        path: ":category",
                        element: <ProjectCategoryDetail />,
                        handle: {
                            crumb: (data) => data.params.category
                        }
                    },
                    {
                        path: "project-films",
                        element: <ProjectFilms />,
                        handle: {
                            crumb: () => "Project Films"
                        }
                    },
                    {
                        path: "projects-list",
                        element: <ProjectsList />,
                        handle: {
                            crumb: () => "Projects List"
                        }
                    },
                    {
                        path: "projects-map",
                        element: <ProjectsMap />,
                        handle: {
                            crumb: () => "Projects Map"
                        }
                    },
                    {
                        path: "project-category-detail",
                        element: <ProjectCategoryDetail />,
                        handle: {
                            crumb: () => "Category Detail"
                        }
                    },
                    {
                        path: ":category/:subcategory/:slug",
                        element: <ProjectDetails />,
                        handle: {
                            crumb: (data) => `Project Details`
                        }
                    }
                ]
            },
            {
                path: "practice",
                handle: {
                    crumb: () => "Practice"
                },
                children: [
                    {
                        index: true,
                        element: <PracticeIndex />
                    },
                    {
                        path: "history",
                        element: <History />,
                        handle: {
                            crumb: () => "History"
                        }
                    },
                    {
                        path: "mandate",
                        element: <Mandate />,
                        handle: {
                            crumb: () => "Mandate"
                        }
                    },
                    {
                        path: "functions",
                        element: <Functions />,
                        handle: {
                            crumb: () => "Functions"
                        }
                    },
                    {
                        path: "mission-vision-and-values",
                        element: <MVV />,
                        handle: {
                            crumb: () => "Mission, Vision & Values"
                        }
                    },
                    {
                        path: "sector-ministry",
                        element: <SectorMinistry />,
                        handle: {
                            crumb: () => "Sector Ministry"
                        }
                    },
                    {
                        path: "services",
                        element: <Services />,
                        handle: {
                            crumb: () => "Services"
                        }
                    },
                    {
                        path: "client-speak",
                        element: <ClientSpeak />,
                        handle: {
                            crumb: () => "Client Speak"
                        }
                    },
                    {
                        path: "alliances",
                        element: <Alliances />,
                        handle: {
                            crumb: () => "Alliances"
                        }
                    },
                    {
                        path: "corporate-responsibilities",
                        element: <CorporateResponsibilities />,
                        handle: {
                            crumb: () => "Corporate Responsibilities"
                        }
                    },
                    {
                        path: "corporate-governance",
                        handle: {
                            crumb: () => "Corporate Governance"
                        },
                        children: [
                            {
                                index: true,
                                element: <CorporateGovernance />
                            },
                            {
                                path: "board-chairman",
                                element: <BoardChairman />,
                                handle: {
                                    crumb: () => "Board Chairman"
                                }
                            },
                            {
                                path: "board-member",
                                element: <BoardMember />,
                                handle: {
                                    crumb: () => "Board Member"
                                }
                            }
                        ]
                    },
                    {
                        path: "management",
                        handle: {
                            crumb: () => "Management"
                        },
                        children: [
                            {
                                index: true,
                                element: <Management />
                            },
                            {
                                path: "managing-director",
                                element: <ManagingDirectorDetails />,
                                handle: {
                                    crumb: () => "Managing Director"
                                }
                            },
                            {
                                path: "deputy-managing-director/:id",
                                element: <DeputyManagingDirectorDetails />,
                                handle: {
                                    crumb: () => "Deputy Managing Director"
                                }
                            },
                            {
                                path: "head-of-department/:id",
                                element: <HODDetails />,
                                handle: {
                                    crumb: () => "Head of Department"
                                }
                            },
                            {
                                path: "regional-consultant/:id",
                                element: <RegionalConsultantDetails />,
                                handle: {
                                    crumb: () => "Regional Consultant"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: "people",
                handle: {
                    crumb: () => "People"
                },
                children: [
                    {
                        index: true,
                        element: <PeopleIndex />
                    },
                    {
                        path: "principal-consultants",
                        element: <PrincipalConsultants />,
                        handle: {
                            crumb: () => "Principal Consultants"
                        }
                    },
                    {
                        path: "principal-consultants/:id",
                        element: <PrincipalConsultantDetails />,
                        handle: {
                            crumb: () => "Principal Consultant Details"
                        }
                    },
                    {
                        path: "senior-consultants",
                        element: <SeniorConsultants />,
                        handle: {
                            crumb: () => "Senior Consultants"
                        }
                    },
                    {
                        path: "senior-consultants/:id",
                        element: <SeniorConsultantDetails />,
                        handle: {
                            crumb: () => "Senior Consultant Details"
                        }
                    },
                    {
                        path: "consultants",
                        element: <Consultants />,
                        handle: {
                            crumb: () => "Consultants"
                        }
                    },
                    {
                        path: "consultants/:slug",
                        element: <ConsultantDetails />, 
                        handle: {
                            crumb: () => "Consultant Details"
                        }
                    },
                    {
                        path: "senior-professionals",
                        element: <SeniorProfessionals />,
                        handle: {
                            crumb: () => "Senior Professionals"
                        }
                    },
                    {
                        path: "senior-professionals/:slug",
                        element: <SeniorProfessionalDetails
                         />,
                        handle: {
                            crumb: () => "Senior Professionals"
                        }
                    },
                    {
                        path: "professionals",
                        element: <Professionals />,
                        handle: {
                            crumb: () => "Professionals"
                        }
                    },
                    {
                        path: "assistant-professionals",
                        element: <AssistantProfessionals />,
                        handle: {
                            crumb: () => "Assistant Professionals"
                        }
                    },
                    {
                        path: "probationers",
                        element: <Probationers />,
                        handle: {
                            crumb: () => "Probationers"
                        }
                    },
                    {
                        path: "support-team",
                        element: <SupportTeam />,
                        handle: {
                            crumb: () => "Support Team"
                        }
                    },
                    {
                        path: "service-personnel",
                        element: <NationalServicePersonnel />,
                        handle: {
                            crumb: () => "Service Personnel"
                        }
                    }
                ]
            },
            {
                path: "principles",
                handle: {
                    crumb: () => "Principles"
                },
                children: [
                    {
                        index: true,
                        element: <PrinciplesIndex />
                    }
                    // Future routes can be added here
                ]
            },
            {
                path: "news",
                handle: {
                    crumb: () => "News"
                },
                children: [
                    {
                        index: true,
                        element: <NewsIndex />
                    }
                    // Future routes can be added here
                ]
            },
            {
                path: "publications",
                handle: {
                    crumb: () => "Publications"
                },
                children: [
                    {
                        index: true,
                        element: <PublicationsIndex />
                    },
                    {
                        path: ":category",
                        element: <PublicationsCategory />,
                        handle: {
                            crumb: (data) => data.params.category
                        }
                    }
                    // Future routes can be added here
                ]
            },
            {
                path: "context-test",
                element: <ContextTest />,
                handle: {
                    crumb: () => "Context Test"
                }
            },
            {
                path: "simple-test",
                element: <SimpleTest />,
                handle: {
                    crumb: () => "Simple Test"
                }
            },
            {
                path: "minimal-context-test",
                element: <MinimalContextTest />,
                handle: {
                    crumb: () => "Minimal Context Test"
                }
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
]);



function App() {

        return (
            <HelmetProvider>
                <RouterProvider router={aeslRouter} />
            </HelmetProvider>
        );
}

export default App;