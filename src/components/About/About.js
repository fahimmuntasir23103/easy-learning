import React from 'react';
import '../Home/Home.css'
import Boy from '../Images/boy.jpeg'
const About = () => {
    return (
        <div className="mt-0">
            <div className="card mb-3" style={{ Width: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={Boy} className="img-fluid w-100 rounded-start" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title courseTitle">About</h2>
                            <p className="card-text lh-base" style={{ textAlign: "justify" }}>You can start and finish one of these popular courses in under a day – for free! Check out the list below.Take the course for free
                                100+ Courses You can start and finish one of these popular courses in under our site Lifetime Access You can start and finish one of these popular courses in under our site. If you have any question or any suggenstion then mail us we will response you. Thanks</p>
                            <p className="card-text"><small className="text-muted"></small></p>

                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" placeholder="Massage..." id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-outline-danger px-5">Send</button>
                            <h1 className="fst-italic">Happy Learning</h1>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default About;