import React from 'react';
import OlMap from '../containers/OlMap';
import PoiDetail from '../containers/PoiDetail';
import OlLayerOsm from '../containers/OlLayerOsm';
import OlLayerWms from '../containers/OlLayerWms';
import OlLayerVector from '../containers/OlLayerVector';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('../../scss/style.scss');

const App = () => (

    <MuiThemeProvider>

        <div>
            <h2>Awesome OpenLayers React WebGIS</h2>
            <OlMap zoom="14" center={[925492, 6348178]} >

                <PoiDetail />

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

        </div>

    </MuiThemeProvider>
);

export default App;
