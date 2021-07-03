import React from 'react';
import './balance.css';

const BalanceRow = () => {
    return (
        <div className="row border-bottom border-1 p-2">
            <div className="col-3 d-flex justify-content-center">
                <div className="align-middle me-2 profile-thumbnail other rounded-circle bg-secondary">
                    {/* <img src="logo192.png" class="rounded-circle" alt="logo192.png" /> */}
                    YM
                </div>
            </div>
            <div className="col p-0 d-flex align-items-center">
                <div className="flex-fill text-start">
                    Ye Maw
                </div>
            </div>
            <div className="col p-0 d-flex align-items-center">
                <div className="text-dark text-end">
                    S$31.5 <small>(to receive)</small>
                </div>
            </div>
        </div>
    )
};

export default BalanceRow;
