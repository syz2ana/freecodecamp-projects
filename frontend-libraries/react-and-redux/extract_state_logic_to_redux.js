//define type 
const ADD = 'ADD';
//define action creator 
const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
}

// define redux reducer 
const messageReducer = (previousState = [], action) => {
    switch (action.type) {
        case ADD:
            return [...previousState, action.message];
            break;
        default:
            return previousState;
    }
}

//define redux store
const store = Redux.createStore(messageReducer);

