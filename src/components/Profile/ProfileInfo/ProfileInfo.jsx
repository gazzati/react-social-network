import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            {/* <div className={s.background}>
                <img src='http://spbvetro.ru/wp-content/gallery/goroda/1346750761_3-017x.jpg'/>
            </div>*/}
            <div className={s.discriptionBlock}>
                <img src='https://i12.fotocdn.net/s123/3684c77fb6eba3ea/user_xl/2818678419.jpg'/>
                <div className={s.status}>
                    -Бродяга по жизни <br/>
                    -Косяков за спиной не имею <br/>
                    -На районе уважают
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;