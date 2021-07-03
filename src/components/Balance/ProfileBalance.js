import React from 'react';
import './balance.css';

const ProfileBalance = ({ name, totalDebts, totalReceivable }) => {
    return (
        <div className="row profile-outlook border-bottom border-2 p-2">
            <div className="col-3 d-flex justify-content-center">
                {/* <img src="logo192.png" class="rounded-circle" alt="logo192.png" /> */}
                <div className="profile-thumbnail self rounded-circle bg-secondary flex-shrink-0">WY</div>
            </div>
            <div className="col p-0 d-flex">
                <div className="align-self-center">
                    <div className="text-start">
                        Total amount you are owed S$150
                    </div>
                    <div className="text-start">
                        Total amount you owe S$50
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileBalance;