import React from 'react'

const Messageform = () => {
  return (
    <form action="" method="post" className="my-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <button className="btn btn-outline-success text-center"><b>Send Message</b></button>
        </form>
  )
}

export default Messageform