import React from 'react'
import team1 from "../assets/img/team/team1.png"
const Profile_team = () => {
  return (
    <div className="col-lg-6 mt-4">
    <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
      <div className="pic"><img src={team1} className="img-fluid" alt=""/></div>
      <div className="member-info">
        <h4>Atique Ahmad</h4>
        <span>Web developer</span>
        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
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