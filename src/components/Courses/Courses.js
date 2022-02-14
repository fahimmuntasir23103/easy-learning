import React, { useContext } from 'react';
import { buildContext } from '../../App';
import '../Home/Home.css'
import HomeCard from '../homeCard/HomeCard';

const Courses = () => {
    const { dataCounts } = useContext(buildContext)
    return (
        <div className="container mb-4">
            <h2 className="courseTitle">All Courses</h2>
            <div className="row g-4">
                {
                    dataCounts.map(dataCount => <HomeCard dataCount={dataCount}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Courses;