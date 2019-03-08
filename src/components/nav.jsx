import React from 'react';
//page imports
import AuthHeader from './user/header'
import GuestHeader from './guest/header'

export default function Nav(props){
    return props.hasAuth ? (
        <AuthHeader
            onToggleDrawer={props.onToggleDrawer} />
        ) : (
        <GuestHeader 
            onToggleDrawer={props.onToggleDrawer} />
        )
}