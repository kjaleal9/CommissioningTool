export const taskListReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case 'TASK_LIST_REQUEST':
      return { loading: true, tasks: [] }
    case 'TASK_LIST_SUCCESS':
      return {
        loading: false,
        tasks: action.payload.tasks,
      }
    case 'TASK_LIST_FAIL':
      return { loading: false, error: action.payload }

    case 'ADD_TASK_REQUEST':
      return { loading: true, tasks: [...state.tasks] }
    case 'ADD_TASK_SUCCESS':
      return {
        loading: false,
        tasks: [...state.tasks, action.payload.createdTask],
      }
    case 'ADD_TASK_FAIL':
      return { tasks: [...state.tasks], loading: false, error: action.payload }

    case 'DELETE_TASK_REQUEST':
      return { loading: true, tasks: [...state.tasks] }
    case 'DELETE_TASK_SUCCESS':
      const idArr = action.payload
      const currentState = [...state.tasks]
      const newState = currentState.filter(
        (object) => !idArr.includes(object._id)
      )
      return {
        loading: false,
        tasks: newState,
      }
    case 'DELETE_TASK_FAIL':
      return { tasks: [...state.tasks], loading: false, error: action.payload }
    default:
      return state
  }
}
