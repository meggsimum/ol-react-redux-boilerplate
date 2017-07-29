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
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
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

// We don't want to return the plain OlMap (component) anymore,
// we want to return the smart Container
//      > OlMap is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(OlMap);
