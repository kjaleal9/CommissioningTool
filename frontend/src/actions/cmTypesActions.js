import axios from 'axios';

export const getCmTypes = () => async dispatch => {
    try {
        dispatch({ type: 'CM_LIST_REQUEST' });

        const { data } = await axios.get(`/api/cms`);
        
        dispatch({
            type: 'CM_LIST_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'CM_LIST_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

