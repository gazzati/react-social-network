import * as serviceWorker from './serviceWorker';
import {rerenderEntireThree} from "./render";
import state from "./redux/state";


rerenderEntireThree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
