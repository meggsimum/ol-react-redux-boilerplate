import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.poi)" because we set state to null by default
 * */

class PoiDetail extends Component {
    render() {
        var style = {
            height: '100px'
        };
        if (!this.props.poi) {
            return (
                <div style={style}>
                    <h2>Kein POI ausgewählt...</h2>
                </div>
            );
        }
        return (
            <div style={style}>
                <h2>{this.props.poi.get('name')}</h2>
            </div>
        );
    }
}

// "state.selectedPoi" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        poi: state.selectedPoi
    };
}

export default connect(mapStateToProps)(PoiDetail);
