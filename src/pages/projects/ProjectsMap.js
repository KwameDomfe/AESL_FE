import projectsBanner from '../../images/projects/00.jpeg'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLProjectsNav from '../../components/organisms/navs/AESLProjectsNav'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { projects } from '../../data/projectsInfo';

const ProjectsMap = () => {
    // Default map center (Ghana)
    const center = [7.9465, -1.0232];
    // Custom marker icon (fixes missing default icon issue)
    const markerIcon = new L.Icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    });

    return (
        <article>
            {/* Page Header Start */}
            <header className="bg-yellow">
                <CategoryHeaderBanner
                    image={projectsBanner}
                    title='Projects Map'
                />
                <AESLProjectsNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className="bg-white grid gtc12">
                <section className="gc1s12 mv2-00" style={{ height: '500px', width: '100%' }}>
                    <MapContainer center={center} zoom={6} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {/* Show all projects, handling both 'locations' and 'coordinates' fields */}
                        {projects.map(project => {
                            // If project has 'locations' array, use those
                            if (Array.isArray(project.locations) && project.locations.length > 0) {
                                return project.locations.map((loc, idx) => (
                                    <Marker key={project.id + '-loc-' + idx} position={loc.coords} icon={markerIcon}>
                                        <Popup>
                                            <strong>{project.name}</strong><br />
                                            {loc.name}
                                        </Popup>
                                    </Marker>
                                ));
                            }
                            // If project has 'coordinates' array (single location)
                            if (Array.isArray(project.coordinates) && project.coordinates.length === 2 && typeof project.coordinates[0] === 'number') {
                                return (
                                    <Marker key={project.id + '-coord'} position={project.coordinates} icon={markerIcon}>
                                        <Popup>
                                            <strong>{project.name}</strong><br />
                                            {project.location}
                                        </Popup>
                                    </Marker>
                                );
                            }
                            // If project has 'coordinates' as array of arrays (multiple unnamed locations)
                            if (Array.isArray(project.coordinates) && project.coordinates.length > 0 && Array.isArray(project.coordinates[0])) {
                                return project.coordinates.map((coords, idx) => (
                                    <Marker key={project.id + '-coords-' + idx} position={coords} icon={markerIcon}>
                                        <Popup>
                                            <strong>{project.name}</strong><br />
                                            {project.location}
                                        </Popup>
                                    </Marker>
                                ));
                            }
                            return null;
                        })}
                    </MapContainer>
                </section>
                <footer id="projectsPage__Footer" className="gc1s12 mv1-00">
                    <SectionFooter sectionTitle="Projects Map" />
                </footer>
            </main>
            {/* Page Main End */}

            {/* Page Footer Start */}
            <footer>
                <AESLPageFooter pageTitle='Projects Map' />
            </footer>
            {/* Page Footer End */}
        </article>
    )
}

export default ProjectsMap