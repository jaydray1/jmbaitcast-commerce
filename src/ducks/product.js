const axios = 'axios';
const InitialState = {
    todos: []
}

const SOME_TYPE = 'SOME_TYPE';

export default  idontcare  = (state =  InitialState, action) => {
    switch (action.type) {
        // _FULFILLED REJECTED PENDING
        case SOME_TYPE + 'FULFILLED':
            return Object.assign({}, state, {todos: action.payload.data})
        case ACTION_TYPE_2:
        console.log( action.payload)
            return state
        default:
            return state
    }
}

function action1(todo){
    return{
        type: 'SOME_TYPE',
        // payload: 'data'
        payload: axios.get('/api/todos')
    }
}
function action2(){
    console.log( 'hello')
    return{
        type:  ACTION_2,
        payload: 'some data'
    }
}