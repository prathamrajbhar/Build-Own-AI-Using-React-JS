import React, { useEffect } from 'react'

function About() {

  useEffect(() => {
    document.title = "About - E.D.I.T.H."
  }, [])
  return (
    <div className="container">
      <div className="title mt-5 mb-5">
        <h5 className="card-title text-center">About</h5>
        <p className=" fs-6 card-text text-center mt-2">Even Dead I'm The Hero</p>
      </div>
      <div className="col-md-6 w-100">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">About E.D.I.T.H.</h5>
              <p className="card-text">E.D.I.T.H. (Even Dead I'm The Hero) is an AI assistant that can help you with your queries. It is powered by Google's Generative AI. You can ask E.D.I.T.H. anything you want, and it will try to help you with the best possible answer.</p>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">How to use E.D.I.T.H.?</h5>
              <p className="card-text">You can ask E.D.I.T.H. anything you want. Just type your query in the chat box and press enter. E.D.I.T.H. will try to help you with the best possible answer.</p>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Privacy Policy</h5>
              <p className="card-text">E.D.I.T.H. does not store any of your queries. Your queries are used to generate responses in real-time, and they are not stored anywhere. We respect your privacy.</p>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Terms and Conditions</h5>
              <p className="card-text">You can use E.D.I.T.H. for educational purposes only. You are not allowed to use E.D.I.T.H. for any illegal activities. We reserve the right to block any user who violates our terms and conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About