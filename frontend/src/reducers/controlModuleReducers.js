export const controlModuleListReducer = (
    state = { controlModules: [] },
    action
) => {
    switch (action.type) {
        case 'CONTROL_MODULE_LIST_REQUEST':
            return { loading: true, controlModules: [] };
        case 'CONTROL_MODULE_LIST_SUCCESS':
            return {
                loading: false,
                controlModules: action.payload.controlModules,
            };
        case 'CONTROL_MODULE_LIST_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
