import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const LiveLocation = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        place: ""
    });

    const [error, setError] = useState(null);

    const fetchPlaceName = async (lat, lon) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
            );
            const address = response.data.display_name;
            setLocation(prev => ({
                ...prev,
                place: address
            }));
        } catch (err) {
            setError("Failed to fetch place name");
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser");
            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude,
                    longitude,
                    place: "" // temporarily blank, will update after fetch
                });
                fetchPlaceName(latitude, longitude);
            },
            (err) => setError(err.message),
            {
                enableHighAccuracy: true,
                maximumAge: 10000,
                timeout: 5000
            }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <Navbar />
            <h2>Live Location Tracker</h2>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : location.latitude && location.longitude ? (
                <>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                    <p><strong>Place:</strong> {location.place || 'Fetching address...'}</p>
                    <a
                        href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on Google Maps
                    </a>
                </>
            ) : (
                <p>Fetching location...</p>
            )}
            <Footer />
        </div>
    );
};

export default LiveLocation;
