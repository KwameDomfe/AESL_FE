

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter';

function ProjectTeamMembers({ otherTeamMembers }) {
    if (!Array.isArray(otherTeamMembers)) return <p>No team members listed.</p>;
    return (
        <section className="gc7s6 gr5s1 w-100 h-100 pa0-50">
            <hgroup className="tc">
                <span style={{fontSize: '2.5rem', color: '#0ea5e9'}}>👥</span>
                <h2>Other Project Team Members</h2>
            </hgroup>
            <div className="flex ggap2-00">
                {otherTeamMembers.map((group, i) => (
                    Array.isArray(group) ? (
                        <ul className="flex flex-column w-100" key={i}>
                            {group.map((member, idx) => member && <li key={idx}>{member}</li>)}
                        </ul>
                    ) : null
                ))}
            </div>
        </section>
    );
}

function ProjectContractors({ contractors }) {
    if (!contractors) return null;
    return (
        <section className="gc1s12 w-100">
            <hgroup>
                <span style={{fontSize: '2.5rem', color: '#10b981'}}>🏗️</span>
                <h2>Contractors</h2>
            </hgroup>
            
            <div className="flex flex-column justify-between w-100">
            
                <hgroup><h5>General Contractor</h5><p>{contractors.general}</p></hgroup>
                <hgroup><h5>Electrical</h5><p>{contractors.electrical}</p></hgroup>
                <hgroup><h5>Mechanical</h5><p>{contractors.mechanical}</p></hgroup>
                <hgroup><h5>Plumbing</h5><p>{contractors.plumbing}</p></hgroup>
                <hgroup><h5>Facade</h5><p>{contractors.facade}</p></hgroup>
               
            </div>
        </section>
    );
}

function ProjectAwards({ awards }) {
    if (!awards) return <p>No awards listed.</p>;
    return (
        <section className="gc1s6 gr5s1 w-100 h-100 pa0-50">
            <hgroup className="tc">
                <span style={{fontSize: '2.5rem', color: '#10b981'}}>🏆</span> 
                <h2>Awards</h2>
            </hgroup>
           
            <div className="f0-75">
                {['award1', 'award2', 'award3'].map(key => awards[key] && (
                    <div className="flex" key={key}>
                        <div className="mr2-00">{awards[key].date}</div>
                        <div>
                            <div><span className="gray">Award Name:</span> {awards[key].name}</div>
                            <div><span className="gray">Awarded by:</span> {awards[key].institution}</div>
                            {awards[key].url && <a href={awards[key].url} className="gray">{awards[key].url}</a>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

const ProjectData = ({ project }) => {
    if (!project) return null;

    // Normalize locations to an array of { coords: [lat,lng], name?: string }
    const normalizeLocations = (project) => {
        // 1) locations: [{ coords:[lat,lng], name: 'Goaso' }]
        if (Array.isArray(project.locations)) {
            const points = project.locations
                .map(loc => {
                    const c = loc?.coords || loc?.coordinates;
                    const name = loc?.name || loc?.town || loc?.place || loc?.label;
                    if (Array.isArray(c) && c.length === 2 && c.every(n => typeof n === 'number')) {
                        return { coords: c, name };
                    }
                    return null;
                })
                .filter(Boolean);
            if (points.length) return points;
        }

        // 2) coordinates: [lat, lng] OR [[lat,lng], ...]
        const coords = project.coordinates;
        const single = Array.isArray(coords) && coords.length === 2 && coords.every(n => typeof n === 'number');
        const multi = Array.isArray(coords) && coords.length > 0 && coords.every(pt => Array.isArray(pt) && pt.length === 2 && pt.every(n => typeof n === 'number'));

        // Optional names alongside coordinates
        const nameFields = ['coordinateNames', 'locationNames', 'townNames', 'towns', 'cities', 'places', 'labels'];
        let names = [];
        for (const key of nameFields) {
            const val = project[key];
            if (!val) continue;
            if (typeof val === 'string') {
                names = [val];
                break;
            }
            if (Array.isArray(val)) {
                names = val;
                break;
            }
        }

        if (single) {
            const name = names[0] || project.location || undefined;
            return [{ coords: coords, name }];
        }
        if (multi) {
            return coords.map((pt, idx) => ({
                coords: pt,
                name: Array.isArray(names) ? names[idx] : undefined,
            }));
        }
        return [];
    };

    const locations = normalizeLocations(project);
    const coordsList = locations.map(l => l.coords);
    const hasCoords = coordsList.length > 0;

    const defaultCenter = [7.9465, -1.0232]; // Ghana

    const projectMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon2x,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
    });

    const FitView = ({ points }) => {
        const map = useMap();
        useEffect(() => {
            if (!map || !points || points.length === 0) return;
            if (points.length === 1) {
                map.setView(points[0], 12, { animate: true });
            } else {
                const bounds = L.latLngBounds(points.map(p => L.latLng(p[0], p[1])));
                map.fitBounds(bounds.pad(0.2), { animate: true });
            }
        }, [map, points]);
        return null;
    };
    return (
        <div className="project-dashboard ph1-00 mb3-00" 
            style={
                {
                    background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)', 
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
                }
            }
        >
            <header className="ttu" 
            >
                <h1 style={{fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em',}}
                >
                    Project Data Overview
                </h1>
            </header>
            <section className="" 
            >
                <div className="grid gtc1 gtc2-m gtc3-l ggap1-00 mb3-00">
                    <div className="ba b--black-10" 
                        
                    >
                        <span>👤</span>
                        <h2>Coordinator</h2>
                        <p>{project.projectCoordinator || 'N/A'}</p>
                    </div>
                    <div className="ba b--black-10 tc" 
                    >
                        <span style={{fontSize: '2.5rem', color: '#6366f1'}}>🧑‍💼</span>
                        <h2 style={{margin: '0.5rem 0', fontSize: '1.25rem', color: '#1e293b'}}>Leads</h2>
                        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                            {project.projectLeads && Object.values(project.projectLeads).map((lead, idx) => lead && <li key={idx} style={{color: '#334155', fontWeight: 500}}>{lead}</li>)}
                        </ul>
                    </div>
                    <div className="flex flex-column justify-center ba b--black-10">
                        <div className="tc">
                            <span style={{fontSize: '2.5rem', color: '#f59e42'}}>📊</span>
                        <h2 style={{margin: '0.5rem 0', fontSize: '1.25rem', color: '#1e293b'}}>Key Data</h2>
                        </div>

                        <div className="flex justify-between container container50"
                        >
                            <div className=""
                            >
                                <hgroup>
                                    <h5>
                                        Start Date
                                    </h5>
                                    <p>
                                        {project.dates?.start || 'N/A'}
                                    </p>
                                </hgroup>
                                <hgroup>
                                    <h5>Completion Date</h5>
                                    <p>{project.dates?.completed || 'N/A'}</p>
                                </hgroup>
                                <hgroup>
                                    <h5>Location</h5>
                                    <p>{project.location || 'N/A'}</p>
                                </hgroup>
                            </div>
                            <div>
                                <hgroup><h5>Site Area</h5><p>{project.siteArea ? `${project.siteArea} acres` : 'N/A'}</p></hgroup>
                                <hgroup><h5>Gross Floor Area</h5><p>{project.grossFloorArea ? `${project.grossFloorArea}m²` : 'N/A'}</p></hgroup>
                                <hgroup><h5>Floors</h5><p>{project.numberOfFloors || 'N/A'}</p></hgroup>
                            </div>
                        </div>
                    </div>
                    <div className="ba b--black-10 tc" 
                    
                        >
                        <ProjectContractors contractors={project.contractors} />
                    </div>
                    <div className="ba b--black-10" >
                        <ProjectAwards awards={project.awards} />
                    </div>
                    <div className="ba b--black-10">
                        <ProjectTeamMembers otherTeamMembers={project.otherTeamMembers} />
                    </div>
                </div>
                

                <div className="w-100 ba b--black-10" >
                    <div className="tc">
                        <h2>Project Location</h2>
                    </div>
                    <div style={
                        {
                            width:'100%',
                            height:'60vh',
                            marginTop:'1rem',
                            borderRadius:'8px',
                            overflow:'hidden', 
                            position:'relative', 
                            background:'#e5edf6'
                        }
                    }
                    >
                        <MapContainer
                            center={defaultCenter}
                            zoom={6}
                            style={{height:'100%',width:'100%'}}
                            className="blue-map"
                            scrollWheelZoom={false}
                            zoomControl={true}
                            dragging={true}
                            doubleClickZoom={true}
                            touchZoom={true}
                            boxZoom={true}
                            keyboard={true}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <FitView points={coordsList} />
                            {locations.map((loc, idx) => (
                                <Marker position={loc.coords} icon={projectMarkerIcon} key={`${project.id || project.name || 'project'}-${idx}`}>
                                    <Popup>
                                        <strong>{project.name}</strong><br />
                                        {loc?.name || project.location || (coordsList.length > 1 ? `Location ${idx + 1}` : 'Project location')}
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                        <div style={{position:'absolute',left:12,top:12,background:'rgba(255,255,255,0.95)',padding:'8px 12px',borderRadius:8,boxShadow:'0 1px 6px rgba(0,0,0,0.08)',fontSize:'0.9rem',color:'#334155'}}>
                            {hasCoords ? (
                                coordsList.length > 1 ? `Showing ${coordsList.length} locations` : 'Showing 1 location'
                            ) : (
                                'Coordinates not available for this project.'
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <footer className="dashboard-footer" style={{padding: '2rem 1rem 1rem 1rem', textAlign: 'center'}}>
                <ProjectSectionFooter />
            </footer>
        </div>
    );
};

export default ProjectData;

