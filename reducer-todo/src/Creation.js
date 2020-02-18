import React, { useState, useReducer } from 'react';

import { simpRed, initState } from './reducers/simpReducer';

// dispatch takes in an action object, and calls the reducer function with state and that action.
console.log(initState)
const Title = () => {
    const [state, dispatch] = useReducer(simpRed, initState); // two args - reducer, initialState


    // const [title, setTitle] = useState('Hello earthlings!');
    // const [editing, setEditing] = useState(false);
    const [newTitleText, setNewTitleText] = useState('');

    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };
    return (
        <div>
            <h1>
                {state.item}{' '}
            </h1>
            {!state.completed ? (

                <button onClick={() => dispatch({ type: 'TOGGLE_COMPLETED' })} className="far fa-edit">

                    click to add more
                    </button>


            ) : (
                    <form>
                        <input
                            className="title-input"
                            type="text"
                            name="newText"
                            value={newTitleText}
                            onChange={handleChanges}
                        />
                        <button
                            onClick={() => {
                                dispatch({ type: 'UPDATE_COMPLETED', payload: newTitleText });
                            }}
                        >
                            Update List
          </button>
                    </form>
                )}
        </div>
    );
};

export default Title;
