import React from 'react'

const Profile_team = (props) => {
  return (
    <div className="col-lg-6 mt-4">
    <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
      <div className="pic"><img src={props.team1} className="img-fluid" alt=""/></div>
      <div className="member-info">
        <h4>{props.name}</h4>
        <span>{props.title}</span>
        <p>{props.descrip}</p>
        <div className="social">
          <a href="/"><i className="ri-twitter-fill"></i></a>
          <a href="/"><i className="ri-facebook-fill"></i></a>
          <a href="/"><i className="ri-instagram-fill"></i></a>
          <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile_team