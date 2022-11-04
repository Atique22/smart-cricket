import React from 'react'
import AddressMap from './AddressMap'
import Messageform from './Messageform'

const Contact = () => {
  return (
    //  ======= Contact Section ======= 
    <section id="contact" className="contact my-4">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <AddressMap/>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <Messageform/>
          </div>

        </div>

      </div>
    </section>

  )
}

export default Contact