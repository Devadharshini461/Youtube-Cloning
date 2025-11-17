import React from 'react'
import { useNavigate } from 'react-router-dom'

function Videocard(props) {
   const navigate=useNavigate();
  return (
    <div className='video-card' onClick={()=>{navigate('/Videopage/'+ props.id)}}>
      <img src={`https://img.youtube.com/vi/${props.id}/hqdefault.jpg`} alt={props.head}/>
      <div className='video-info'>
        {/* <img src={props.img} className='channel-img'></img> */}
        <div className='video-details'>
          <h4 className='video-title'>{props.head}</h4>
          <p className='video-meta'>{props.channel}</p>
          <p className='video-meta'>{props.views}</p>
        </div>
      </div>
    </div>
  )
}

export default Videocard