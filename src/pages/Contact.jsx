import React, { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    document.title = "Contact - E.D.I.T.H."
  }, [])
  return (
    <div className="container">
      <div className="title mt-5 mb-5">
        <h5 className="card-title text-center">Contact</h5>
        <p className=" fs-6 card-text text-center mt-2">Even Dead I'm The Hero</p>
      </div>
      <div className="col-md-6 w-100">
        <div className="row">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Contact E.D.I.T.H.</h5>
              <p className="card-text">You can contact E.D.I.T.H.</p>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Email:
              </h5>
              <p className="card-text">
                partham.rajbhar987@gmail.com
              </p>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Phone:
              </h5>
              <p className="card-text">
                +91 9512518403
              </p>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Address:
              </h5>
              <p className="card-text">
                Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact