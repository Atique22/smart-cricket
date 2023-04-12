import React, { useRef, useEffect } from "react";
import ProfileTeam from "./Profile_team";
import team1 from "../assets/img/team/team1A.jpg";
import team2 from "../assets/img/team/team1.jpg";
import team3 from "../assets/img/team/team3.png";
import team4 from "../assets/img/team/team4.png";

const Team = () => {
  const myRef = useRef(null);

  useEffect(() => {
    console.log(myRef.current); // Access the element with ID "my-id"
  }, []);

  return (
    //  ======= Team Section =======
    <section id="team" ref={myRef} className="team section-bg mt-4">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>
            Our team is comprised of skilled professionals who are experts in
            the fields of web design and development, computer vision, and
            machine learning. Together, our team works collaboratively to
            deliver high-quality solutions that meet the needs of our clients
            and exceed their expectations.
          </p>
        </div>

        <div className="row">
          <ProfileTeam
            name="Atique Ahmad"
            title="Software Developer"
            description="Software development is a journey, not a destination."
            team1={team1}
          />
          <ProfileTeam
            name="Faizan Asghar"
            title="Software Developer"
            description="Backend development is the backbone of modern software development."
            team1={team2}
          />
          <ProfileTeam
            name="Mirza Mukkarram"
            title="Machine Learning"
            description="Machine learning is not magic; it’s just a tool."
            team1={team3}
          />
          <ProfileTeam
            name="Aatir Nadeem"
            title="Computer Vision"
            description="Computer vision is not about machines seeing, it's about humans understanding. "
            team1={team4}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
