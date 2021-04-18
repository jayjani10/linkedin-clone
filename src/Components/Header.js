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
                    <input type="text" placeholder='Search'/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={ HomeIcon } title='Home' />
                <HeaderOption Icon={ SupervisorAccountIcon } title='My Network' />
                <HeaderOption Icon={ BusinessCenterIcon } title='Jobs' />
                <HeaderOption Icon={ ChatIcon } title='Messaging' />
                <HeaderOption Icon={ NotificationsIcon } title='Notifications' />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E35AQHlcPexDrpuyg/profile-framedphoto-shrink_100_100/0/1616406608130?e=1617084000&v=beta&t=tmDCcHBsPHWac_Lfz8QhZ3FwArlg2fIbe-r47Y2mcIo" title="me" />
            </div>
        </div>
    )
}

export default Header
