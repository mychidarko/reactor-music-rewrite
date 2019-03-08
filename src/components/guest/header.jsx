import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function GuestHeader(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon onClick={props.onToggleDrawer} />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Reactor
                    </Typography>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'white'}}>
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'white'}}>
                        <Button color="inherit">Register</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

GuestHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuestHeader);