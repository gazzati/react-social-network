import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <span  className="preloader">
        <img src={preloader} alt={""}/>
    </span>
}

export default Preloader;