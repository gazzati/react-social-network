import React from 'react';
import preloader from "../../../assets/images/preloader.svg";
import preloaderMini from "../../../assets/images/preloaderMini.svg";

let Preloader = (props) => {
    return <span  className="preloader">
        <img src={document.documentElement.getAttribute('nav') === 'none' ? preloader : preloaderMini} alt={""}/>
    </span>
}

export default Preloader;