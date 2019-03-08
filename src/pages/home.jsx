import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

import Logo from './../assets/music_logo.png';
import WordBG from './../assets/img/6.png'

import Word from './../components/word';
import NowPlaying from './../components/nowPlaying';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            wordBg: ''
        }
    }
    render(){
        return (
            <Grid container spacing={24} style={{ padding: 10}}>
                <Grid item xs={12} sm={6}>
                    <Card style={{ borderColor: 'black', padding: 10 }}>
                        <center>
                            <img src={Logo} style={{ width: '30%', height: '30%' }} />
                            <h3 style={{ fontFamily: 'cursive' }}>Welcome to Reactor Musiq</h3>
                            <Link to="/survey" style={{ textDecoration: 'none' }}>Care to take our tour?</Link>
                        </center>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <NowPlaying />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Word image={WordBG} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Word image={WordBG} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Word image={WordBG} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Word image={WordBG} />
                </Grid>
            </Grid>
        );
    }
}