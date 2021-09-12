import axios from 'axios';

export const getAreas = () => async dispatch => {
    try {
        dispatch({ type: 'AREA_LIST_REQUEST' });

        const { data } = await axios.get(`/api/areas`);
        console.log(data)
        dispatch({
            type: 'AREA_LIST_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'AREA_LIST_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

