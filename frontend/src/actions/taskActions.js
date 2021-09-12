import axios from 'axios'

export const getTasks = () => async (dispatch) => {
  try {
    dispatch({ type: 'TASK_LIST_REQUEST' })

    const { data } = await axios.get(`/api/tasks`)
    console.log(data)
    dispatch({
      type: 'TASK_LIST_SUCCESS',
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: 'TASK_LIST_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const addTask =
  (name, area, taskType, deviceType) => async (dispatch) => {
    try {
      dispatch({ type: 'ADD_TASK_REQUEST' })

      const body = {
        name,
        area,
        taskType,
        deviceType,
      }
      const { data } = await axios.post(`/api/tasks`, body)

      console.log(data)
      dispatch({
        type: 'ADD_TASK_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'ADD_TASK_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const deleteTask = (id) => async (dispatch) => {
    try {
      dispatch({ type: 'DELETE_TASK_REQUEST' })

      const { data } = await axios.delete(`/api/tasks/${id}`)
      console.log(data)
      dispatch({
        type: 'DELETE_TASK_SUCCESS',
        payload: data.id,
      })
    } catch (error) {
      dispatch({
        type: 'DELETE_TASK_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }