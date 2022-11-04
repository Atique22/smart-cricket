import React from 'react'

const AddressMap = () => {
  return (
    <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>ITU, Arfa Software Tower, Lahore Pakistan</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>bsce19008@itu.edu.pk</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+92 3495791363</p>
              </div>

              <iframe src="https://www.google.com/maps/place/Arfa+Software+Technology+Park" height={280} allowFullScreen></iframe>
    </div>
  )
}

export default AddressMap