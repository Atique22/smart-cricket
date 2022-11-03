import React from 'react'
import Profile_team from './Profile_team'
import team1 from "../assets/img/team/team1.png"
import team2 from "../assets/img/team/team2.png"
import team3 from "../assets/img/team/team3.png"
import team4 from "../assets/img/team/team4.png"

const Team = () => {
  return (
    //  ======= Team Section =======
    <section id="team" className="team section-bg mt-4">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
            <Profile_team   name="Atique Ahmad" title="Web Developer" descrip="here Atique Ahmad description .... " team1={team1}/>
            <Profile_team  name="Faizan Asghar" title="Web Developer" descrip="here Faizan Asghar description .... " team1={team2}/>
            <Profile_team name="Mirza Mukkarram" title="Machine Learning" descrip="here Mirza Mukkarram description .... " team1={team3}/>
            <Profile_team name="Aatir Nadeem" title="Computer Vision" descrip="here Aatir Nadeem description .... " team1={team4}/>
        </div>

      </div>
    </section>
  )
}

export default Team