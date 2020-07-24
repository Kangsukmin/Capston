import React from 'react';
import store from '../store';
import { useFirebase } from 'react-redux-firebase'

export default function Sample(){
    const firebase = useFirebase()

    function addSampleTodo() {
        const sampleTodo = { text: 'Sample', done: false }
        return firebase.push('todos', sampleTodo)
    }
    return(
        <div>
            <h1>New Sample Todo</h1>
            <button onClick={addSampleTodo}>Add</button>
        </div>
    )
}