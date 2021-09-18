export const cmTypesListReducer = (
    state = { cmTypes: [] },
    action
) => {
    switch (action.type) {
        case 'CM_LIST_REQUEST':
            return { loading: true, cmTypes: [] };
        case 'CM_LIST_SUCCESS':
            return {
                loading: false,
                cmTypes: action.payload.cmTypes,
            };
        case 'CM_LIST_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
