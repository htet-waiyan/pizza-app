import React from 'react';
import BalanceRow from '../../components/Balance/BalanceRow';
import ProfileBalance from '../../components/Balance/ProfileBalance';
import './style.css';

const Home = () => {
    return (
        <div className="container-fluid p-0">
            <ProfileBalance />
            <BalanceRow />
        </div>
    );
}

export default Home;