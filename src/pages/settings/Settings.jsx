import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>

            </div>
            <form  className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                <img
                className='singlePostImg'
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" />
                <label htmlFor='fileInput'>
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Safak' />
                <lable>Email</lable>
                <input type="email" placeholder='safak@gmail.com'/>
                <lable>Password</lable>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings