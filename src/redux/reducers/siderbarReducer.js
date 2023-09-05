const initialState = {
    isOpenSideBar: true,
    sideBarPosition: ""
};

const siderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_IS_OPEN_SIDEBAR":
            return {
                ...state,
                isOpenSideBar: action.payload,
                sideBarPosition: action.position
            }
        default:
            return state;
    }
};

export default siderReducer;