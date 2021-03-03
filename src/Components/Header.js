import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="In" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={ HomeIcon } title='Home' />
                <HeaderOption Icon={ SupervisorAccountIcon } title='My Network' />
                <HeaderOption Icon={ BusinessCenterIcon } title='Jobs' />
                <HeaderOption Icon={ ChatIcon } title='Messaging' />
                <HeaderOption Icon={ NotificationsIcon } title='Notifications' />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQE1BISx0KX4nw/profile-displayphoto-shrink_100_100/0/1611685166708?e=1620259200&v=beta&t=ocUHFI-qYopZ-zE71NaR4t2ysOC736iYRkUEDQvp_7k" title="me" />
            </div>
        </div>
    )
}

export default Header
