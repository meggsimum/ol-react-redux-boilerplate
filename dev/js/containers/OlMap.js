import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {selectUser} from '../actions/index'

import ol from 'openlayers'


class OlMap extends Component {

    constructor(props) {
        super(props);

        console.log("props olmap", this.props);

        this.map = new ol.Map({
            layers: [],
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
            <div id="map" style={this.props.style}>
                <div>{this.props.children}</div>
            </div>
        );
    }

    getChildContext () {
      return {
        map: this.map
      }
    }
}


OlMap.childContextTypes = {
    map: React.PropTypes.instanceOf(ol.Map)
}

export default OlMap;
