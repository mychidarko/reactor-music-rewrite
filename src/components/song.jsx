import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

import Card from '@material-ui/core/Card';
import Logo from './../assets/music_logo.png';

export default class Song extends Component {
    render() {
        return (
            <Card style={{ borderColor: 'black', marginTop: 10, padding: 8, display: 'flex' }}>
                <img src={Logo} style={{ width: 80, height: 80 }} />
                <span style={{ flex: 1, flexBasis: 50, width: 50 }}></span>
                <div className="metadata" style={{ flex: 5, flexShrink: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'cursive', fontSize: 20 }}>Song</h3>
                    <h4 style={{ marginTop: -12, fontSize: 15 }}>Artist Name</h4> 
                </div>
                <div>
                    <span style={{ marginTop: 40, paddingTop: 40 }}>
                        <span style={{ marginRight: 30 }}>3 mins</span>
                        <br />
                        <span>
                            <Icon style={{ color: 'gold', fontSize: 15 }}>star</Icon>
                            <Icon style={{ color: 'gold', fontSize: 15 }}>star</Icon>
                            <Icon style={{ color: 'gold', fontSize: 15 }}>star</Icon>
                            <Icon style={{ color: 'gold', fontSize: 15 }}>star</Icon>
                            <Icon style={{ fontSize: 15 }}>star</Icon>
                        </span>
                    </span>
                </div>
            </Card>
        );
    }
}