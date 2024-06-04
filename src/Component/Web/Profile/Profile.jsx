import React, { useContext } from 'react'
import { UserContext } from '../Context/User';
import style from './Profile.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function Profile() {

    const {userData,loading} = useContext(UserContext);
    if(loading){
        return <p>...loading</p>
    }

  return (
    <aside className={`${style.Profile}`}>
        <div className={`${style.profileLinks}`}>
            <nav>
                <Link to='info' >info</Link>
                <Link to='contact'>contact</Link>
            </nav>
        </div>
        <div className={`${style.userData}`}>
             <Outlet />
        </div>


    </aside>
  )
}
