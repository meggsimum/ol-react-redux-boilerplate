import React from 'react';
import OlMap from '../containers/OlMap';
import PoiDetail from '../containers/PoiDetail';
import OlLayerOsm from '../containers/OlLayerOsm';
import OlLayerWms from '../containers/OlLayerWms';
import OlLayerVector from '../containers/OlLayerVector';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Awesome OpenLayers React WebGIS</h2>
        <OlMap zoom="14" center={[925492, 6348178]} >

            <OlLayerWms
                url="https://maps.service24.rlp.de/gisserver/services/RP/RP_ETRS_Gt/MapServer/WmsServer"
                layers="0"
                tiled={true}
            >
            </OlLayerWms>

            <OlLayerVector
                format="GeoJSON"
                featureProjection="EPSG:3857"
                featureCollKey = "featCollShops"
                selectable={true}
            >
            </OlLayerVector>

        </OlMap>
        <PoiDetail />
    </div>
);

export default App;
