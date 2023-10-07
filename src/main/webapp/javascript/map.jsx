import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import React from "react";

const containerStyle = {
    width: '25vw',
    height: '75vh',
};
export default function Map() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCdaLaClqcsUK6apHhEgYKJhK3WJfleTBo"
    })

    const [center, setCenter] = React.useState({
        lat: 42.2771, lng: 83.7382
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // Check if geolocation is supported by the browser
        if ("geolocation" in navigator) {
            // Prompt user for permission to access their location
            navigator.geolocation.watchPosition(
                // Success callback function
                function (position) {
                    // Get the user's latitude and longitude coordinates
                    setCenter({lat: position.coords.latitude, lng: position.coords.longitude})

                },
                // Error callback function
                function (error) {
                    // Handle errors, e.g. user denied location sharing permissions
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            // Geolocation is not supported by the browser
            console.error("Geolocation is not supported by this browser.");
        }

        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={30}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}