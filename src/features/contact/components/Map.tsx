import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 13.8883779,
    lng: 100.603365
};
export default function Map() {
    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyAAqKFEHkXWPmgxMnaqc1Jb073XAaRSY5w"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>

    )
}
