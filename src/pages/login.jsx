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
import { Redirect } from 'react-router-dom';

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
        errors: [],
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleSubmit = event => {
        const { username, password, errors } = this.state;

        event.preventDefault();
        //dummy authentication
        if (username == '') {
            this.setState({ errors: "Please enter your username" });
        }
        if (password == '') {
            this.setState({ errors: "Please enter your password" });
        }
        if (errors.length == 0) {
            localStorage.setItem('reactor-token', username.split(' ').reverse().join(password));
            return <Redirect to="/home" />;
        }
    }

    render() {
        const { classes } = this.props;

        const LoginPage = (
            <div className={classes.root} style={{ padding: 7 }}>

                <center style={{ fontSize: 25, fontFamily: 'cursive', margin: 'auto', marginTop: 10, marginBottom: 10 }}>
                    LOGIN to <b>Reactor Musiq</b>
                </center>

                { this.state.errors.length > 0 ?  <div>{this.state.errors}</div> : ''}

                <form onSubmit={this.handleSubmit} className={classes.root}>
                
                    <TextField
                        id="filled-adornment-weight"
                        className={classNames(classes.margin, classes.textField)}
                        variant="filled"
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
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

                    <Fab variant="extended" type="submit" color="primary" aria-label="Add" className={classes.margin} style={{ width: '100%'}}>
                        <NavigationIcon className={classes.extendedIcon} />
                        LOGIN
                    </Fab>
                </form>
            </div>
        );

        let token = localStorage.getItem('reactor-token');

        return (
            !token ? LoginPage : <Redirect to="/home" />
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);