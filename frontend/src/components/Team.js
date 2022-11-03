import React from 'react'
import Profile_team from './Profile_team'
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
            <Profile_team   name="Atique Ahmad" title="Web Developer" descrip="here Atique Ahmad description .... "/>
            <Profile_team  name="Faizan Asghar" title="Web Developer" descrip="here Faizan Asghar description .... "/>
            <Profile_team name="Mirza Mukkarram" title="Machine Learning" descrip="here Mirza Mukkarram description .... "/>
            <Profile_team name="Aatir Nadeem" title="Computer Vision" descrip="here Aatir Nadeem description .... "/>
        </div>

      </div>
    </section>
  )
}

export default Team