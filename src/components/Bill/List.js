import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import axios from 'axios';
import ACTIONS from '../../store/bill/constant';

const StyledBillRow = styled.div`
    & {
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
    }
    &:last-of-type {
        border-bottom: none;
    }
`;

const BillList = () => {
    const dispatch = useDispatch();
    const  billList = useSelector(state => state.bill ? state.bill.billList : []);
    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_BILL_LIST });
        axios.get('http://localhost:3000/mock/bills')
          .then((response) => {
              dispatch({
                type: ACTIONS.SUCCESS_FETCH_BILL_LIST,
                billList: response.data,
              });
          })
          .catch((error) => {
            dispatch({ type: ACTIONS.ERROR_FETCH_BILL_LIST, error });
          });
    },[dispatch]);
    return (
        <div className="container-fluid">
            {billList.map((bill) => {
                return (
                    <StyledBillRow className="row" key={bill.id}>
                        <div className="col-2 align-items-center">
                            <FontAwesomeIcon icon={faReceipt} />
                        </div>
                        <div className="col-4 align-items-center">
                            {bill.id} - {bill.vendorName}
                        </div>
                        <div className="col-3 align-items-center">{bill.totalAmount}</div>
                        <div className="col-3 align-items-center">
                            <small>{bill.group}</small>
                        </div>
                    </StyledBillRow>
                );
            })}
        </div>
    )
}

export default BillList;