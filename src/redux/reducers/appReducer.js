const initialState = {
    isOpenWithdraw: true,
    isOpenBalance: false,
    isOpenTransaction: false,
    isOpenDeposit: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_IS_OPEN_WITHDRAW":
            return {
                ...state,
                isOpenWithdraw: true,
                isOpenBalance: false,
                isOpenTransaction: false,
                isOpenDeposit: false,
            };
        case "SET_IS_OPEN_BALANCE":
            return {
                ...state,
                isOpenWithdraw: false,
                isOpenBalance: true,
                isOpenTransaction: false,
                isOpenDeposit: false,
            };
        case "SET_IS_OPEN_TRANSACTION":
            return {
                ...state,
                isOpenWithdraw: false,
                isOpenBalance: false,
                isOpenTransaction: true,
                isOpenDeposit: false,
            };
        case "SET_IS_OPEN_DEPOSIT":
            return {
                ...state,
                isOpenWithdraw: false,
                isOpenBalance: false,
                isOpenTransaction: false,
                isOpenDeposit: true
            };
        default:
            return state;
    }
};

export default appReducer;