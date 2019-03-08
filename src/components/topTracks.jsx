import React from 'react';
import Card from '@material-ui/core/Card';

import { Link } from 'react-router-dom';

import Logo from './../assets/music_logo.png';

export default class TopTracks extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content" style={{ padding: 5 }}>
                <Card style={{ borderColor: 'black', marginTop: 10, padding: 10 }}>
                    <img src={Logo} style={{ width: '100%', height: '100%' }} />
                    <h3>Song</h3>
                    <h6 style={{ marginTop: -10, marginBottom: -3 }}>Artist Name</h6>
                </Card>
            </div>
        );
    }
}