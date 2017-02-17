import React from 'react';
import OlMap from '../containers/OlMap';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Awesome OpenLayers React WebGIS</h2>
        <OlMap zoom="12" center={[923550, 6351783]} ></OlMap>
    </div>
);

export default App;
