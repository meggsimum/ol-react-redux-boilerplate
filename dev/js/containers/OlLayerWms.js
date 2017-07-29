import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ol from 'openlayers'


class OlLayerWms extends Component {

    constructor(props) {
        super(props);

        this.layer = new ol.layer.Tile({
            extent: this.props.extent,
            source: new ol.source.TileWMS({
                url: this.props.url,
                params: {
                    'LAYERS': this.props.layers,
                    'TILED': this.props.tiled
                },
                serverType: this.props.serverType
            })
        });

    }

    componentDidMount () {
        this.context.map.addLayer(this.layer);
    }

    render() {
        return <div style={{display: 'none'}}>{this.props.children}</div>;;
    }

}

OlLayerWms.contextTypes = {
    map: React.PropTypes.instanceOf(ol.Map)
}

export default OlLayerWms;
