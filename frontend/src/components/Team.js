import React,{useRef,useEffect} from 'react'
import ProfileTeam from './Profile_team'
import team1 from "../assets/img/team/team1.png"
import team2 from "../assets/img/team/team2.png"
import team3 from "../assets/img/team/team3.png"
import team4 from "../assets/img/team/team4.png"

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
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
            <ProfileTeam   name="Atique Ahmad" title="Web Developer" description="here Atique Ahmad descriptiontion yutyu .... " team1={team1}/>
            <ProfileTeam  name="Faizan Asghar" title="Web Developer" description="here Faizan Asghar descriptiontion .... " team1={team2}/>
            <ProfileTeam name="Mirza Mukkarram" title="Machine Learning" description="here Mirza Mukkarram descriptiontion  here.... " team1={team3}/>
            <ProfileTeam name="Aatir Nadeem" title="Computer Vision" description="here Aatir Nadeem descriptiontion .... " team1={team4}/>
        </div>

      </div>
    </section>
  )
}

export default Team