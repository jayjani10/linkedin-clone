import React from 'react'
import { Avatar } from "@material-ui/core"
import './Sidebar.css'

function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{ topic }</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://media-exp1.licdn.com/dms/image/C4E16AQHkZmGEgY3HwQ/profile-displaybackgroundimage-shrink_200_800/0/1517278016776?e=1620259200&v=beta&t=QYdOnbDzrp6rDg_2IIYuCHY0uTjGnVMo5zBIM0GldaI' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Jay Jani</h2>
                <h4>SRE for adidas | Full Stack Developer | DevOps | Docker | Not from IIT, NIT, IIM</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>68</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>1,721</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                { recentItem('reactjs') }
                { recentItem('Angular 8') }
                { recentItem('Docker') }
                { recentItem('Instana') }
            </div>
        </div>
    )
}

export default Sidebar
