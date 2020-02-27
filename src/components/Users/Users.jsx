import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            /* props.setUsers([
                 {
                     id: 1,
                     photoUrl: 'https://icdn.lenta.ru/images/2019/12/30/04/20191230045113988/square_1280_b4e476f7b7a7d8960487c0b346b6ed4f.jpg',
                     followed: true,
                     fullName: 'Alex',
                     status: 'hello world',
                     location: {city: 'Moscow', country: 'Russia'}
                 },
                 {
                     id: 2,
                     photoUrl: 'https://cdn1.img.crimea.ria.ru/images/111782/65/1117826514.jpg',
                     followed: false,
                     fullName: 'Tima',
                     status: 'i am happy',
                     location: {city: 'London', country: 'UK'}
                 },
                 {
                     id: 3,
                     photoUrl: 'http://www.scanword.me/userfiles/scanwords/photo/Asmus.jpg',
                     followed: false,
                     fullName: 'Nika',
                     status: 'nice to meet you',
                     location: {city: 'New York', country: 'USA'}
                 },
                 {
                     id: 3,
                     photoUrl: 'http://www.scanword.me/userfiles/scanwords/photo/Asmus.jpg',
                     followed: false,
                     fullName: 'Nika',
                     status: 'nice to meet you',
                     location: {city: 'New York', country: 'USA'}
                 }
             ])*/
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;