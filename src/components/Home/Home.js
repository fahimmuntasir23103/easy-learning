import React, { useContext } from 'react';
import { buildContext } from '../../App';
import './Home.css';
import HomeCard from '../homeCard/HomeCard';

const Home = () => {
    const { dataCounts } = useContext(buildContext);
    return (
        <div className="container mb-4">
            <h2 className="courseTitle">Some Courses</h2>
            <div className="row g-4">
                {
                    dataCounts.slice(0, 6).map(dataCount => <HomeCard dataCount={dataCount} key={dataCount.id}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;