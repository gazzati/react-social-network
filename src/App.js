import React from 'react';
import styles from "./App.css";
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import SettingsContainer from "./components/Settings/SettingsContainer";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        /*if(!this.props.initialized){
            return <Preloader />
        }*/
        return (
            <div className="appWrapper">
                <div id="side" className={this.props.sideStyle}></div>
                <div className="head"><HeaderContainer /></div>
                <div className="nav"><Navbar /></div>
                <div id="wrapper" className="appWrapperContent">
                    <Switch>               {/*dopolnenie*/}
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route exact path='/login'
                               render={() => <LoginPage/>}/>
                        <Route exact path='/settings'
                               render={() => <SettingsContainer/>}/>
                        <Route path='*'
                               render={() => <h1>404 NOT FOUND</h1>}/>
                    </Switch>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    sideStyle: state.settings.sideStyle,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp;
