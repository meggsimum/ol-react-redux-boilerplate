import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ol from 'openlayers'


class OlLayerOsm extends Component {

    constructor(props) {
        super(props);

        this.layer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

    }

    componentDidMount () {
        this.context.map.addLayer(this.layer);
    }

    render() {
        return <div style={{display: 'none'}}>{this.props.children}</div>;;
    }

}

OlLayerOsm.contextTypes = {
    map: React.PropTypes.instanceOf(ol.Map)
}

export default OlLayerOsm;
