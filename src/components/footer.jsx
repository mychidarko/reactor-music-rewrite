import React from 'react';

//component imports
import BottomNav from './user/bottomNavigation';
import Bottom from './guest/bottom';

export default function Footer(props) {
    return props.hasAuth ? <BottomNav />: <Bottom />;
}