import React from 'react';
import './HomeCard.css';

const HomeCard = (props) => {
    const { thumbnail, title, trainerImage, trainerName, des, price } = props.dataCount;
    console.log(thumbnail);
    return (
        <div className="col-4">
            <div className="card text-align">
                <div>
                    <img src={thumbnail} className="card-img-top fix-img" />
                </div>
                <div className="card-body w-100">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text m-0 w-100" title={des}>{des.slice(0, 96)}</p>
                    <div className="d-flex align-items-center mt-4">
                        <div className="col">
                            <button className="btn btn-outline-danger px-5">Enroll</button>
                        </div>
                        <div className="col">
                            <span className="mt-4" style={{ marginLeft: "30px" }}>Price: ${price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomeCard;