import React from 'react'
import './Loader.css'
import loading_logo from '../assets/Icons/video-loading.png'
import loading_bar from '../assets/Icons/loading_bar_blue.gif'

const Loader = () => {
  return (
    <div className='loader'>
        <div className='loader_content'>
            <img src={loading_logo} alt="loading_logo" />
            <span className='loading_title'>Bạn vui lòng chờ trong giây lát...</span>
            <img src={loading_bar} alt="loading_bar" />
        </div>
    </div>
  )
}

export default Loader