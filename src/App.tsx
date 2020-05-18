import React from 'react';
import "./App.css";
import {/*BrowserRouter,*/ HashRouter, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MiniNavbar from "./components/NavMini/MiniNavbar";
import Settings from "./components/Settings/Settings";
import MainIcon from "./components/MainIcon/MainIcon";
import NewsContainer from "./components/News/NewsContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {toggleBlackTheme} from "./redux/settings-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const SuspendedDialogs = withSuspense(DialogsContainer)

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
    toggleBlackTheme: (theme?: boolean) => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
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
        document.documentElement.setAttribute('nav', 'none');
        if (localStorage.getItem('blackThemeButton') === 'true') {
            document.documentElement.setAttribute("data-theme", "dark");
        }
        this.props.initializeApp()
    }


    render() {  if(!this.props.initialized){ return <Preloader />}
        return (
            <div className="mainPage">
                <span className="icon"><MainIcon/></span>
                <span className="userLog"><HeaderContainer/></span>
                <nav>
                    <MiniNavbar/>
                    <Navbar/>
                </nav>
                <div className="appWrapperContent">
                    <Switch>
                        <Route exact path='/login'
                               render={() => <LoginPage/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <SuspendedDialogs/>}/>
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

let mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp, toggleBlackTheme}))(App);

const MainApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp;
