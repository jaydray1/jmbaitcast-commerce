
const ADD_TASK = 'ADD_TASK'
const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'

const initialState = {
    task: '',
    description: '',
    newTask: {},
    taskList: []
}

export default function taskReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TASK:
           return state;
        default: 
            return state;
    }
}

export function createTask(newTask) {
    return {
        type: ADD_TASK,
        newTask
    }
}

export function handleInputChange(e) {
    return {
        type: HANDLE_INPUT_CHANGE,
        payload: e.target.value
    }
}

