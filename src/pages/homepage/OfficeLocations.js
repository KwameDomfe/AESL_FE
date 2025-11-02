import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { offices } from '../../data/offices'


// Interactive office locator: show details in sidebar only when a marker is clicked

const OfficeLocations = () => {
  const [selected, setSelected] = useState(null);
  const [map, setMap] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardPos, setCardPos] = useState({left: '50%', top: '60%'});
  const allBounds = useMemo(() => {
    try {
      return L.latLngBounds(offices.map(o => o.coords));
    } catch (e) {
      return null;
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update card position when marker is selected in mobile view
  useEffect(() => {
    if (selected && windowWidth < 900) {
      // Center the card on the screen in mobile view
      setCardPos({
        left: '50vw',
        top: '50vh'
      });
    }
  }, [map, selected, windowWidth]);

  // Fly to the selected office when it changes
  useEffect(() => {
    if (!map) return;
    if (windowWidth < 900) {
      // Always center Ghana in mobile view
      map.setView([7.9465, -1.0232], 7);
    } else if (selected) {
      try {
        map.flyTo(selected.coords, 8, { duration: 0.6 });
      } catch (e) {
        // ignore
      }
    }
  }, [map, selected, windowWidth]);
  // Memoize icons to avoid re-creating on each render
  const regionalIcon = useMemo(() => L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  }), []);

  const hqIcon = useMemo(() => L.divIcon({
    html:
      '<div style="position:relative;transform:translateY(-6px)">' +
      '  <div style="width:28px;height:28px;border-radius:50%;background:#dc2626;border:3px solid #ffffff;box-shadow:0 2px 6px rgba(0,0,0,0.25)"></div>' +
      '  <div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #dc2626;position:absolute;left:50%;transform:translateX(-50%);top:22px;"></div>' +
      '</div>',
    className: '',
    iconSize: [28, 38],
    iconAnchor: [14, 36],
    popupAnchor: [0, -32],
    tooltipAnchor: [0, -28],
  }), []);
  return (
    <section className="vh-100" style={{padding: '2rem 0'}}>
      <div
        className="flex h-100 w-100 flex-column flex-row-ns"
        style={{display: 'flex', flexDirection: windowWidth < 900 ? 'column' : 'row', height: '100%', width: '100%'}}>
        <div
          className='h-100 w-100'
          style={{
            flex: windowWidth < 900 ? 'none' : '2 1 400px',
            height: windowWidth < 900 ? '100vh' : '100%',
            minHeight: windowWidth < 900 ? '100vh' : '0',
            maxHeight: windowWidth < 900 ? '100vh' : 'none',
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(59,130,246,0.08)',
            position: 'relative',
            background: '#e0e7ef',
            width: windowWidth < 900 ? '100vw' : '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: windowWidth >= 900 ? '0 auto' : undefined
          }}
        >
          <MapContainer
            center={[7.9465, -1.0232]}
            zoom={7}
            style={{height: windowWidth < 900 ? '100vh' : '100%', minHeight: windowWidth < 900 ? '100vh' : '0', maxHeight: windowWidth < 900 ? '100vh' : 'none', width: windowWidth < 900 ? '100vw' : '100%', cursor: 'default', margin: windowWidth < 900 ? '0 auto' : undefined}}
            className="blue-map"
            scrollWheelZoom={false}
            zoomControl={false}
            dragging={false}
            doubleClickZoom={false}
            touchZoom={false}
            boxZoom={false}
            keyboard={false}
            attributionControl={true}
            whenCreated={setMap}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {offices.map((office, idx) => (
              <Marker 
                position={office.coords} 
                key={idx}
                icon={office.type === 'HQ' ? hqIcon : regionalIcon}
                zIndexOffset={selected && selected.name === office.name ? 2000 : (office.type === 'HQ' ? 1000 : 0)}
                title={office.name}
                eventHandlers={{ click: () => setSelected(office) }}
              >
                {/* Only show Leaflet popup in desktop view */}
                {windowWidth >= 900 && (
                  <Popup>
                    <strong>{office.name}</strong>
                  </Popup>
                )}
                {/* Show details next to marker in mobile view */}
                {selected && selected.name === office.name && windowWidth < 900 && (
                  <div
                    style={{
                      position: 'fixed',
                      left: cardPos.left,
                      top: cardPos.top,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 3000,
                      background: '#fff',
                      borderRadius: '10px',
                      boxShadow: '0 2px 12px rgba(59,130,246,0.18)',
                      padding: '1rem',
                      minWidth: '220px',
                      maxWidth: '90vw',
                    }}
                  >
                    <strong style={{fontSize: '1.2rem', color: '#0f172a'}}>{selected.name}</strong>
                    <div style={{color: '#334155', marginTop: '0.25rem', lineHeight: 1.35}}>
                      {selected.address1 && <div>{selected.address1}</div>}
                      {selected.address2 && <div>{selected.address2}</div>}
                      {selected.address3 && <div>{selected.address3}</div>}
                    </div>
                    {selected.email && (
                      <div style={{marginTop: '0.5rem'}}>
                        <span style={{color: '#475569'}}>Email: </span>
                        <a href={`mailto:${selected.email}`} style={{color: '#2563eb'}}>{selected.email}</a>
                      </div>
                    )}
                    {selected.telephone && (
                      <div style={{marginTop: '0.25rem'}}>
                        <span style={{color: '#475569'}}>Telephone: </span>
                        <a href={`tel:${selected.telephone.replace(/[^+\d]/g, '')}`} style={{color: '#2563eb'}}>{selected.telephone}</a>
                      </div>
                    )}
                    {selected.mobile && (
                      <div style={{marginTop: '0.25rem'}}>
                        <span style={{color: '#475569'}}>Mobile: </span>
                        <a href={`tel:${selected.mobile.replace(/[^+\d]/g, '')}`} style={{color: '#2563eb'}}>{selected.mobile}</a>
                      </div>
                    )}
                    <button onClick={() => setSelected(null)} style={{marginTop: '0.75rem', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.5rem 0.75rem', cursor: 'pointer'}}>Clear</button>
                  </div>
                )}
              </Marker>
            ))}
          </MapContainer>
          {/* Reset / Fit Controls */}
          <div style={{position: 'absolute', right: 12, bottom: 12, display: 'flex', gap: 8}}>
            <button
              type="button"
              onClick={() => {
                if (!map) return;
                if (allBounds) {
                  map.fitBounds(allBounds, { padding: [40, 40] });
                } else {
                  map.setView([7.9465, -1.0232], 7);
                }
                setSelected(null);
              }}
              style={{background:'#ffffff', border:'1px solid #e2e8f0', borderRadius:8, padding:'6px 10px', boxShadow:'0 1px 6px rgba(0,0,0,0.08)', cursor:'pointer'}}
            >
              Reset view
            </button>
          </div>
          {/* Legend overlay inside map wrapper */}
          <div style={{position: 'absolute', left: 12, bottom: 12, background: 'rgba(255,255,255,0.92)', padding: '8px 12px', borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.12)', fontSize: '0.85rem', zIndex: 1000, pointerEvents: 'auto'}}>
            <div style={{fontWeight: 600, marginBottom: 4}}>Legend</div>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
                <span style={{display: 'inline-block', width: 14, height: 14, borderRadius: '50%', background: '#dc2626', border: '2px solid #ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.25)'}} />
                <span>Head Office</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
                <span style={{display: 'inline-block', width: 12, height: 12, borderRadius: '50%', background: '#2a81cb', border: '2px solid #ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)'}} />
                <span>Regional Office</span>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar for desktop view */}
        {windowWidth >= 900 && (
          <div
            className='h-100 w-100'
            style={{
              flex: 'none',
              minWidth: '0',
              maxWidth: '360px',
              marginLeft: '1.5rem',
              width: '100%'
            }}
          >
            <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(59,130,246,0.08)', padding: '1rem'}}>
              { 
                selected ? (
                  <div>
                    <strong style={{fontSize: '1.2rem', color: '#0f172a'}}>{selected.name}</strong>
                    <div style={{color: '#334155', marginTop: '0.25rem', lineHeight: 1.35}}>
                      {selected.address1 && <div>{selected.address1}</div>}
                      {selected.address2 && <div>{selected.address2}</div>}
                      {selected.address3 && <div>{selected.address3}</div>}
                    </div>
                    {selected.email && (
                      <div style={{marginTop: '0.5rem'}}>
                        <span style={{color: '#475569'}}>Email: </span>
                        <a href={`mailto:${selected.email}`} style={{color: '#2563eb'}}>{selected.email}</a>
                      </div>
                    )}
                    {selected.telephone && (
                      <div style={{marginTop: '0.25rem'}}>
                        <span style={{color: '#475569'}}>Telephone: </span>
                        <a href={`tel:${selected.telephone.replace(/[^+\d]/g, '')}`} style={{color: '#2563eb'}}>{selected.telephone}</a>
                      </div>
                    )}
                    {selected.mobile && (
                      <div style={{marginTop: '0.25rem'}}>
                        <span style={{color: '#475569'}}>Mobile: </span>
                        <a href={`tel:${selected.mobile.replace(/[^+\d]/g, '')}`} style={{color: '#2563eb'}}>{selected.mobile}</a>
                      </div>
                    )}
                    <button onClick={() => setSelected(null)} style={{marginTop: '0.75rem', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.5rem 0.75rem', cursor: 'pointer'}}>Clear</button>
                  </div>
                ) : (
                    <div style={{color: '#475569'}}>
                      Click any marker on the map to view office details here.
                    </div>
                  )
              }
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OfficeLocations;
