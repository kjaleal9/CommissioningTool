import axios from 'axios';

export const getControlModules = () => async dispatch => {
    try {
        dispatch({ type: 'CONTROL_MODULE_LIST_REQUEST' });

        const { data } = await axios.get(`/api/controlModules`);
        console.log(data)
        dispatch({
            type: 'CONTROL_MODULE_LIST_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'CONTROL_MODULE_LIST_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

