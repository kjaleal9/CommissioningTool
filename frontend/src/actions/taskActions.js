import axios from 'axios';

export const get = () => async dispatch => {
    try {
        dispatch({ type: 'TASK_LIST_REQUEST' });

        const { data } = await axios.get(`/api/tasks`);
        console.log(data)
        dispatch({
            type: 'TASK_LIST_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'TASK_LIST_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

