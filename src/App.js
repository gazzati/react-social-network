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
import Settings from "./components/Settings/Settings";


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
                               render={() => <Settings/>}/>
                        <Route path='*'
                               render={() => <h1>404 NOT FOUND</h1>}/>
                    </Switch>
                </div>
            </div>

        )
    }
}

setTimeout(() => { if(localStorage.getItem('blackThemeButton') === 'true') {
    document.getElementById('body').style.backgroundColor = "#72879c";
    document.getElementById('wrapper').style.backgroundColor = "#586775";
}}, 500)


const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
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
