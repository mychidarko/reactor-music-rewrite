import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

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
            <div className="content" style={{ padding: 5 }}>
                <Card style={{ borderColor: 'black', marginTop: 10, padding: 10 }}>
                    <center>
                        <img src={Logo} style={{ width: '30%', height: '30%' }} />
                        <h3 style={{ fontFamily: 'cursive' }}>Welcome to Reactor Musiq</h3>
                        <Link to="/survey" style={{ textDecoration: 'none' }}>Care to take our tour?</Link>
                    </center>
                </Card>
                <br/>
                <div style={{marginLeft: 20}}><Icon>heart</Icon> Fact of the Day</div>
                <br/>
                <Word image={WordBG} />
                <br/>
                <div style={{ marginLeft: 20 }}>Now Playing</div>
                <br/>
                <NowPlaying />
            </div>
        );
    }
}