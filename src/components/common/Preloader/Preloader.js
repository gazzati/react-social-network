import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'ghostwhite'} }>
        <img src={preloader} alt={""}/>
    </div>
}

export default Preloader;