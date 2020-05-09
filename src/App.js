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
import NewsContainer from "./components/News/NewsContainer";
import MainIcon from "./components/MainIcon/MainIcon";
import {toggleBlackTheme} from "./redux/settings-reducer";
import FriendsContainer from "./components/Friends/FriendsContainer";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))

class App extends React.Component {
    componentDidMount() {
        /*if(!window.matchMedia) {
            //matchMedia method not supported
            return false;
        } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
            //OS theme setting detected as dark
            localStorage.setItem('blackThemeButton', String(true))
        }*/
        this.props.toggleBlackTheme(localStorage.getItem('blackThemeButton') === 'true');
        document.documentElement.style.setProperty('--color-block', `${localStorage.getItem('colorBlock') || "#3827a0"}`);

        this.props.initializeApp()
    }

    render() {  /*if(!this.props.initialized){ return <Preloader />}*/
        return (
            <div className="mainPage">
                <span className="icon"><MainIcon /></span>
                <div className="head"> </div>
                <span className="userLog"><HeaderContainer /></span>
                <div className="nav">
                    <Navbar /></div>
                <div className="appWrapperContent">
                    <Switch>
                        <Route exact path='/login'
                               render={() => <LoginPage/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/friends'
                               render={() => <FriendsContainer/>}/>
                        <Route exact path='/settings'
                               render={() => <Settings/>}/>
                        <Route path='/news'
                               render={() => <NewsContainer/>}/>
                        <Route path='*'
                               render={() => <ProfileContainer/>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

setTimeout(() => { if(localStorage.getItem('blackThemeButton') === 'true') {
    document.documentElement.setAttribute("data-theme", "dark");
}}, 300)


let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp, toggleBlackTheme}))(App);

const MainApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp;
