import React from 'react';

import Song from './../components/song';
import TopTracks from './../components/topTracks';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content" style={{ padding: 5 }}>
                <h5 style={{ marginLeft: 7, marginBottom: -5 }}>TOP TRACKS ></h5>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <TopTracks />
                    <TopTracks />
                    <TopTracks />
                </div>
                <Song />
                <Song />
                <Song />
                <Song />
                <Song />
            </div>
        );
    }
}