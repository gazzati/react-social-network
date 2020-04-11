import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <span  style={ { "margin-left": '20px'} }>
        <img src={preloader} alt={""}/>
    </span>
}

export default Preloader;