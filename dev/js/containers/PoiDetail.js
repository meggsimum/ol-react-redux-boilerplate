import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';

/*
 * We need "if(!this.props.poi)" because we set state to null by default
 * */

class PoiDetail extends Component {
    render() {
        const style = {
            height: 400,
            width: 300,
            margin: 20,
            padding: 10,
            textAlign: 'center',
            display: 'inline-block',
            position: 'absolute',
            right: 20,
            top: 60,
            zIndex: 100000
        };
        if (!this.props.poi) {
            return (
                <div>
                  <Paper style={style} zDepth={3}>
                      <h3>Kein POI ausgewählt...</h3>
                  </Paper>
                </div>
            );
        }
        return (
            <div>
              <Paper style={style} zDepth={3}>
                  <h3>{this.props.poi.get('name')}</h3>
              </Paper>
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
