import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';

import profile from './../../assets/img/4.png';

const styles = {
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
};

class LeftDrawer extends React.Component {

  

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <img src={profile} style={{ width: '100%' }} />
          <h3 style={{ marginLeft: 10, fontSize: 25, marginTop: -60, display: 'flex' }}>
            <span><Avatar aria-label="Recipe" style={{ background: 'black', width: 70, height: 70 }}>M</Avatar></span> 
            <span style={{ fontFamily: 'cursive', marginTop: 15, marginLeft: 8 }}>Username</span>
          </h3>
          <Divider style={{ marginTop: -24 }} />
          <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'Notifications'} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Icon>settings</Icon>
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.left}
          onClose={this.props.onClose} 
          onOpen={this.props.onOpen}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onDrawerClick}
            onKeyDown={this.props.onDrawerKeyDown}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
