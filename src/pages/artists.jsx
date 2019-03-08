import React from 'react';
import Card from '@material-ui/core/Card';

import { Link } from 'react-router-dom';

import Logo from './../assets/music_logo.png';
import NowPlaying from './../components/nowPlaying';

export default class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordBg: ''
        }
    }
    render() {
        return (
            <div className="content" style={{ padding: 5 }}>
                <Card style={{ borderColor: 'black', marginTop: 10, padding: 0 }}>
                    <center>
                        <h3>Reactor Artists</h3>
                    </center>
                </Card>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <span>Items</span>
                </div>
                <br />
                <div style={{ marginLeft: 20 }}>Now Playing</div>
                <br />
                <NowPlaying />
            </div>
        );
    }
}