import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

import { Link } from 'react-router-dom';

const styles = {
    root: {
        width: 500,
    },
};

class BottomNav extends React.Component {
    state = {
        value: 'home',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation value={value} position="fixed" onChange={this.handleChange} className={classes.root} style={{ diplay: 'flex', width: '100%'}}>
                
                <BottomNavigationAction label="Home" value="home" icon={
                    <Link to="/home" style={{ textDecoration: 'none', color: 'blue' }}>
                        <Icon>home</Icon>
                    </Link>
                } style={{ flex: 1 }} />            

                <BottomNavigationAction label="Songs" value="songs" icon={
                    <Link to="/songs" style={{ textDecoration: 'none', color: 'blue' }}>
                        <Icon>list</Icon>
                    </Link>
                } style={{ flex: 1 }} />            

                <BottomNavigationAction label="Artists" value="artists" icon={
                    <Link to="/artists" style={{ textDecoration: 'none', color: 'blue' }}>
                        <Icon>person</Icon>
                    </Link>
                } style={{ flex: 1 }} />

                <BottomNavigationAction label="Albulms" value="albulms" icon={
                    <Link to="/albulms" style={{ textDecoration: 'none', color: 'blue' }}>
                        <Icon>folder</Icon>
                    </Link>
                } style={{ flex: 1 }} />

                <BottomNavigationAction label="Search" value="search" icon={
                    <Link to="/search" style={{ textDecoration: 'none', color: 'blue' }}>
                        <Icon>search</Icon>
                    </Link>
                } style={{ flex: 1 }} />

                
            </BottomNavigation>
        );
    }
}

BottomNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);