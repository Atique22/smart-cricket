import React from 'react'
const ProfileTeam = (props) => {
  return (
    <div className="col-lg-6 mt-4">
    <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
      <div className="pic"><img src={props.team1} className="img-fluid" alt=""/></div>
      <div className="member-info">
        <h4>{props.name}</h4>
        <span>{props.title}</span>
        <p>{props.description}</p>

        <div className="social">       
          <a href="/"><i className="bi bi-twitter"></i></a>
          <a href="/"><i className="bi bi-facebook"></i></a>
          <a href="/"><i className="bi bi-instagram"></i></a>
          <a href="/"> <i className="bi bi-linkedin"></i> </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileTeam