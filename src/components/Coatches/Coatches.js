import React from 'react';

const Coatches = (props) => {
    const { trainerName, trainerImage, sub } = props.dataCount;
    return (
        <div className="col">
            <div className="card text-align">
                <div>
                    <img src={trainerImage} className="card-img-top fix-img img-thumbnail" />
                </div>
                <div className="card-body w-100">
                    <h5 className="card-title">{trainerName}</h5>
                    <small className="card-text">{sub}</small>
                </div>
            </div>
        </div>
    );
};

export default Coatches;