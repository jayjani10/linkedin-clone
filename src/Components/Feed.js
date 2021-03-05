import React from 'react'
import './Feed.css'
import Createicon from '@material-ui/icons/Create';

function Feed() {
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <Createicon />
                    <form>
                        <input type='text' />
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feed
