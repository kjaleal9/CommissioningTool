export const taskListReducer = (
    state = { tasks: [] },
    action
) => {
    switch (action.type) {
        case 'TASK_LIST_REQUEST':
            return { loading: true, tasks: [] };
        case 'TASK_LIST_SUCCESS':
            return {
                loading: false,
                tasks: action.payload.tasks,
            };
        case 'TASK_LIST_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
