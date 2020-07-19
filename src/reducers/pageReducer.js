const pageInitialState = {
    value : 0
}

export default function pageReducer(state = pageInitialState, action){
    switch(action.type) {
        case 0:
            return { value : 0 }
        case 1:
            return { value : 1 }
        case 2:
            return { value : 2 }
        default:
            return state;
    }
}