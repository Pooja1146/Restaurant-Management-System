
 const loggedReducer = (state, action) => {
    switch(action.type) {
        case 'adminLog_In':
            return {...state, adminloggedin: true};
        case 'adminLog_Out':
            return {...state, adminloggedin: false};
        case 'wtrLog_In':
            return {...state, wtrloggedin: true};
        case 'wtrLog_Out':
            return {...state, wtrloggedin: false};
        case 'ctrLog_In':
            return {...state, ctrloggedin: true};
        case 'ctrLog_Out':
            return {...state, ctrloggedin: false};

        default:
             return {};
    }
};

export default loggedReducer;