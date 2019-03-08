import React from 'react';

import UserDrawer from './user/userDrawer';
import LeftDrawer from './guest/leftDrawer';

export default function Drawer(props){
    return props.hasAuth ? (
        <UserDrawer
            left={props.left}
            onClose={props.onClose}
            onOpen={props.onOpen}
            onDrawerClick={props.onDrawerClick}
            onDrawerKeyDown={props.onDrawerKeyDown} />
    ): (
        <LeftDrawer 
            left={props.left} 
            onClose={props.onClose} 
            onOpen={props.onOpen} 
            onDrawerClick={props.onDrawerClick} 
            onDrawerKeyDown={props.onDrawerKeyDown} />
    );
}