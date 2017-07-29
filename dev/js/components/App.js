import React from 'react';
import OlMap from '../containers/OlMap';
import OlLayerOsm from '../containers/OlLayerOsm';
import OlLayerVector from '../containers/OlLayerVector';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Awesome OpenLayers React WebGIS</h2>
        <OlMap zoom="12" center={[923550, 6351783]} >

            <OlLayerOsm />

            <OlLayerVector
                format="GeoJSON"
                featureProjection="EPSG:3857"
                featureCollKey = "featCollShops"
            >
            </OlLayerVector>

        </OlMap>
    </div>
);

export default App;
