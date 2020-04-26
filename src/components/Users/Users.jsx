import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, isFetching, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   pageSize={pageSize} totalItemsCount={totalUsersCount}/>
        <div>
            {isFetching ? <Preloader/> : null}
            {users.map(u => <User user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow}
                                  key={u.id}
                />
            )}
        </div>
    </div>
}

export default Users