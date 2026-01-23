import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMapStore } from '@/store/useMapStore';
import { VENUES, getSessionsWithDetails } from '@/constants/programmeData';
import { useEffect, useMemo } from 'react';

// Helper to encode SVG as data URL
const svgToDataUrl = (svg: string) => {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.trim());
};

// Lazy icon creation to avoid SSR issues
const createUserIcon = () => new Icon({
    iconUrl: svgToDataUrl(`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="#3B82F6" stroke="white" stroke-width="3"/>
        </svg>
    `),
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

const createProgrammeIcon = (color: string) => new Icon({
    iconUrl: svgToDataUrl(`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 24 16 24s16-12 16-24C32 7.163 24.837 0 16 0z" fill="${color}"/>
            <circle cx="16" cy="14" r="8" fill="white"/>
        </svg>
    `),
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
});

// Component to handle map center updates
function MapCenterHandler({ center }: { center: LatLngExpression }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
}

interface MapContainerProps {
    onPinClick?: (venueId: string) => void;
}

export const MapContainerComponent: React.FC<MapContainerProps> = ({ onPinClick }) => {
    const { userLocation, selectedDate } = useMapStore();
    const sessions = getSessionsWithDetails(selectedDate);

    // Create icons lazily with useMemo
    const userIcon = useMemo(() => createUserIcon(), []);

    // Get unique venues with sessions
    const venuesWithSessions = useMemo(() => {
        return VENUES.filter(venue =>
            sessions.some(s => s.venue?.id === venue.id)
        ).map(venue => {
            const venueSession = sessions.find(s => s.venue?.id === venue.id);
            return {
                ...venue,
                pillarColor: venueSession?.pillar?.color || '#008080',
                sessionCount: sessions.filter(s => s.venue?.id === venue.id).length,
                icon: createProgrammeIcon(venueSession?.pillar?.color || '#008080'),
            };
        });
    }, [sessions]);

    const center: LatLngExpression = userLocation;

    return (
        <div className="w-full h-full absolute inset-0 z-0" style={{ touchAction: 'none' }}>
            <LeafletMap
                center={center}
                zoom={14}
                style={{ width: '100%', height: '100%', touchAction: 'none' }}
                zoomControl={false}
                scrollWheelZoom={true}
                dragging={true}
                touchZoom={true}
                doubleClickZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <MapCenterHandler center={center} />

                {/* User Location Marker */}
                <Marker position={userLocation} icon={userIcon}>
                    <Popup>You are here</Popup>
                </Marker>

                {/* Programme Venue Markers */}
                {venuesWithSessions.map(venue => (
                    <Marker
                        key={venue.id}
                        position={[venue.lat, venue.lng]}
                        icon={venue.icon}
                        eventHandlers={{
                            click: () => onPinClick?.(venue.id),
                        }}
                    >
                        <Popup>
                            <div className="font-din">
                                <p className="font-bold text-sm">{venue.name}</p>
                                <p className="text-xs text-gray-500">{venue.sessionCount} session(s) today</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </LeafletMap>
        </div>
    );
};
