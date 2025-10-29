
import { useState, useRef, useEffect } from 'react';
import { useSearch, useModal } from '../../../hooks/useContextHooks';
import Modal from '../../shared/Modal';

const SearchForm = () => {
    // All hooks must be declared at the top, before any function or variable that uses them
    const [filter, setFilter] = useState('all');
    const [query, setQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [lastSearchTerm, setLastSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [recentSearches, setRecentSearches] = useState([]);
    const inputRef = useRef(null);
    const { results, setSearchTerm } = useSearch();
    const { hideModal } = useModal();
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        if (!showSuggestions || suggestions.length === 0) {
            setActiveIndex(-1);
            return;
        }
        setActiveIndex(0);
    }, [showSuggestions, suggestions]);

    const handleKeyDown = (e) => {
        if (showSuggestions && suggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIndex(i => (i + 1) % suggestions.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIndex(i => (i - 1 + suggestions.length) % suggestions.length);
            } else if (e.key === 'Enter') {
                if (activeIndex >= 0 && activeIndex < suggestions.length) {
                    setQuery(suggestions[activeIndex].name);
                    setShowSuggestions(false);
                    inputRef.current?.blur();
                    return;
                } else {
                    // If no suggestion is selected, submit the form
                    e.preventDefault();
                    setQuery('');
                    if (inputRef.current) inputRef.current.value = '';
                    document.getElementById('searchForm').requestSubmit();
                }
            }
        } else if (e.key === 'Enter') {
            // If suggestions are not open, submit the form
            e.preventDefault();
            setQuery('');
            if (inputRef.current) inputRef.current.value = '';
            document.getElementById('searchForm').requestSubmit();
        }
    };

    // Escape key closes modal
    useEffect(() => {
        const escHandler = (e) => {
            if (e.key === 'Escape' && showResults) {
                setShowResults(false);
                hideModal();
            }
        };
        window.addEventListener('keydown', escHandler);
        return () => window.removeEventListener('keydown', escHandler);
    }, [showResults, hideModal]);

        const handleInputChange = (e) => {
            // Use the new results function from useSearch
            const value = e.target.value;
            setQuery(value);
            let filteredResults = results(filter);
            // Autocomplete suggestions (simple: filter results by name/category/location)
            if (value.length > 1) {
                const lower = value.toLowerCase();
                let matches = filteredResults.filter(item =>
                    (item.name && item.name.toLowerCase().includes(lower)) ||
                    (item.category?.name && item.category.name.toLowerCase().includes(lower)) ||
                    (item.location && item.location.toLowerCase().includes(lower))
                );
                // Deduplicate by id
                const seen = new Set();
                matches = matches.filter(item => {
                    if (seen.has(item.id)) return false;
                    seen.add(item.id);
                    return true;
                });
                setSuggestions(matches.slice(0, 6));
                setShowSuggestions(true);
                setShowResults(false); // Do NOT show modal while typing
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
                setShowResults(false);
            }
        };

        const [modalResults, setModalResults] = useState([]);
        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setSearchTerm(query);
            setLastSearchTerm(query); // Store last search term
            // Filter and match results for modal
            let filteredResults = results(filter);
            const lower = query.toLowerCase();
            let matches = filteredResults.filter(item =>
                (item.name && item.name.toLowerCase().includes(lower)) ||
                (item.category?.name && item.category.name.toLowerCase().includes(lower)) ||
                (item.location && item.location.toLowerCase().includes(lower))
            );
            // Deduplicate by id
            const seen = new Set();
            matches = matches.filter(item => {
                if (seen.has(item.id)) return false;
                seen.add(item.id);
                return true;
            });
            setModalResults(matches);
            setShowSuggestions(false);
            setQuery(''); // Clear search before opening modal
            if (inputRef.current) inputRef.current.value = '';
            setTimeout(() => setShowResults(true), 0); // Show modal after input is cleared
            // Hide recent searches after modal display
            setTimeout(() => setRecentSearches([]), 100);
            // Save to recent searches
            setRecentSearches(prev => {
                const updated = [query, ...prev.filter(q => q !== query)].slice(0, 5);
                localStorage.setItem('recentSearches', JSON.stringify(updated));
                return updated;
            });
            // Simulate async search
            setTimeout(() => {
                setIsLoading(false);
            }, 400);
        };

        return (
            <form id="searchForm" className="flex-l flex-column w-100" 
                onSubmit={handleSubmit} 
                autoComplete="off" 
                style={
                    {   position: 'relative', 
                        maxWidth: 512, 
                        margin: '0 auto', 
                        boxSizing: 'border-box' 
                    }
                }
            >
                {/* Filter options */}
                <div style={
                        {   display: 'flex', 
                            gap: '0.5rem', 
                            marginBottom: '0.5rem', 
                            flexWrap: 'wrap'
                        }
                    }
                >
                    <label className="white-90"style={{ fontWeight: 500, fontSize: '1rem' }}
                    >Filter:
                    </label>
                    <select value={filter} 
                        onChange={e => setFilter(e.target.value)} 
                        className="w-100"
                        style={
                            { fontSize: '1rem', 
                            padding: '0.25rem 0.5rem', 
                            borderRadius: 4, 
                            border: '1px solid #ddd' 
                            }
                        }
                    >
                        <option value="all">All</option>
                        <option value="people">People</option>
                        <option value="projects">Projects</option>
                        <option value="location">Location</option>
                        <option value="category">Category</option>
                    </select>
                </div>
                <label className="flex items-center justify-center bg-white-90" 
                    style={{ position: 'relative', width: '100%' }}
                >
                    <div style={
                            {   position: 'relative', 
                                width: '100%' 
                            }
                        }
                    >
                        <input
                            id="q"
                            type="text"
                            name="q"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search People and Projects"
                            className="w-100 pa0-50 f0-75 bg-white-90 br0-25 b--none"
                            ref={inputRef}
                            aria-label="Search People and Projects"
                            style={{
                                fontSize: '16px',
                                paddingRight: 48,
                                maxWidth: '100%',
                                boxSizing: 'border-box',
                                outline: 'none',
                                WebkitTapHighlightColor: 'transparent'
                            }}
                            autoComplete="off"
                            onFocus={() => {
                                if (query.length > 1 && suggestions.length) setShowSuggestions(true);
                            }}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                            inputMode="search"
                            onKeyDown={handleKeyDown}
                            onKeyUp={e => {
                                if (e.key === 'Enter') {
                                    document.getElementById('searchForm').requestSubmit();
                                }
                            }}
                        />
                        {/* Search icon button to trigger modal */}
                        <button
                            type="button"
                            aria-label="Show search results"
                            onClick={() => {
                                if (query.trim().length > 0) {
                                    document.getElementById('searchForm').requestSubmit();
                                }
                            }}
                            style={{
                                position: 'absolute',
                                right: 8,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: '#fff',
                                border: '1.5px solid #bbb',
                                borderRadius: 24,
                                width: 28,
                                height: 28,
                                fontSize: 22,
                                color: '#1976d2',
                                cursor: 'pointer',
                                zIndex: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
                            }}
                        >
                            {/* Magnifying glass SVG icon */}
                            <svg viewBox="0 0 20 20" 
                                width="22" 
                                height="22" 
                                fill="currentColor" 
                                aria-hidden="true"
                            >
                                <path d="M8.5 2a6.5 6.5 0 0 1 5.18 10.5l3.16 3.16a1 1 0 0 1-1.42 1.42l-3.16-3.16A6.5 6.5 0 1 1 8.5 2zm0 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9z" />
                            </svg>
                        </button>
                    </div>
                    {/* Clear button - larger touch target for mobile */}
                    {query && (
                        <button type="button" 
                            aria-label="Clear search" 
                            onClick={
                                () => { 
                                    setQuery(''); 
                                    setSuggestions([]); 
                                    setShowSuggestions(false); 
                                    setActiveIndex(-1); 
                                }
                            }
                            style={
                                { 
                                    position: 'absolute', 
                                    right: 8, 
                                    top: '50%', 
                                    transform: 'translateY(-50%)', 
                                    background: '#fff', 
                                    border: '1.5px solid #bbb', 
                                    borderRadius: 24, 
                                    width: 28, 
                                    height: 28, 
                                    fontSize: 24, 
                                    color: '#888', 
                                    cursor: 'pointer', 
                                    zIndex: 2, 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.07)' 
                                }
                            }
                        >
                            &times;
                        </button>
                    )}
                    {/* Autocomplete suggestions dropdown - mobile friendly */}
                    {/* Removed duplicate suggestions dropdown above live results panel */}
                    {/* Live results panel below input while typing - improved UI/UX */}
                    {query.length > 1 && showSuggestions && (
                        <div style={{ position: 'absolute', left: 0, top: '100%', minWidth: 480, maxWidth: 900, width: '100%', background: '#fff', border: '2px solid #e3f2fd', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.13)', zIndex: 1001, marginTop: 52, padding: '0.5rem 0 1rem 0', maxHeight: 420, overflowY: 'auto', transition: 'box-shadow 0.2s', minHeight: 80 }}>
                            <div style={{ padding: '0.5rem 1.25rem', borderBottom: '1px solid #e3f2fd', background: '#f7fbff', borderTopLeftRadius: 12, borderTopRightRadius: 12, fontWeight: 600, fontSize: '1.08rem', color: '#1976d2', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Live Results</span>
                                <span style={{ fontSize: '0.98rem', color: '#555' }}>{suggestions.length} found</span>
                            </div>
                            {suggestions.length === 0 ? (
                                <div style={{ padding: '1.5rem', textAlign: 'center', color: '#888', fontSize: '1.05rem' }}>
                                    No matches. Try different keywords or filters.
                                </div>
                            ) : (
                                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                    {suggestions.map((item, idx) => (
                                        <li key={[
                                            item.type || '',
                                            item.id || '',
                                            idx,
                                            item.thumbnail || ''
                                        ].join('-')}
                                            style={{
                                                padding: '0.85rem 1.25rem',
                                                cursor: 'pointer',
                                                fontSize: '1.08rem',
                                                borderBottom: '1px solid #f5f5f5',
                                                touchAction: 'manipulation',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1rem',
                                                background: idx === activeIndex ? '#e3f2fd' : 'transparent',
                                                transition: 'background 0.15s'
                                            }}
                                            onMouseDown={() => {
                                                setQuery('');
                                                setShowSuggestions(false);
                                                setModalResults([item]);
                                                setLastSearchTerm(item.name);
                                                setShowResults(true);
                                                inputRef.current?.focus();
                                            }}
                                            onMouseEnter={() => setActiveIndex(idx)}
                                            onMouseLeave={() => setActiveIndex(-1)}
                                        >
                                            {item.thumbnail && (
                                                <img src={item.thumbnail} alt={item.name} style={{ width: 36, height: 36, objectFit: 'cover', borderRadius: 6, marginRight: 6 }} />
                                            )}
                                            <div style={{ flex: 1 }}>
                                                <span style={{ fontWeight: 'bold', color: '#1976d2', fontSize: '1.08rem' }}>{highlight(item.name, query)}</span>
                                                {item.category?.name && <span style={{ marginLeft: 8, color: '#888', fontSize: '0.98rem' }}>({item.category.name})</span>}
                                                {item.location && <span style={{ marginLeft: 8, color: '#aaa', fontSize: '0.96rem' }}>{item.location}</span>}
                                                {/* Highlight matched fields */}
                                                <div style={{ fontSize: '0.92rem', color: '#1976d2', marginTop: '0.15rem' }}>
                                                    {item.name && item.name.toLowerCase().includes(query.toLowerCase()) && <span>Name matched. </span>}
                                                    {item.location && item.location.toLowerCase().includes(query.toLowerCase()) && <span>Location matched. </span>}
                                                    {item.category?.name && item.category.name.toLowerCase().includes(query.toLowerCase()) && <span>Category matched. </span>}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </label>
                {/* Recent searches dropdown */}
                {recentSearches.length > 0 && (
                    <div style={{ position: 'absolute', left: 0, top: '110%', width: '100%', background: '#f9f9f9', border: '1px solid #eee', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', zIndex: 9, margin: 0, padding: '0.5rem 0', fontSize: '0.95rem' }}>
                        <div style={{ padding: '0.5rem 1rem', color: '#555', fontWeight: 500 }}>Recent Searches:</div>
                        {recentSearches.map((q, i) => (
                            <div key={i} style={{ padding: '0.5rem 1rem', cursor: 'pointer', color: '#1976d2' }}
                                onMouseDown={() => { setQuery(q); setShowSuggestions(false); inputRef.current?.focus(); }}>
                                {q}
                            </div>
                        ))}
                    </div>
                )}
                <button type="submit" style={{ display: 'none' }} aria-label="Submit Search" />
                {/* Modal for search results: show only after submit. Responsive for mobile. */}
                {showResults && (
                    <Modal
                        isOpen={true}
                        title={`Search Results for "${lastSearchTerm}"`}
                        onClose={() => { setShowResults(false); hideModal(); }}
                        size={'large'}
                        style={{ maxWidth: '98vw', minWidth: '0', padding: '0.5rem', borderRadius: 12 }}
                    >
                        {isLoading
                            ? <LoadingSpinner />
                            : <SearchResults results={modalResults} searchTerm={lastSearchTerm} onClose={() => { setShowResults(false); hideModal(); }} />
                        }
                    </Modal>
                )}
            </form>
        );
};

// Highlight search term in results
function highlight(text, query) {
    if (!text || typeof text !== 'string' || !query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) =>
        regex.test(part) ? <span key={i} style={{ background: '#ffe066', fontWeight: 'bold' }}>{part}</span> : part
    );
}

// Search results component with thumbnails, links, badges, details, highlight
const SearchResults = ({ results, searchTerm, onClose }) => {
    // Editable search input for modal
    const [modalQuery, setModalQuery] = useState(searchTerm || '');
    const [sortField, setSortField] = useState('name');
    const [sortDir, setSortDir] = useState('asc');
    // Filter and sort results based on modalQuery
    const filteredResults = results.filter(item => {
        const lower = modalQuery.toLowerCase();
        return (
            (item.name && item.name.toLowerCase().includes(lower)) ||
            (item.category?.name && item.category.name.toLowerCase().includes(lower)) ||
            (item.location && item.location.toLowerCase().includes(lower))
        );
    });
    const sortedResults = [...filteredResults].sort((a, b) => {
        let aValue = a[sortField];
        let bValue = b[sortField];
        if (typeof aValue === 'string') aValue = aValue.toLowerCase();
        if (typeof bValue === 'string') bValue = bValue.toLowerCase();
        if (sortDir === 'asc') return aValue > bValue ? 1 : -1;
        return aValue < bValue ? 1 : -1;
    });
    return (
        <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '1rem' }}>
            <button onClick={onClose} style={{ float: 'right', marginBottom: '1rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '0.25rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>Close</button>
            <h3 style={{ marginTop: 0 }}>Results</h3>
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                    type="text"
                    value={modalQuery}
                    onChange={e => setModalQuery(e.target.value)}
                    placeholder="Edit search..."
                    style={{ fontSize: '1.15rem', padding: '0.5rem 1rem', borderRadius: 8, border: '1px solid #bbb', flex: 1, outline: 'none' }}
                    autoFocus
                />
                <span style={{ fontSize: '1rem', color: '#555' }}><strong>{sortedResults.length}</strong> result{sortedResults.length !== 1 ? 's' : ''}</span>
            </div>
            <div style={{ marginBottom: '0.5rem', fontSize: '1rem', color: '#555', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span>Sort by:
                    <select value={sortField} onChange={e => setSortField(e.target.value)} style={{ marginLeft: 6, fontSize: '1rem', padding: '0.15rem 0.5rem', borderRadius: 4, border: '1px solid #ddd' }}>
                        <option value="name">Name</option>
                        <option value="location">Location</option>
                        <option value="category">Category</option>
                    </select>
                    <button type="button" aria-label="Toggle sort direction" onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')} style={{ marginLeft: 6, fontSize: '1rem', background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>{sortDir === 'asc' ? '▲' : '▼'}</button>
                </span>
            </div>
            {sortedResults.length === 0 ? (
                <div style={{ color: '#888', fontSize: '1.1rem', marginTop: '2rem', textAlign: 'center', padding: '2rem 0' }}>
                    <p style={{ fontWeight: 500, fontSize: '1.2rem' }}>No results found.</p>
                    <p>Try different keywords, check spelling, or use filters above.</p>
                    <ul style={{ margin: '1rem auto', padding: 0, listStyle: 'none', color: '#1976d2', fontSize: '1rem', maxWidth: 320 }}>
                        <li>• Search by name, role, or project</li>
                        <li>• Use filters for more precise results</li>
                        <li>• Check spelling and try synonyms</li>
                    </ul>
                </div>
            ) : (
                <div>
                    {/* Section headers for mixed results */}
                    {sortedResults.some(item => item.type === 'person') && (
                        <h4 style={{ margin: '2rem 0 1rem 0', color: '#1976d2', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em' }}>People</h4>
                    )}
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {sortedResults.filter(item => item.type === 'person').map((item, idx) => (
                            <li key={[
                                item.type || '',
                                item.id || '',
                                idx,
                                item.thumbnail || ''
                            ].join('-')}
                                className="search-result-card"
                                tabIndex={0}
                                style={{ marginBottom: '1.5rem', background: '#f8fafc', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem 1.5rem', transition: 'box-shadow 0.2s, background 0.2s', outline: 'none' }}
                                onMouseEnter={e => e.currentTarget.style.background = '#e3f2fd'}
                                onMouseLeave={e => e.currentTarget.style.background = '#f8fafc'}
                                onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 3px #1976d2'}
                                onBlur={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'}
                            >
                                {item.thumbnail && (
                                    <img src={item.thumbnail} alt={item.name} style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8, marginRight: 8, boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }} />
                                )}
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 'bold', color: '#1976d2', fontSize: '1.15rem', marginBottom: 4 }}>
                                        {highlight(item.name, modalQuery)}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#555', marginTop: '0.25rem', marginBottom: 4 }}>
                                        {item.title && <span style={{ marginRight: 8 }}>{item.title}</span>}
                                        {item.profession && <span style={{ marginRight: 8 }}>{item.profession}</span>}
                                        {item.nationality && <span style={{ marginRight: 8 }}>{item.nationality}</span>}
                                    </div>
                                    {item.office && <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>Office: {item.office}</div>}
                                    {item.department && <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>Department: {item.department}</div>}
                                    {item.dob && <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>DOB: {item.dob}</div>}
                                    {item.social && (
                                        <div style={{ marginTop: '0.25rem' }}>
                                            {item.social.twitter && <a href={item.social.twitter} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8, color: '#1da1f2' }}>Twitter</a>}
                                            {item.social.facebook && <a href={item.social.facebook} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8, color: '#4267B2' }}>Facebook</a>}
                                            {item.social.linkedin && <a href={item.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8, color: '#0077b5' }}>LinkedIn</a>}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* Section header for projects */}
                    {sortedResults.some(item => item.type === 'project') && (
                        <h4 style={{ margin: '2rem 0 1rem 0', color: '#6366f1', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em' }}>Projects</h4>
                    )}
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {sortedResults.filter(item => item.type === 'project').map((item, idx) => (
                            <li key={[
                                item.type || '',
                                item.id || '',
                                idx,
                                item.thumbnail || ''
                            ].join('-')}
                                className="search-result-card"
                                tabIndex={0}
                                style={{ marginBottom: '1.5rem', background: '#f8fafc', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem 1.5rem', transition: 'box-shadow 0.2s, background 0.2s', outline: 'none' }}
                                onMouseEnter={e => e.currentTarget.style.background = '#e0e7ff'}
                                onMouseLeave={e => e.currentTarget.style.background = '#f8fafc'}
                                onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 3px #6366f1'}
                                onBlur={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'}
                            >
                                {item.thumbnail && (
                                    <img src={item.thumbnail} alt={item.name} style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8, marginRight: 8, boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }} />
                                )}
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 'bold', color: '#6366f1', fontSize: '1.15rem', marginBottom: 4 }}>
                                        {highlight(item.name, modalQuery)}
                                    </div>
                                    <div style={{ fontSize: '1rem', color: '#555', marginTop: '0.25rem', marginBottom: 4 }}>
                                        {item.location && <span style={{ marginRight: 8 }}>Location: {item.location}</span>}
                                        {item.category?.name && <span style={{ marginRight: 8 }}>Category: {item.category.name}</span>}
                                        {item.client && <span style={{ marginRight: 8 }}>Client: {item.client}</span>}
                                        {item.funding && <span style={{ marginRight: 8 }}>Funding: {item.funding}</span>}
                                    </div>
                                    {item.projectCoordinator && <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>Coordinator: {item.projectCoordinator}</div>}
                                    {item.projectLeads && (
                                        <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>Leads: {Object.values(item.projectLeads).filter(Boolean).join(', ')}</div>
                                    )}
                                    {item.dates && (
                                        <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>
                                            {item.dates.start && <span style={{ marginRight: 8 }}>Start: {item.dates.start}</span>}
                                            {item.dates.completed && <span style={{ marginRight: 8 }}>Completed: {item.dates.completed}</span>}
                                        </div>
                                    )}
                                    {item.grossFloorArea && <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>Gross Floor Area: {item.grossFloorArea}</div>}
                                    {item.numberOfFloors && <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>Floors: {item.numberOfFloors}</div>}
                                    {item.cost && <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>Cost: {item.cost}</div>}
                                    {item.contractors && (
                                        <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>
                                            Contractors: {Object.entries(item.contractors).map(([role, name]) => name && `${role}: ${name}`).filter(Boolean).join(', ')}
                                        </div>
                                    )}
                                    {item.awards && (
                                        <div style={{ fontSize: '0.98rem', color: '#888', marginBottom: 4 }}>
                                            Awards: {Object.values(item.awards).map(a => a && a.name).filter(Boolean).join(', ')}
                                        </div>
                                    )}
                                    {item.overview && <div style={{ fontSize: '0.98rem', color: '#555', marginBottom: 4 }}>Overview: {item.overview}</div>}
                                    {item.description && typeof item.description === 'string' && <div style={{ fontSize: '0.98rem', color: '#555', marginBottom: 4 }}>Description: {item.description}</div>}
                                    {item.description && typeof item.description === 'object' && item.description.p1 && <div style={{ fontSize: '0.98rem', color: '#555', marginBottom: 4 }}>Description: {item.description.p1}</div>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Loading spinner
const LoadingSpinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <div style={{ width: 48, height: 48, border: '6px solid #eee', borderTop: '6px solid #007bff', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
);

export default SearchForm;