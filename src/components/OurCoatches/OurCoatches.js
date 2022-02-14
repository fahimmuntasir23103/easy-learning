import React, { useContext } from 'react';
import { buildContext } from '../../App';
import Coatches from '../Coatches/Coatches';
import './OurCoatches.css'

const OurCoatches = () => {
    const { dataCounts } = useContext(buildContext);
    return (
        <div className="container mb-4">
            <h2 className="courseTitle">Our Coatches</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    dataCounts.map(dataCount => <Coatches dataCount={dataCount}></Coatches>)
                }
            </div>
        </div>
    );
};

export default OurCoatches;