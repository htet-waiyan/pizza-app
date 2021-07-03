import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledBillTrxRow = styled.div`
    & {
        margin-bottom: 5px;
        font-size: 14px;
    }
    &:last-of-type {
        margin-bottom: none;
    }
`;

const StyledGroupSummary = styled.div`
    && p {
        font-size: 16px;
    }
`

const BillList = () => {
    return (
        <div className="bill-container ps-2 pe-2 mt-3">
            <StyledGroupSummary className="d-flex flex-row p-3 mb-2 bg-light">
                <div className="w-75 text-start group-summary-info">
                    <h5>Pornhub Dev Group</h5>
                    <p className="m-0">
                        Total spending <span>$3000</span>
                    </p>
                    <p className="m-0">
                        Total no. of receipts <span>10</span>
                    </p>
                </div>
                <div className="me-3 w-50 text-end">
                    <FontAwesomeIcon icon={faStar}/>
                </div>
            </StyledGroupSummary>
            <div className="bill-list-container mt-2 mb-3">
                <h6 className="text-start fs-6 bolder">May 2021</h6>
                <StyledBillTrxRow className="d-flex flex-row align-items-center">
                    <div className="text-start pe-3">
                        <small>Mar</small><br/>
                        <span>28</span>
                    </div>
                    <div className="text-start bill-info text-break pe-2 w-50">
                        Inle Dinner
                    </div>
                    <div className="text-end bill-info pe-2 w-25">$200</div>
                    <div className="text-end bill-info pe-2 w-25"><small>settled</small></div>
                </StyledBillTrxRow>
                <StyledBillTrxRow className="d-flex flex-row align-items-center">
                    <div className="text-start pe-3">
                        <small>Mar</small><br/>
                        <span>28</span>
                    </div>
                    <div className="text-start bill-info text-wrap pe-2 w-50">
                        Inle Dinner dfjgdjkdfvd dkjdfjdvdf 
                    </div>
                    <div className="text-end bill-info pe-2 w-25">$200</div>
                    <div className="text-end bill-info pe-2 w-25">
                        <small>un-settled</small> 
                    </div>
                </StyledBillTrxRow>
            </div>
            <div className="bill-list-container mt-2 mb-3">
                <h6 className="text-start fs-6 bolder">Apr 2021</h6>
                <StyledBillTrxRow className="d-flex flex-row align-items-center">
                    <div className="text-start pe-3">
                        <small>Mar</small><br/>
                        <span>28</span>
                    </div>
                    <div className="text-start bill-info text-break pe-2 w-50">
                        Inle Dinner
                    </div>
                    <div className="text-end bill-info pe-2 w-25">$200</div>
                    <div className="text-end bill-info pe-2 w-25"><small>settled</small></div>
                </StyledBillTrxRow>
                <StyledBillTrxRow className="d-flex flex-row align-items-center">
                    <div className="text-start pe-3">
                        <small>Mar</small><br/>
                        <span>28</span>
                    </div>
                    <div className="text-start bill-info text-wrap pe-2 w-50">
                        Inle Dinner dfjgdjkdfvd dkjdfjdvdf 
                    </div>
                    <div className="text-end bill-info pe-2 w-25">$200</div>
                    <div className="text-end bill-info pe-2 w-25"><small>un-settled</small></div>
                </StyledBillTrxRow>
            </div>
        </div>
    )
}

export default BillList;