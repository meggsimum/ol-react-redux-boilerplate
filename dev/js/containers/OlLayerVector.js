import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ol from 'openlayers'
import OlMap from './OlMap.js';


class OlLayerVector extends Component {

    constructor(props) {
        super(props);

        console.log("props OlLayerVector", this.props);

        this.layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: new ol.format[this.props.format]({
                    featureProjection: this.props.featureProjection
                }).readFeatures(this.props[this.props.featureCollKey])
            }),
            style: new ol.style.Style({
                image: new ol.style.Icon(({
                    // color: [113, 140, 0],
                    src: 'res/img/templatic-map-icons/shopping.png',
                    anchor: [0.5, 0.5],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'fraction',
                }))
            })
        })

    }

    componentDidMount () {
        this.context.map.addLayer(this.layer);
    }

    render() {
        return <div style={{display: 'none'}}>{this.props.children}</div>;;
    }

}

OlLayerVector.contextTypes = {
    map: React.PropTypes.instanceOf(ol.Map)
}

// Get apps state and pass it as props to OlMap
//      > whenever state changes, the OlMap will automatically re-render
function mapStateToProps(state) {
    return {
        featCollShops: state.shops
    };
}

// Get actions and pass them as props to to OlMap
function matchDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}

// We don't want to return the plain OlLayerVector (component) anymore,
// we want to return the smart Container
//      > OlLayerVector is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(OlLayerVector);
