import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import './Videopage.css'
import Videolist1 from '../Components/Videolist1';

function Videopage() {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const handlePost = () => {
    if (comment.trim() === "") return; 
    setAllComments([...allComments, comment]);
    setComment("");  
  };

  return (
    <><Navbar />
      <div className='video1'>
        <div className='video-left'>
          {/* <div> */}
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${id}`}
            allowFullScreen
            title="video"
          >
          </iframe>

          <hr style={{marginTop:"30px" }}/>

          <h3 style={{marginTop:"20px" , marginBottom: "15px"}}>Comments</h3>

          <div style={{ marginBottom: "15px"}}>
            <input className='commentinput'
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}/>

            <button onClick={handlePost} className='postbutton'>Post</button>
          </div>

          <div>
            {allComments.length === 0 && (<p>No comments yet. Be the first to comment!</p>)}
            {allComments.map((c, index) => (
              <div key={index}>
                <b>You:</b> 
                {c}
              </div>
            ))}
          </div>
        </div>

        <aside className="suggestion-container">
          <h3>Suggested Videos</h3>
          {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
            <Videolist1/>
        </aside>

        {/* <div style={{ flex: 1 }}>
          <h3>Suggested Videos</h3>
          <Videolist />
        </div> */}

      </div>
    </>
  )
}

export default Videopage