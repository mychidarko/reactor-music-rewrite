import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 1000,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const ranges = [
    {
        value: '0-20',
        label: '0 to 20',
    },
    {
        value: '21-50',
        label: '21 to 50',
    },
    {
        value: '51-100',
        label: '51 to 100',
    },
];

class Login extends React.Component {
    state = {
        password: '',
        username: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                
                <TextField
                    id="filled-adornment-weight"
                    className={classNames(classes.margin, classes.textField)}
                    variant="filled"
                    label="Username"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    helperText="Username"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment variant="filled" position="end">
                                <Icon>person</Icon>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id="filled-adornment-password"
                    className={classNames(classes.margin, classes.textField)}
                    variant="filled"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment variant="filled" position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin} style={{ width: '100%'}}>
                    <NavigationIcon className={classes.extendedIcon} />
                    LOGIN
                </Fab>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);