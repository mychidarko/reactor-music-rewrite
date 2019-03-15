//dependency imports
import React from "react";

//component imports
import Nav from "./components/nav";
import Footer from "./components/footer";
import BottomNav from "./components/user/bottomNavigation";

//drawer components
// import UserDrawer from './components/user/userDrawer';
import LeftDrawer from './components/guest/leftDrawer';

//route lists
import { Route, Switch } from 'react-router-dom';

//page imports
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Songs from './pages/songs';
import Artists from './pages/artists';

const Floor = (props) => {
    return props.hasAuth ? <BottomNav />: <Footer />;
}

const BottomNavigator = (
    <React.Fragment>
        <Route path="/artists" component={Artists} />
        <Route path="/albulms" component={Home} />
        <Route path="/songs" component={Songs} />
        <Route path="/account" component={Home} />
    </React.Fragment>
);

const RouteList = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/home'} component={Home} />

            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />

            {BottomNavigator}

            {/*<Route path={'/songs'} component={Songs} />
            <Route path={'/artists'} component={Artists} />
            <Route path={'/albulms'} component={Albulms} />*/}
        </Switch>
    );
}

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userHasAuth: true,
            left: false
        }
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        return (
            <React.Fragment>
                <Nav hasAuth={this.state.userHasAuth} onToggleDrawer={this.toggleDrawer('left', true)} />
                <RouteList />
                <Floor hasAuth={this.state.userHasAuth} />
                <LeftDrawer 
                    onToggleDrawer={this.toggleDrawer('left', true)}
                    left={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                    onDrawerClick={this.toggleDrawer('left', false)}
                    onDrawerKeyDown={this.toggleDrawer('left', false)} /> 
            </React.Fragment>
        );
    }
}

export default Layout;
