import axios from 'axios'

const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'
const ADD_BUTTON = 'ADD_BUTTON'
const MARK_COMPLETE = 'MARK_COMPLETE'
const BUY_TASK = 'BUY_TASK'
const RETRIEVE_TASK = 'RETRIEVE_TASK'
const POST_TASK = 'POST_TASK'
const USER_TASKS = 'USER_TASKS'


const initialState = {
    userName: '',
    task: '',
    description: '',
    inProgress: [],
    complete: [],
    cart: []
}

const AddTask = (state, action) => {
        const name = action.payload.target.name;
        const value = action.payload.target.value;
        const newTask = Object.assign({}, state, {
        [name]: value})
        return newTask;
    }
const Submit = (state, action) => {
    const { task, description, inProgress, userName } = state;
    const toDo = {task, description, userName}
    inProgress.push(toDo);
    const newInProgress = Object.assign({}, state, {inProgress, description: '', task: ''});
    return newInProgress;
}
const Complete = (state, action) => {
    const { inProgress, complete } = state;
    let newArray = inProgress.slice(), newComplete = complete.slice()
    newComplete.push(newArray.splice(action.index, 1)[0])
    newComplete = Object.assign({}, state, {inProgress:newArray, complete:newComplete});
    return newComplete;
    }
const Buy = (state, action) => {
    const { inProgress, cart } = state;
    let newArray = inProgress.slice(), newCart = cart.slice()
    newCart.push(newArray.splice(action.index, 1)[0])
    newCart = Object.assign({}, state, {inProgress: newArray, cart: newCart});
    return newCart;
}
const Purchase = (state, action) => {
    return state;
}
const RetrieveTasks = (state, action) => {
    const { cart } = state;
    let newCart = cart.slice();
    
    newCart = Object.assign({}, state, {cart:action.payload, userName: ''})
    return newCart;
}
export default function taskReducer(state = initialState, action) {
    console.log('action', action.type)
    switch(action.type) {
        case HANDLE_INPUT_CHANGE:
            return AddTask(state, action);
        case ADD_BUTTON + '_FULFILLED':
            return Submit(state, action);
        case ADD_BUTTON + '_REJECTED':
            return state;
        case MARK_COMPLETE:
            return Complete(state, action);
        case BUY_TASK:
            return Buy(state, action);
        case RETRIEVE_TASK:
            return Purchase(state, action);
        case USER_TASKS + '_FULFILLED':
            return RetrieveTasks(state, action);
        case USER_TASKS + '_REJECTED':
            return state;
        default: 
            return state;
    }
}

export function handleInputChange(event) {
    return {
        type: HANDLE_INPUT_CHANGE,
        payload: event
    }
}

export function handleClick(event, task, description, userName) {
    return {
        type: ADD_BUTTON,
        payload: axios.post('/api/addtask', {
            task,
            description,
            userName
        })
    }
    
}
export function markComplete(index) {
    return {
        type: MARK_COMPLETE,
        payload: index
    }
}
export function buyTask(index) {
    return {
        type: BUY_TASK,
        payload: index
    }
}
export function retrieveTask(event) {
    return {
        type: RETRIEVE_TASK,
        payload: event
    }
}
export function postTask(event) {
    return {
        type: POST_TASK,
        payload: event
    }
}
export function retrieveTasks(event, userid) {
    console.log(userid)
    let promise = axios.get(`/api/tasks/${userid}`).then(response => response.data);
    return {
        type: USER_TASKS,
        payload: promise
    }
}


// make the axios post in the action creator 