import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {selectUser} from '../actions/index'

import ol from 'openlayers'


class OlMap extends Component {

    constructor(props) {
        super(props);

        console.log(this.props);

        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
                new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: new ol.format.GeoJSON({
                            featureProjection: 'EPSG:3857'
                        }).readFeatures(this.props.featureCollection)
                    })
                })
          ],
          view: new ol.View({
              center: this.props.center || [0, 0],
              zoom: this.props.zoom || 1
          })
        });

    }

    componentDidMount () {
        this.map.setTarget(document.getElementById('map'));
    }

    render() {

        return (
            <div id="map" style={this.props.style}></div>
        );
    }

}

// Get apps state and pass it as props to OlMap
//      > whenever state changes, the OlMap will automatically re-render
function mapStateToProps(state) {
    return {
        featureCollection: state.villages
    };
}

// Get actions and pass them as props to to OlMap
function matchDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}

// We don't want to return the plain OlMap (component) anymore,
// we want to return the smart Container
//      > OlMap is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(OlMap);
