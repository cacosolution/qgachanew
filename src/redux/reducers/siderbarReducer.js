const initialState = {
    isOpenSideBar: true
};

const siderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_IS_OPEN_SIDEBAR":
            return {
                ...state,
                isOpenSideBar: action.payload
            }
        default:
            return state;
    }
};

export default siderReducer;