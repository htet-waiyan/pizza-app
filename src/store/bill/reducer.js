import ACTIONS from './constant';

const initialState = {
    fetchingBillList: false,
    billFetchError: null,
    billList: [],
};

const billReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.SUCCESS_FETCH_BILL_LIST:
            return {
                ...state,
                billList: action.billList,
            }
        case ACTIONS.FETCH_BILL_LIST:
            return {
                ...state,
                fetchingBillList: true,
            }
        case ACTIONS.ERROR_FETCH_BILL_LIST:
            return {
                ...state,
                fetchingBillList: false,
                billFetchError: action.error,
                billList: [],
            }
        default:
            return {
                ...state,
            }
    }
}

export default billReducer;